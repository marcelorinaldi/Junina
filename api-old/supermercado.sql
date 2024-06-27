-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: supermercado
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `avaliacao`
--

DROP TABLE IF EXISTS `avaliacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `avaliacao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nota` int DEFAULT NULL,
  `mensagem` longtext COLLATE utf8mb4_unicode_ci,
  `evento` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tempo` datetime DEFAULT NULL,
  `delete` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avaliacao`
--

LOCK TABLES `avaliacao` WRITE;
/*!40000 ALTER TABLE `avaliacao` DISABLE KEYS */;
INSERT INTO `avaliacao` VALUES (1,'aaaa',1,'bbbb',NULL,'2024-03-29 21:21:39',0),(2,'tttttt',1,'ggggg',NULL,'2024-03-29 23:03:56',1),(3,'',3,'mensagem',NULL,'2024-03-30 07:35:55',0),(4,'',2,'222',NULL,'2024-03-30 07:36:11',0),(5,'domingo',1,'cedo',NULL,'2024-03-31 08:30:58',0),(6,'dom 2',2,'menino doido',NULL,'2024-03-31 08:31:25',0);
/*!40000 ALTER TABLE `avaliacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `valor` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `imagem` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `quantidade` int NOT NULL,
  `apagado` int NOT NULL,
  `tempo` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES (1,'acucar 2kg','5','coca.webp',11,0,'0000-00-00 00:00:00'),(2,'suco','2','omo.jpg',0,1,'0000-00-00 00:00:00'),(3,'feijao 1kg','3','coca.webp',0,0,'0000-00-00 00:00:00'),(4,'pao','2','coca.webp',6,1,'0000-00-00 00:00:00'),(5,'queijo','4.50','coca.webp',0,0,'0000-00-00 00:00:00'),(6,'presunto','6','omo.jpg',0,0,'0000-00-00 00:00:00'),(7,'chocolate','3,5','coca.webp',0,0,'0000-00-00 00:00:00'),(8,'banana','4','omo.jpg',0,0,'0000-00-00 00:00:00'),(9,'tomate','1,5','omo.jpg',8,0,'0000-00-00 00:00:00'),(10,'alface','0,50','omo.jpg',0,0,'0000-00-00 00:00:00'),(11,'produ','12','',0,0,'2024-04-21 15:46:43'),(12,'teetse','11','',33,0,'2024-04-21 16:16:08'),(13,'peixe frito','11,90','',12,0,'2024-04-21 16:49:04'),(14,'vai','45','',56,0,'2024-04-21 16:49:59'),(15,'ola','33','',34,0,'2024-04-21 16:51:48'),(16,'com virus','10101','omo.jpg',123,1,'2024-04-21 16:56:09'),(17,'boa','sem','',0,0,'2024-04-21 18:07:16'),(18,'produto','valor','',0,1,'2024-04-21 18:08:15'),(19,'1','2','3',5,0,'2024-04-21 16:56:09'),(20,'marcelo','1','2',3,0,'2024-04-22 11:40:50');
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-24  8:07:36
