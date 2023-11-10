-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.30 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para proyecto_comite
CREATE DATABASE IF NOT EXISTS `proyecto_comite` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `proyecto_comite`;

-- Volcando estructura para tabla proyecto_comite.comites
CREATE TABLE IF NOT EXISTS `comites` (
  `id` int NOT NULL AUTO_INCREMENT,
  `instructor_fk` int NOT NULL,
  `tipo_falta` enum('disciplinaria','academica') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `descripcion_solicitud` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `carpeta_anexos` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `acta` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `estado` enum('espera','rechazado','aceptado','ejecucion') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT 'espera',
  `recomendacion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `anexar_plan_mejoramiento` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `resultado_plan_mejoramiento` enum('D','A') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `articulos` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `evidencia` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `instructor_fk` (`instructor_fk`),
  CONSTRAINT `comites_ibfk_1` FOREIGN KEY (`instructor_fk`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla proyecto_comite.comites: ~27 rows (aproximadamente)
INSERT INTO `comites` (`id`, `instructor_fk`, `tipo_falta`, `descripcion_solicitud`, `carpeta_anexos`, `acta`, `estado`, `recomendacion`, `anexar_plan_mejoramiento`, `resultado_plan_mejoramiento`, `createdAt`, `updatedAt`, `articulos`, `evidencia`) VALUES
	(4, 491, 'disciplinaria', 'Se requiere una revisión disciplinaria del caso.', 'https://drive.google.com/...', 'Este es el contenido del acta...', 'rechazado', 'Se recomienda tomar medidas disciplinarias.', 'https://drive.google.com/...', 'A', '2023-10-04 23:15:15', '2023-10-05 00:34:59', '', NULL),
	(5, 491, 'disciplinaria', 'Se requiere una revisión disciplinaria del caso.', 'https://drive.google.com/...', 'Este es el contenido del acta...', 'aceptado', 'Se recomienda tomar medidas disciplinarias.', 'https://drive.google.com/...', 'A', '2023-10-04 23:22:51', '2023-10-04 23:22:51', '', NULL),
	(7, 491, 'disciplinaria', 'Se requiere una revisión disciplinaria del caso.', 'https://drive.google.com/...', 'Este es el contenido del acta...', 'espera', 'Se recomienda tomar medidas disciplinarias.', 'https://drive.google.com/...', 'A', '2023-10-04 23:22:53', '2023-10-04 23:22:53', '', NULL),
	(8, 491, 'disciplinaria', 'Se requiere una revisión disciplinaria del caso.', 'https://drive.google.com/...', 'Este es el contenido del acta...', 'ejecucion', 'Se recomienda tomar medidas disciplinarias.', 'https://drive.google.com/...', 'A', '2023-10-04 23:22:55', '2023-10-04 23:22:55', '', NULL),
	(20, 491, 'academica', 'Ejemplo comite', NULL, NULL, 'espera', NULL, NULL, NULL, '2023-10-08 17:50:57', '2023-10-08 17:50:57', '14', NULL),
	(21, 491, 'disciplinaria', 'fdhidjhsdfakhdfjk', NULL, NULL, 'espera', NULL, NULL, NULL, '2023-10-27 11:50:10', '2023-10-27 11:50:10', '19,21', NULL),
	(22, 491, 'academica', 'sdfsfsadfa', NULL, NULL, 'espera', NULL, NULL, NULL, '2023-10-27 11:50:23', '2023-10-27 11:50:23', '21', NULL),
	(23, 491, 'academica', 'afsfsadfasdf', NULL, NULL, 'espera', NULL, NULL, NULL, '2023-10-30 15:51:57', '2023-10-30 15:51:57', '2,52', NULL),
	(24, 491, 'academica', 'dsfasdfafsaf', NULL, NULL, 'espera', NULL, NULL, NULL, '2023-10-30 15:54:39', '2023-10-30 15:54:39', '4', NULL),
	(25, 491, 'academica', 'sfdfdsafasdf', NULL, NULL, 'espera', NULL, NULL, NULL, '2023-10-30 15:57:53', '2023-10-30 15:57:53', '24', NULL),
	(26, 491, 'academica', 'sdfsdafasfsdfsa', NULL, NULL, 'espera', NULL, NULL, NULL, '2023-10-30 16:00:39', '2023-10-30 16:00:39', '2', NULL),
	(27, 491, 'academica', 'sdgfasasgasdgasdg', NULL, NULL, 'espera', NULL, NULL, NULL, '2023-10-30 16:00:51', '2023-10-30 16:00:51', '3', NULL),
	(28, 491, 'academica', 'dfghdfghdfghgdhggf', NULL, NULL, 'espera', NULL, NULL, NULL, '2023-10-30 16:01:03', '2023-10-30 16:01:03', '14', NULL),
	(29, 491, 'disciplinaria', 'afsfasdfasdfasdfsadf', NULL, NULL, 'espera', NULL, NULL, NULL, '2023-10-30 16:01:25', '2023-10-30 16:01:25', '5,4,8', NULL),
	(30, 491, 'academica', 'fsadfsadfsadfdsa', NULL, NULL, 'espera', NULL, NULL, NULL, '2023-10-30 16:01:41', '2023-10-30 16:01:41', '19,7', NULL),
	(31, 491, 'disciplinaria', 'sdfasdfasdfasdfsa', NULL, NULL, 'espera', NULL, NULL, NULL, '2023-10-30 16:01:55', '2023-10-30 16:01:55', '4', NULL),
	(32, 491, 'academica', 'sgfdgsdfgdsfgdsfgdsf', NULL, NULL, 'espera', NULL, NULL, NULL, '2023-10-30 16:02:13', '2023-10-30 16:02:13', '', NULL),
	(33, 491, 'academica', 'sdadsafasfasdfdsfasd', NULL, NULL, 'espera', NULL, NULL, NULL, '2023-10-30 16:02:33', '2023-10-30 16:02:33', '69,67', NULL),
	(34, 491, 'disciplinaria', 'afdsfasdfasdfdasfdsafdsfasdf', NULL, NULL, 'espera', NULL, NULL, NULL, '2023-10-30 16:02:49', '2023-10-30 16:02:49', '5,12', NULL),
	(35, 491, 'academica', 'sdfasfdddsafasd', NULL, NULL, 'espera', NULL, NULL, NULL, '2023-10-30 17:02:44', '2023-10-30 17:02:44', '8,9,21', NULL),
	(36, 491, 'academica', 'agasdgsdggsa', NULL, NULL, 'espera', NULL, NULL, NULL, '2023-11-09 14:54:06', '2023-11-09 14:54:06', '7', NULL),
	(37, 491, 'academica', 'EJEMPLO 1', NULL, NULL, 'espera', NULL, NULL, NULL, '2023-11-09 14:54:51', '2023-11-09 14:54:51', '7', NULL),
	(38, 491, 'academica', 'EJEMPLO 1', NULL, NULL, 'espera', NULL, NULL, NULL, '2023-11-09 14:58:29', '2023-11-09 14:58:29', '7', 'ejemplo'),
	(39, 491, 'academica', 'EJEMPLO 1', NULL, NULL, 'espera', NULL, NULL, NULL, '2023-11-09 14:59:02', '2023-11-09 14:59:02', '7', 'file-1699541942880.pdf'),
	(40, 491, 'disciplinaria', 'ejemplo de carga de archivos desde el frontend', NULL, NULL, 'espera', NULL, NULL, NULL, '2023-11-09 15:00:55', '2023-11-09 15:00:55', '19', 'file-1699542055173.zip'),
	(41, 491, 'disciplinaria', 'ejemplo de carga de archivos desde el frontend 2', NULL, NULL, 'espera', NULL, NULL, NULL, '2023-11-09 15:01:54', '2023-11-09 15:01:54', '19,21,7', 'file-1699542114331.zip'),
	(42, 491, 'disciplinaria', 'Descripcion de la solicitud ', NULL, NULL, 'espera', NULL, NULL, NULL, '2023-11-10 12:20:16', '2023-11-10 12:20:16', '7', 'file-1699618816551.pdf');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
