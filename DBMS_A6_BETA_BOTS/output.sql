-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: cricket_management_system
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `coach`
--

DROP TABLE IF EXISTS `coach`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coach` (
  `id` int DEFAULT NULL,
  `role` varchar(15) DEFAULT NULL,
  `tenure` int DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  KEY `c3` (`id`),
  CONSTRAINT `c3` FOREIGN KEY (`id`) REFERENCES `person` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coach`
--

LOCK TABLES `coach` WRITE;
/*!40000 ALTER TABLE `coach` DISABLE KEYS */;
INSERT INTO `coach` VALUES (18,'bat',5,'2019-01-02'),(19,'field',4,'2011-06-16'),(17,'bowl',3,'2008-10-08');
/*!40000 ALTER TABLE `coach` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `match_info`
--

DROP TABLE IF EXISTS `match_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `match_info` (
  `match_id` int NOT NULL,
  `opponent_team` varchar(20) DEFAULT NULL,
  `india_total_runs` int DEFAULT NULL,
  `opponent_total_run` int DEFAULT NULL,
  `winner` varchar(20) DEFAULT NULL,
  `format` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`match_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `match_info`
--

LOCK TABLES `match_info` WRITE;
/*!40000 ALTER TABLE `match_info` DISABLE KEYS */;
INSERT INTO `match_info` VALUES (1001,'Pakistan',195,158,'India','T20'),(1002,'Australia',338,297,'India','ODI'),(1003,'Sri Lanka',305,459,'Sri Lanka','Test'),(1004,'Sri Lanka',305,459,'Sri Lanka','T20'),(1005,'Australia',305,449,'India','T20');
/*!40000 ALTER TABLE `match_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `person`
--

DROP TABLE IF EXISTS `person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `person` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(15) DEFAULT NULL,
  `middle_name` varchar(15) DEFAULT NULL,
  `last_name` varchar(15) DEFAULT NULL,
  `name` varchar(45) GENERATED ALWAYS AS (concat(`first_name`,_utf8mb4' ',`middle_name`,_utf8mb4' ',`last_name`)) VIRTUAL,
  `dob` date DEFAULT NULL,
  `state` varchar(15) DEFAULT NULL,
  `Category` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `person`
--

LOCK TABLES `person` WRITE;
/*!40000 ALTER TABLE `person` DISABLE KEYS */;
INSERT INTO `person` (`id`, `first_name`, `middle_name`, `last_name`, `dob`, `state`, `Category`) VALUES (1,'Rohit','gurunath','sharma','1987-04-30','maharastra','player'),(2,'K','L','rahul','1992-04-18','karnataka','player'),(3,'Virat','','kohli','1988-11-05','delhi','player'),(4,'Ishan','','kishan','1998-01-03','maharastra','player'),(5,'Suryakumar','ashok','yadav','1990-12-20','Uttarpradesh','player'),(6,'Cheteswar','arvind','pujara','1988-01-25','Himachalpradesh','player'),(7,'Rishabh','rajendra','pant','1997-10-04','delhi','player'),(8,'Yuvraj','','singh','1981-12-12','Punjab','player'),(9,'Mahendra','singh','dhoni','1981-07-07','jharkhand','player'),(10,'Suresh','kumar','raina','1986-11-27','Uttarpradesh','player'),(11,'Ravindra','','jadeja','1988-12-06','Gujarat','player'),(12,'hardik','','pandya','1993-10-11','Gujarat','player'),(13,'Ravichandran','','ashwin','1986-09-17','tamilnadu','player'),(14,'jasprit','jasveer','bumrah','1993-12-06','punjab','player'),(15,'Ishant','','sharma','1988-09-02','delhi','player'),(16,'mohammad','shami','ahmed','1990-09-03','Uttarppradesh','player'),(17,'garry','','kiesten','1967-11-23','South Africa','coach'),(18,'Ravi','','shastri','1969-03-03','India','coach'),(19,'jhonty','','rhodes','1969-07-27','South Africa','coach');
/*!40000 ALTER TABLE `person` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player_info`
--

DROP TABLE IF EXISTS `player_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player_info` (
  `id` int DEFAULT NULL,
  `p_role` varchar(15) DEFAULT NULL,
  `debut_date` date DEFAULT NULL,
  KEY `c2` (`id`),
  CONSTRAINT `c2` FOREIGN KEY (`id`) REFERENCES `person` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player_info`
--

LOCK TABLES `player_info` WRITE;
/*!40000 ALTER TABLE `player_info` DISABLE KEYS */;
INSERT INTO `player_info` VALUES (4,'wicketkeeper','2021-03-14'),(5,'batsman','2021-03-14'),(6,'batsman','2010-10-09'),(7,'wicketkeeper','2017-02-01'),(8,'batsman','2000-10-03'),(9,'wicketkeeper','2004-12-23'),(10,'batsman','2005-07-30'),(11,'all-rounder','2009-02-07'),(12,'all-rounder','2016-01-26'),(13,'bowler','2010-06-05'),(14,'bowler','2016-01-23'),(15,'bowler','2007-05-25'),(16,'bowler','2013-01-06'),(1,'batsman','2007-06-23'),(2,'batsman','2014-12-26'),(3,'batsman','2008-08-18');
/*!40000 ALTER TABLE `player_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player_match_info`
--

DROP TABLE IF EXISTS `player_match_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player_match_info` (
  `id` int NOT NULL,
  `match_id` int NOT NULL,
  `total_runs_scored` int DEFAULT NULL,
  `strike_rate` float DEFAULT NULL,
  `total_balls_faced` int DEFAULT NULL,
  `fours` int DEFAULT NULL,
  `sixes` int DEFAULT NULL,
  `fifty` int DEFAULT NULL,
  `hundred` int DEFAULT NULL,
  `run_outs` int DEFAULT NULL,
  `wickets` int DEFAULT NULL,
  `runs_conceded` int DEFAULT NULL,
  `economy` float DEFAULT NULL,
  `maiden` int DEFAULT NULL,
  `overs_thrown` int DEFAULT NULL,
  `catches_taken` int DEFAULT NULL,
  `format` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`,`match_id`),
  KEY `c4` (`match_id`),
  CONSTRAINT `c4` FOREIGN KEY (`match_id`) REFERENCES `match_info` (`match_id`) ON DELETE CASCADE,
  CONSTRAINT `c5` FOREIGN KEY (`id`) REFERENCES `player_info` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player_match_info`
--

LOCK TABLES `player_match_info` WRITE;
/*!40000 ALTER TABLE `player_match_info` DISABLE KEYS */;
INSERT INTO `player_match_info` VALUES (1,1001,23,100,23,2,1,0,0,0,0,0,0,0,0,1,'T20'),(1,1002,57,81.43,70,3,1,1,0,0,0,0,0,0,0,1,'ODI'),(1,1004,13,100,23,2,1,0,0,0,0,0,0,0,0,1,'T20'),(2,1001,1,50,2,0,0,0,0,0,0,0,0,0,0,0,'T20'),(2,1002,107,98.1,109,16,0,0,1,0,0,0,0,0,0,0,'ODI'),(3,1001,50,147,34,6,1,0,0,0,0,0,0,0,0,0,'T20'),(3,1002,82,106.5,77,4,2,1,0,0,0,0,0,0,0,1,'ODI'),(4,1001,61,196.7,31,3,4,1,0,0,0,0,0,0,0,3,'T20'),(4,1002,48,177.78,27,4,3,0,0,0,0,0,0,0,0,1,'ODI'),(5,1001,53,176.6,30,4,2,1,0,0,0,0,0,0,0,1,'T20'),(5,1002,27,192.86,14,3,1,0,0,0,0,0,0,0,0,1,'ODI'),(7,1001,0,0,0,0,0,0,0,0,0,0,0,0,0,2,'T20'),(7,1002,11,366.67,3,1,1,0,0,0,0,0,0,0,0,1,'ODI'),(11,1001,0,0,0,0,0,0,0,1,2,28,7,0,4,2,'T20'),(11,1002,0,0,0,0,0,0,0,0,3,48,4.8,0,10,0,'ODI'),(12,1001,0,0,0,0,0,0,0,0,0,16,4,0,4,0,'T20'),(12,1002,0,0,0,0,0,0,0,0,3,50,5,0,10,0,'ODI'),(14,1001,0,0,0,0,0,0,0,0,2,28,7,1,4,0,'T20'),(14,1002,0,0,0,0,0,0,0,0,0,68,6.8,0,10,0,'ODI'),(15,1001,0,0,0,0,0,0,0,0,0,44,11,0,4,0,'T20'),(15,1002,0,0,0,0,0,0,0,0,0,69,6.9,0,10,0,'ODI'),(16,1001,0,0,0,0,0,0,0,0,0,36,9,0,4,0,'T20'),(16,1002,0,0,0,0,0,0,0,0,2,62,6.2,0,10,0,'ODI');
/*!40000 ALTER TABLE `player_match_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venue_info`
--

DROP TABLE IF EXISTS `venue_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venue_info` (
  `match_id` int DEFAULT NULL,
  `stadium_name` varchar(30) NOT NULL,
  `total_crowd_present` int DEFAULT NULL,
  `city` varchar(15) DEFAULT NULL,
  `state` varchar(20) DEFAULT NULL,
  `country` varchar(15) DEFAULT NULL,
  `location` varchar(45) GENERATED ALWAYS AS (concat(`city`,_utf8mb4', ',`state`,_utf8mb4', ',`country`)) VIRTUAL,
  PRIMARY KEY (`stadium_name`),
  UNIQUE KEY `total_crowd_present` (`total_crowd_present`),
  KEY `c8` (`match_id`),
  CONSTRAINT `c8` FOREIGN KEY (`match_id`) REFERENCES `match_info` (`match_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venue_info`
--

LOCK TABLES `venue_info` WRITE;
/*!40000 ALTER TABLE `venue_info` DISABLE KEYS */;
INSERT INTO `venue_info` (`match_id`, `stadium_name`, `total_crowd_present`, `city`, `state`, `country`) VALUES (1001,'Green Park Stadium',35895,'Kanpur','Uttarpradesh','India'),(1003,'Narendra Modi Stadium',101850,'Ahmedabad','Gujarat','India'),(1002,'Wankhede Stadium',31455,'Mumbai','Maharastra','India');
/*!40000 ALTER TABLE `venue_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-31 22:16:27
