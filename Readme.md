<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/IIT_Gandhinagar_Logo.svg/220px-IIT_Gandhinagar_Logo.svg.png" alt="Logo" width="200" height="200">
  </a>

  <h3 align="center">CS 432 Assignment-6</h3>
<div style="list-style: none;">
    <div>Aman 18110014</div>
    <div>Bhanu Pratap Singh 18110034</div>
    <div>Lovepreet Singh 18110094</div>
    <div>Mrityunjay Saraf 18110103</div>
    <div>Sumit Kumar 18110167</div>
    <div>Vaibhav Khandare 18110180</div>
  </div></div>
  <br/>

<br/>
<br/>
Q1
<br/>
CREATE TABLE person_hash_index AS SELECT * FROM person; <br/>
create index player_index using hash on person_hash_index(first_name(10)); <br/>
set profiling =1;  <br/>
(SELECT * FROM person WHERE first_name like 'Y%' <br/>
UNION <br/>
SELECT * FROM person WHERE last_name like 'S%'); <br/>
-- optimized query <br/>
(SELECT * FROM person_hash_index WHERE first_name like 'Y%' <br/>
UNION <br/>
SELECT * FROM person_hash_index WHERE last_name like 'S%'); <br/>
show profiles; <br/>
 <br/>
explain (SELECT * FROM person_hash_index WHERE first_name like 'Y%' <br/>
UNION <br/>
SELECT * FROM person_hash_index WHERE last_name like 'S%');
 <br/>
 ![87baa5e8-9754-4dfc-864e-6fb689e47d48](https://user-images.githubusercontent.com/94688048/163728647-2a57fcc4-9e6d-4be1-b31e-1409312e3022.jpg)<br/>
![23dc20c7-6acc-46de-b234-d776d3f434b9](https://user-images.githubusercontent.com/94688048/163728648-9bfb6461-156e-47ec-9d2f-8a3deb9a9a6d.jpg)
 <br/>
 
Q2 <br/>
set profiling =1;  <br/>
SELECT * FROM person WHERE first_name like 'R%'; <br/>
-- optimized query <br/>
SELECT * FROM person_hash_index WHERE first_name like 'R%'; <br/>
show profiles; <br/>
explain SELECT * FROM person_hash_index WHERE first_name like 'R%'; <br/>
 <br/>![d1fbebca-8291-4733-bb69-623773c64635](https://user-images.githubusercontent.com/94688048/163728661-f4fe20bd-8987-4b80-9e95-035fc28ef3ea.jpg )<br/>
![44f6f71d-bb7f-486c-9daf-7fd1de3e186f](https://user-images.githubusercontent.com/94688048/163728667-d45cdfd7-a2db-4c11-84c9-18f2246b0c95.jpg)
<br/>
Q3 <br/>
CREATE TABLE player_id_hash_index AS SELECT * FROM person; <br/>
create unique index player_id_index using hash on player_id_hash_index(id); <br/>
ALTER TABLE player_id_hash_index <br/>
modify id tinyint; <br/>
set profiling =1; <br/>
select * from person where id = 1; <br/>
-- optimized query <br/>
select * from player_id_hash_index where id =1; <br/>
show profiles; <br/>
explain select * from player_id_hash_index where id =1; <br/>
 ![a8ede516-d812-48e0-be33-f05742a07dc9](https://user-images.githubusercontent.com/94688048/163728677-f7b1aa89-4aa0-4122-b088-e6844d0ee650.jpg) <br/>
![25a69c02-9d3c-4fc4-8b18-72079b35ef26](https://user-images.githubusercontent.com/94688048/163728682-b3cccfcf-c689-4db7-95e0-f811bbeffa4f.jpg)

 <br/>
Q4 <br/>
alter table match_info <br/>
add date_on_match_played date; <br/>
 <br/>
update match_info set date_on_match_played = '2003-05-20' where match_id =1001; <br/>
update match_info set date_on_match_played = '2008-01-17' where match_id =1002; <br/>
update match_info set date_on_match_played = '2011-10-04' where match_id =1003; <br/>
update match_info set date_on_match_played = '2013-06-26' where match_id =1004; <br/>
update match_info set date_on_match_played = '2014-11-30' where match_id =1005; <br/>
 <br/>
CREATE TABLE match_info_btree_index AS SELECT * FROM match_info; <br/>
create unique index date_index using btree on  <br/>match_info_btree_index(date_on_match_played); <br/>
set profiling =1; <br/>
(select * from match_info where date_on_match_played > '2013-11-30'  <br/>
union  <br/>
select * from match_info where date_on_match_played < '2004-11-30'); <br/>
-- optimized query <br/>
(select * from match_info_btree_index where date_on_match_played > '2013-11-30' <br/>
union <br/>
select * from match_info_btree_index where date_on_match_played < '2004-11-30'); <br/>
show profiles; <br/>
explain (select * from match_info_btree_index where date_on_match_played > '2013-11-30' <br/>
union <br/>
select * from match_info_btree_index where date_on_match_played < '2004-11-30'); <br/>
![5e3ceda4-551d-42eb-81ed-02feec6c4585](https://user-images.githubusercontent.com/94688048/163728270-05872617-bfa1-499a-b13f-d2627ec5b741.jpg)<br/>
![6671776e-499a-4921-b7a7-256f3da2f661](https://user-images.githubusercontent.com/94688048/163728278-5dcfb79c-8818-45c9-bb22-de0f447d32d4.jpg)
 <br/>
<br/>
Q5 <br/>
CREATE TABLE match_duplicate AS SELECT * FROM match_info; <br/>
select * from match_duplicate; <br/>
Update match_duplicate <br/>
Set india_total_runs = NULL where match_id = 1003 ; <br/>
Select Count(*) from match_duplicate where india_total_runs = true; <br/>
 <br/>![90d22df1-799b-44e8-b87f-6d11191425d1](https://user-images.githubusercontent.com/94688048/163728545-3f9b5f1a-141a-4a83-b3b3-07ba17245848.jpg) <br/>
![0c644d43-4fe0-408a-90b7-c4142bbae43a](https://user-images.githubusercontent.com/94688048/163728691-b3e35c57-cede-452b-87a2-f6473991f804.jpg)

 <br/>
 Q6 <br/>
The Caching has been removed in 8.0 version so the command like  <br/>
SHOW VARIABLES LIKE 'query_cache_size'; <br/>
Does not return anything except the null value<br/>
<img width="122" alt="image" src="https://user-images.githubusercontent.com/94688048/163728845-5ac7bf25-8fd9-47f2-9cd0-1577a36e1270.png">

and query SHOW VARIABLES LIKE <br/>'have_query_cache'; <br/><img width="141" alt="image" src="https://user-images.githubusercontent.com/94688048/163728867-5d7d70e5-bdbf-4ef1-ac41-e1ae3eeb4157.png">

Returns the NO <br/>
Although the performance is increased in the Caching value but it has a scalability issue. It cannot scale with high throughput workloads on multicore machines. The scalability may be improved but with caching the performance will be increased for only those queries which hit the cache. While the rest remains the same performance. So it is difficult to improve the predictability of performance. <br/>
<br/>
<br/>
Q7 <br/>
-- index already created in Q4 <br/>
set profiling = 1; <br/>
select _ from match_info natural join venue_info where date_on_match_played = '2008-01-17'; <br/>
-- optimized query <br/>
select _ from match_info_btree_index natural join venue_info where date_on_match_played = '2008-01-17'; <br/>
show profiles; <br/>
explain select _ from match_info_btree_index natural join venue_info where <br/>date_on_match_played = '2008-01-17';
<br/>
![cd959e17-1385-4185-841a-bfbf68984c92](https://user-images.githubusercontent.com/94688048/163728557-b0d148cf-4e4f-4afb-8d08-e80cd91a6b55.jpg)<br/>
![c6f92f10-12ae-48df-be3d-330ec5c0284d](https://user-images.githubusercontent.com/94688048/163728564-87a10c64-dfc3-4f89-9ab4-3b108a0d7c24.jpg)
The query runs faster in join as compared to subquery. The sql have main property of join removing it will make it similar to excel sheet. Joining the table helps in using the defined relation. In 2NF or higher normalization, the table is been divided into parts to avoid data redundancy and optimize the process. Since the data will be less in 2NF or more so search time will reduce. <br/>
Disadvantages <br/>
With Join the time complexity increases and the spaces for the intermediate table are created. In multiple joins the complexity increases which means for maintaining the table proper care is required for foreign key changing and will have more constraints. Reduces the readability of query <br/>
-- Q8
<br/>
CREATE TABLE person_id_hash_index AS SELECT _ FROM person; <br/>
create unique index person_id_index using hash on person_id_hash_index(id); <br/>
CREATE TABLE player_match_info_hash_index AS SELECT _ FROM player_match_info; <br/>
create index player_match_info_index using hash on <br/> <br/>player_match_info_hash_index(match_id); <br/>
CREATE TABLE stadium_name_hash_index AS SELECT _ FROM venue_info; <br/>
create unique index stadium_name_index using hash on <br/> stadium_name_hash_index(stadium_name(20)); <br/>
set profiling =1; <br/>
select _ from person where id in (select id from player_match_info where <br/>
match_id = (select match_id from venue_info where stadium_name = 'Wankhede Stadium' )); <br/>
-- optimized query <br/>
select _ from person_id_hash_index where id in (select id from <br/> player_match_info_hash_index where <br/>
match_id = (select match_id from stadium_name_hash_index where stadium_name = 'Wankhede Stadium' )); <br/>
show profiles; <br/>
<br/>
explain select \* from person_id_hash_index where id in (select id from <br/> player_match_info_hash_index where <br/>
match_id = (select match_id from stadium_name_hash_index where stadium_name = 'Wankhede Stadium' )); <br/>
<br/>![2b8be9b3-66dd-451d-9190-b07ae5c08295](https://user-images.githubusercontent.com/94688048/163728585-f5243b17-1d18-460e-9f52-0659a0b19f54.jpg)<br/>
![144be350-f46b-4a90-aca1-20f0df8b20dd](https://user-images.githubusercontent.com/94688048/163728590-ac384738-cd4d-41e1-9ac3-3e0ad501ef47.jpg)

 <table>
<thead>
<tr>
<th>Name</th>
<th>Roll No</th>
<th>Contribution %</th>
</tr>
</thead>
<tbody>
<tr>
<td>Aman</td>
<td>18110014</td>
<td>16.6</td>
</tr>
<tr>
<td>Bhanu Pratap Singh</td>
<td>18110034</td>
<td>16.6</td>
</tr>
   <tr>
<td>Lovepreet Singh</td>
<td>18110094</td>
<td>16.6</td>
</tr>
    <tr>
<td>Mrityunjay Saraf</td>
<td>18110103</td>
<td>16.6</td>
</tr>
    <tr>
<td>Sumit Kumar</td>
<td>18110167</td>
<td>16.6</td>
</tr>
    <tr>
<td>Vaibhav Dilip Khandare</td>
<td>18110180</td>
<td>16.6</td>
</tr>
</tbody>
</table>
