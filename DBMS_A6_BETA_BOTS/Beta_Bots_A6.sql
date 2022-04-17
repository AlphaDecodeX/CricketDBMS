create database cricket_management_system;
use cricket_management_system;

select * from player_info;
select * from player_match_info;
select * from person;
select * from match_info;
select * from venue_info;
select * from coach;

-- creating person table 
create table person(id int primary key, 
first_name varchar(15), middle_name varchar(15), last_name varchar(15),
name varchar(45) generated always as (concat(first_name, ' ', middle_name, ' ', last_name)),
dob date, state varchar(15), age int );

Alter table person add column Category varchar(10);

-- Auto increment in Primary key
alter table person modify column id int auto_increment;

-- creating player_info table

create table player_info(id int, p_role varchar(15), debut_date date, 
constraint c2 foreign key (id) references person(id) on delete cascade);

-- coach table

create table coach(id int, role varchar(15), tenure int, start_date date, 
constraint c3 foreign key (id) references person(id) on delete cascade);

-- creating match_info table

create table match_info(match_id int primary key, opponent_team varchar(20), india_total_runs int,
opponent_total_run int, winner varchar(20), format varchar(10));

-- player-match_info table

create table player_match_info(id int, match_id int, total_runs_scored int, strike_rate float, 
total_balls_faced int, fours int, sixes int, fifty int, hundred int,
run_outs int, wickets int, runs_conceded int, economy float, 
maiden int, overs_thrown int, catches_taken int, format varchar(10),
constraint c4 foreign key (match_id) references match_info(match_id) on delete cascade,
constraint c5 foreign key (id) references player_info(id) on delete cascade);

-- Adding primary key as id & match_id combination is unique

alter table player_match_info add primary key (id, match_id);
-- Constraint 
alter table match_info add id int, add constraint c6 
foreign key (id) references player_info(id) on delete cascade;

-- creating venue_info table

create table venue_info(match_id int, stadium_name varchar(30) primary key, total_crowd_present int unique, 
street_name varchar(15), city varchar(15), country varchar(15),
location varchar(45) generated always as (concat(street_name, ' ', city, ' ', country)),
constraint c8 foreign key (match_id) references match_info(match_id) on delete cascade);drop table venue_info;



select * from person;
Select * from (select * from person natural join player_info where id =1) as e where Category = 'Player';
Select * from (select * from person natural join coach where id =3) as e where Category = 'Coach';

-- person data insert

insert into person(id, first_name, middle_name, last_name, dob, state, category) 
values(1, 'Rohit', 'gurunath', 'sharma', '1987-04-30','maharastra', 'player'); 

insert into person(id, first_name, middle_name, last_name, dob, state, category) 
values(2, 'K', 'L', 'rahul', '1992-04-18','karnataka', 'player'); 

insert into person(id, first_name, middle_name, last_name, dob, state, category) 
values(3, 'Virat', '', 'kohli', '1988-11-05','delhi', 'player'); 

insert into person(id, first_name, middle_name, last_name, dob, state, category) 
values(4, 'Ishan', '', 'kishan', '1998-01-03','maharastra', 'player'); 

insert into person(id, first_name, middle_name, last_name, dob, state, category) 
values(5, 'Suryakumar', 'ashok', 'yadav', '1990-12-20','Uttarpradesh', 'player');

insert into person(id, first_name, middle_name, last_name, dob, state, category) 
values(6, 'Cheteswar', 'arvind', 'pujara', '1988-01-25','Himachalpradesh', 'player'); 

insert into person(id, first_name, middle_name, last_name, dob, state, category) 
values(7, 'Rishabh', 'rajendra', 'pant', '1997-10-04','delhi', 'player'); 

insert into person(id, first_name, middle_name, last_name, dob, state, category) 
values(8, 'Yuvraj', '', 'singh', '1981-12-12','Punjab', 'player'); 

insert into person(id, first_name, middle_name, last_name, dob, state, category) 
values(9, 'Mahendra', 'singh', 'dhoni', '1981-07-07','jharkhand', 'player'); 

insert into person(id, first_name, middle_name, last_name, dob, state, category) 
values(10, 'Suresh', 'kumar', 'raina', '1986-11-27','Uttarpradesh', 'player'); 

insert into person(id, first_name, middle_name, last_name, dob, state, category) 
values(11, 'Ravindra', '', 'jadeja', '1988-12-06','Gujarat', 'player'); 

insert into person(id, first_name, middle_name, last_name, dob, state, category) 
values(12, 'hardik', '', 'pandya', '1993-10-11','Gujarat', 'player'); 

insert into person(id, first_name, middle_name, last_name, dob, state, category) 
values(13, 'Ravi', 'chandran', 'ashwin', '1986-09-17','tamilnadu', 'player'); 

insert into person(id, first_name, middle_name, last_name, dob, state, category) 
values(14, 'jasprit', 'jasveer', 'bumrah', '1993-12-06','punjab', 'player'); 

insert into person(id, first_name, middle_name, last_name, dob, state, category) 
values(15, 'Ishant', '', 'sharma', '1988-09-02','delhi', 'player'); 

insert into person(id, first_name, middle_name, last_name, dob, state, category) 
values(16, 'mohammad', 'shami', 'ahmed', '1990-09-03','Uttarppradesh', 'player'); 

insert into person(id, first_name, middle_name, last_name, dob, state, category) 
values(17, 'garry', '', 'kiesten', '1967-11-23','South Africa', 'coach');

insert into person(id, first_name, middle_name, last_name, dob, state, category) 
values(18, 'Ravi', '', 'shastri', '1969-03-03','India', 'coach'); 

insert into person(id, first_name, middle_name, last_name, dob, state, category) 
values(19, 'jhonty', '', 'rhodes', '1969-07-27','South Africa', 'coach'); 

-- insert in match_info & coach


insert into player_info values(1, 'batsman', '2007-06-23' );
insert into player_info values(2, 'batsman', '2014-12-26' );
insert into player_info values(3, 'batsman', '2008-08-18' );
insert into player_info values(4, 'wicketkeeper', '2021-03-14');
insert into player_info values(5, 'batsman', '2021-03-14' );
insert into player_info values(6, 'batsman', '2010-10-09' );
insert into player_info values(7, 'wicketkeeper', '2017-02-01' );
insert into player_info values(8, 'batsman', '2000-10-03' );
insert into player_info values(9, 'wicketkeeper', '2004-12-23' );
insert into player_info values(10, 'batsman', '2005-07-30' );
insert into player_info values(11, 'all-rounder', '2009-02-07' );
insert into player_info values(12, 'all-rounder', '2016-01-26' );
insert into player_info values(13, 'bowler', '2010-06-05' );
insert into player_info values(14, 'bowler', '2016-01-23' );
insert into player_info values(15, 'bowler', '2007-05-25' );
insert into player_info values(16, 'bowler', '2013-01-06' );

insert into coach values(17, 'bowl', 3, '2008-10-08');
insert into coach values(18, 'bat', 5, '2019-01-02');
insert into coach values(19, 'field', 4, '2011-06-16');

insert into match_info values (1001, 'Pakistan', 195, 158, 'India', 'T20');
insert into match_info values (1002, 'Australia', 338, 297, 'India', 'ODI');
insert into match_info values (1003, 'Sri Lanka', 305, 459, 'Sri Lanka', 'Test');
insert into match_info values (1004, 'Sri Lanka', 305, 459, 'Sri Lanka', 'T20');
insert into match_info values (1005, 'Australia', 305, 449, 'India', 'T20');


insert into player_match_info values(1, 1004,  13, 100, 23, 2,1,0,0,0,0,0,0,0,0,1,'T20');

insert into player_match_info values(1, 1001,    23, 100, 23, 2,1,0,0,0,0,0,0,0,0,0,1,'T20');
insert into player_match_info values(2, 1001,    1, 50, 2, 0,0,0,0,0,0,0,0,0,0,0,0,'T20');
insert into player_match_info values(3, 1001,    50, 147, 34, 6,1,0,0,0,0,0,0,0,0,0,0,'T20');
insert into player_match_info values(4, 1001,    61, 196.7, 31, 3,4,1,0,0,0,0,0,0,0,0,3,'T20');
insert into player_match_info values(5, 1001,    53, 176.6, 30, 4,2,1,0,0,0,0,0,0,0,0,1,'T20');
insert into player_match_info values(7, 1001,    0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,2,'T20');
insert into player_match_info values(11, 1001,   0, 0, 0, 0,0,0,0,1,1,2,28,7.00,0,4,2,'T20');
insert into player_match_info values(12, 1001,   0, 0, 0, 0,0,0,0,0,0,0,16,4.0,0,4,0,'T20');
insert into player_match_info values(14, 1001,   0, 0, 0, 0,0,0,0,0,0,2,28,7,1,4,0,'T20');
insert into player_match_info values(15, 1001,   0, 0, 0, 0,0,0,0,0,0,0,44,11.0,0,4,0,'T20');
insert into player_match_info values(16, 1001,   0, 0, 0, 0,0,0,0,0,0,0,36,9.0,0,4,0,'T20');

insert into venue_info(match_id, stadium_name, total_crowd_present, city, state,country) 
values(1001, 'Green Park Stadium', 35895, 'Kanpur', 'Uttarpradesh','India');

insert into venue_info(match_id, stadium_name, total_crowd_present, city, state,country) 
values(1002, 'Wankhede Stadium', 31455, 'Mumbai', 'Maharastra','India');

insert into venue_info(match_id, stadium_name, total_crowd_present, city, state,country) 
values(1003, 'Narendra Modi Stadium', 101850, 'Ahmedabad', 'Gujarat','India');


-- Query that print the desired result

Select id, name, format, dob,state,category,p_role,debut_date, 
count(*) as total_matches,
sum(total_runs_scored) as Career_runs,
avg(total_runs_scored) as Bat_Avg,
(strike_rate) as strike_rate,
sum(fours) as 4s, sum(sixes) as 6s, 
sum(fifty) as 50s, sum(hundred) as 100s, 
sum(wickets) as tot_wickets, avg(economy) as economy, sum(catches_taken) as catches 
from player_match_info natural join person natural join player_info
full group by id, format ;


-- India data

select * , sum(total_wins) as total_ind_matches from (select winner as team,  count(*) as total_wins from match_info group by winner) as e;





