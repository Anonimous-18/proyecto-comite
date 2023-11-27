-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-11-2023 a las 20:09:52
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto_comite`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aprendices`
--

CREATE TABLE `aprendices` (
  `id` int(11) NOT NULL,
  `documento` varchar(255) DEFAULT NULL,
  `contrato` enum('si','no') DEFAULT 'no',
  `historialAcademico` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `ficha_fk` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `aprendices`
--

INSERT INTO `aprendices` (`id`, `documento`, `contrato`, `historialAcademico`, `createdAt`, `updatedAt`, `ficha_fk`) VALUES
(1, '31', 'si', 'Institución: Universidad A, Título: Ingeniería Civil', '2023-11-18 16:41:33', '2023-11-18 16:41:33', 1),
(2, '32', 'no', 'Institución: Colegio B, Título: Bachillerato en Ciencias', '2023-11-18 16:44:09', '2023-11-18 16:44:09', 1),
(3, '33', 'si', 'Institución: Escuela C, Título: Técnico en Electricidad', '2023-11-18 16:44:09', '2023-11-18 16:44:09', 1),
(4, '34', 'si', 'Institución: Universidad D, Título: Licenciatura en Administración', '2023-11-18 16:44:09', '2023-11-18 16:44:09', 1),
(5, '35', 'no', 'Institución: Instituto E, Título: Curso de Desarrollo Web', '2023-11-18 16:44:09', '2023-11-18 16:44:09', 1),
(6, '36', 'si', 'Institución: Colegio F, Título: Bachillerato en Artes', '2023-11-18 16:44:09', '2023-11-18 16:44:09', 1),
(7, '37', 'no', 'Institución: Escuela G, Título: Técnico en Informática', '2023-11-18 16:44:09', '2023-11-18 16:44:09', 1),
(8, '38', 'si', 'Institución: Universidad H, Título: Maestría en Ciencias', '2023-11-18 16:44:09', '2023-11-18 16:44:09', 1),
(9, '39', 'si', 'Institución: Instituto I, Título: Curso de Marketing', '2023-11-18 16:44:09', '2023-11-18 16:44:09', 1),
(10, '40', 'no', 'Institución: Universidad J, Título: Doctorado en Ingeniería', '2023-11-18 16:44:09', '2023-11-18 16:44:09', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aprendices_implicados`
--

CREATE TABLE `aprendices_implicados` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `documento` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `comite_fk` int(11) DEFAULT NULL,
  `tipo_documento` enum('CC','TI') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `aprendices_implicados`
--

INSERT INTO `aprendices_implicados` (`id`, `usuario_id`, `documento`, `createdAt`, `updatedAt`, `comite_fk`, `tipo_documento`) VALUES
(70, 48, '32', '2023-11-20 23:30:06', '2023-11-20 23:30:06', 48, 'CC'),
(71, 49, '33', '2023-11-20 23:30:06', '2023-11-20 23:30:06', 48, 'CC'),
(72, 48, '32', '2023-11-20 23:34:14', '2023-11-20 23:34:14', 49, 'CC'),
(73, 48, '32', '2023-11-20 23:39:43', '2023-11-20 23:39:43', 50, 'CC'),
(74, 48, '32', '2023-11-20 23:55:30', '2023-11-20 23:55:30', 51, 'CC'),
(75, 49, '33', '2023-11-20 23:55:31', '2023-11-20 23:55:31', 51, 'CC'),
(76, 50, '34', '2023-11-20 23:55:31', '2023-11-20 23:55:31', 51, 'CC'),
(77, 53, '37', '2023-11-20 23:55:31', '2023-11-20 23:55:31', 51, 'CC'),
(78, 54, '38', '2023-11-20 23:55:31', '2023-11-20 23:55:31', 51, 'CC'),
(79, 52, '36', '2023-11-20 23:55:31', '2023-11-20 23:55:31', 51, 'CC'),
(80, 51, '35', '2023-11-20 23:55:31', '2023-11-20 23:55:31', 51, 'CC'),
(81, 55, '39', '2023-11-20 23:55:31', '2023-11-20 23:55:31', 51, 'CC'),
(82, 48, '32', '2023-11-21 00:01:48', '2023-11-21 00:01:48', 52, 'CC'),
(83, 49, '33', '2023-11-21 00:01:48', '2023-11-21 00:01:48', 52, 'CC'),
(84, 50, '34', '2023-11-21 00:01:48', '2023-11-21 00:01:48', 52, 'CC'),
(85, 49, '33', '2023-11-21 00:04:37', '2023-11-21 00:04:37', 53, 'CC'),
(86, 48, '32', '2023-11-21 00:04:37', '2023-11-21 00:04:37', 53, 'CC'),
(87, 19, '31', '2023-11-21 00:04:37', '2023-11-21 00:04:37', 53, 'CC'),
(88, 49, '33', '2023-11-21 00:41:31', '2023-11-21 00:41:31', 54, 'CC'),
(89, 49, '33', '2023-11-21 00:46:26', '2023-11-21 00:46:26', 55, 'CC'),
(90, 50, '34', '2023-11-21 00:46:26', '2023-11-21 00:46:26', 55, 'CC'),
(91, 48, '32', '2023-11-21 00:46:26', '2023-11-21 00:46:26', 55, 'CC'),
(92, 49, '33', '2023-11-21 00:59:54', '2023-11-21 00:59:54', 56, 'CC'),
(93, 19, '31', '2023-11-21 01:01:23', '2023-11-21 01:01:23', 57, 'CC'),
(94, 19, '31', '2023-11-21 01:03:05', '2023-11-21 01:03:05', 58, 'CC'),
(95, 19, '31', '2023-11-21 01:04:43', '2023-11-21 01:04:43', 59, 'CC'),
(96, 48, '32', '2023-11-21 01:11:11', '2023-11-21 01:11:11', 60, 'CC'),
(97, 49, '33', '2023-11-21 01:13:55', '2023-11-21 01:13:55', 61, 'CC'),
(98, 48, '32', '2023-11-21 01:19:43', '2023-11-21 01:19:43', 62, 'CC'),
(99, 48, '32', '2023-11-21 15:34:01', '2023-11-21 15:34:01', 63, 'CC'),
(100, 49, '33', '2023-11-21 15:34:01', '2023-11-21 15:34:01', 63, 'CC'),
(101, 49, '33', '2023-11-22 21:26:34', '2023-11-22 21:26:34', 64, 'CC'),
(102, 19, '31', '2023-11-27 17:24:25', '2023-11-27 17:24:25', 65, 'CC'),
(103, 48, '32', '2023-11-27 17:24:25', '2023-11-27 17:24:25', 65, 'CC'),
(104, 49, '33', '2023-11-27 18:38:02', '2023-11-27 18:38:02', 66, 'CC'),
(105, 48, '32', '2023-11-27 18:38:02', '2023-11-27 18:38:02', 66, 'CC'),
(106, 49, '33', '2023-11-27 18:41:41', '2023-11-27 18:41:41', 67, 'CC'),
(107, 48, '32', '2023-11-27 18:41:41', '2023-11-27 18:41:41', 67, 'CC');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

CREATE TABLE `articulos` (
  `art_id` int(11) NOT NULL,
  `art_titulo` varchar(250) NOT NULL,
  `art_descripcion` varchar(500) NOT NULL,
  `cap_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`art_id`, `art_titulo`, `art_descripcion`, `cap_id`) VALUES
(1, 'Formación profesional integral.', 'La formación profesional que imparte el SENA, constituye\r\nactuar crítica y creativamente en el mundo del trabajo y de la vida.', 1),
(2, 'Comunidad educativa', 'En la Formación Profesional Integral participan diferentes actores, \r\ncomo aprendices, instructores, personal administrativo y de apoyo, directivos, \r\nfamilia, egresados, gremios empresariales, instituciones educativas, \r\ntrabajadores y representantes de diferentes sectores económicos y \r\ncooperantes internacionales.', 1),
(3, 'Aprendiz SENA', 'Ser aprendiz SENA implica estar matriculado en programas de \r\nformación profesional en diferentes modalidades (presencial, virtual y a \r\ndistancia). El objetivo es adquirir competencias de manera integral para \r\ncontribuir al desarrollo personal, social y laboral, basado \r\nen valores morales, éticos y culturales.', 1),
(4, 'Cumplimiento de principios y valores', 'El aprendiz y demás miembros de la comunidad SENA deberán \r\nrespetar los principios y valores institucionales que regulan y hacen posible \r\nla convivencia de los miembros del Centro de Formación.', 1),
(5, 'Centros de convivencias', 'Los centros de formación profesional que ofrecen \r\nel servicio de Centros de Convivencia para aprendices deben cumplir con \r\ndisposiciones específicas establecidas en este Reglamento.', 1),
(6, 'Alcance', 'El reglamento aplica a todos los aprendices del SENA en \r\ncualquier sede, jornada, nivel, modalidad y tipo de formación, \r\nincluyendo convenios. También se aplica en lugares donde el aprendiz\r\n representa a la institución o cuando lleva el uniforme institucional.', 1),
(7, 'Derechos del Aprendiz SENA', 'El derecho es la potestad que tiene el \naprendiz de gozar de libertades y oportunidades, sin ninguna discriminación\n por razones de sexo, raza, origen nacional o familiar, lengua, religión, \n opinión política o filosófica. Además de los consagrados en la constitución y la ley, el aprendiz SENA espera \nde la Institución', 2),
(8, 'Derechos del Aprendiz SENA', 'Se entiende por deber, la obligación legal, social y moral que\ncompromete a la persona a cumplir con determinada actuación, asumiendo con responsabilidad todos\nsus actos, para propiciar la armonía, el respeto, la integración, el bienestar común, la sana convivencia,\nel servicio a los demás, la seguridad de las personas y de los bienes de la institución.', 3),
(9, 'Prohibiciones', 'Se considerarán prohibiciones para los Aprendices del \nSENA.', 3),
(10, 'Ingreso', 'La edad mínima de ingreso a la formación profesional \r\nintegral del SENA es de 14  años. ', 4),
(11, ' Registro en el sistema de gestión académica', 'Es el procedimiento \r\nmediante el cual el  usuario ingresa la relación de sus datos personales \r\ny de contacto en el sistema de gestión académico  bajo su responsabilidad \r\ny aceptando las políticas de seguridad y confidencialidad. ', 4),
(12, 'Matricula', ' Es la formalización del ingreso del aspirante \r\nseleccionado mediante el registro  de la matrícula en el sistema de \r\ngestión académico administrativo, previo el cumplimiento de los  \r\nrequisitos de ingreso establecidos en el respectivo diseño curricular \r\ny el diligenciamiento y firma del  compromiso del aprendiz. ', 4),
(13, 'Tramite de las novedades académicas y administrativa', 'Las \r\nnovedades en trámites  académicos y administrativos que requiere \r\nhacer el aprendiz durante su proceso de formación, \r\nante la  entidad. ', 4),
(14, 'Gestión de Novedades', 'El Aprendiz puede solicitar autorización \r\npara las novedades. ', 4),
(15, 'Certificación', 'La certificación es el procedimiento mediante el \r\ncual, la entidad hace el  reconocimiento formal de los resultados y \r\ncompetencias aprobadas de aprendizaje obtenidos por el  aprendiz SENA \r\ndurante su proceso formativo. ', 4),
(16, 'Expedición de documentos académicos', 'El Centro de Formación \r\nemite documentos sin costo para el Aprendiz. Títulos, Actas de grado, \r\nconstancias de notas y Certificados desde 2010 se obtienen gratis \r\nen formato digital desde la web. Las constancias del SENA se \r\ndescargan del Sistema de Gestión Académica con usuario y contraseña \r\ndel Aprendiz.', 4),
(17, 'Verificación de documentos académicos SENA para trámites de apostilla', 'El proceso verifica documentos académicos presentados por el aprendiz en \r\nel SENA. La autenticidad se garantiza con sello y firma reconocida por el \r\nMinisterio de Relaciones Exteriores. Luego, se procede a legalizar o apostillar \r\nen la Cancillería. Esto es necesario para validar los documentos en el extranjero. \r\nLa verificación no tiene costo.', 4),
(18, 'Solicitudes', 'Los Centros de Formación serán responsables de gestionar\r\n los trámites académicos y administrativos para atender las diferentes solicitudes \r\nde los aprendices durante su  proceso formativo', 4),
(19, 'Participación y Cumplimiento', 'El Aprendiz SENA es responsable de su \r\nformación y debe involucrarse en actividades presenciales o virtuales. Debe \r\ncumplir con criterios y evidencias de aprendizaje establecidos en la ruta \r\nde aprendizaje, que incluye etapas lectivas y productivas en programas de \r\ntitulación.', 5),
(20, 'Incumplimientos', 'se configuran cuando el aprendiz no presenta evidencias \r\nde aprendizaje  en las fechas establecidas, no asiste o deja de participar \r\nen actividades presenciales o virtuales,  pactadas en la ruta de aprendizaje. \r\nLos incumplimientos se catalogan en dos: justificados y no  justificados. Además, \r\nse constituyen en faltas académicas o disciplinarias según sea el caso.  \r\n', 5),
(21, 'Incumplimiento justificado', 'Se configura incumplimiento justificado por \r\nalguna de las  siguientes causas con sus respectivos soportes', 5),
(22, 'Incumplimiento injustificado', 'Se aplica en las siguientes situaciones: \r\n1. El aprendiz no informa o justifica incumplimientos ante el instructor, \r\nya sea antes o en los tres (3) días hábiles siguientes, con pruebas justificativas. \r\n2. Aunque el aprendiz informa a tiempo, las razones o pruebas no respaldan el \r\nincumplimiento.', 5),
(23, 'Deserción', ' Es el abandono de la formación por parte del aprendiz', 5),
(24, 'Procedimiento en caso de deserción', 'El aprendiz que no justifica sus faltas \r\no no presenta las evidencias de su formación puede ser cancelado por deserción por \r\nel comité de evaluación y seguimiento del Centro.', 5),
(25, 'Faltas', ' Se consideran faltas las acciones u omisiones que alteran \r\nel normal desarrollo de la  formación, la convivencia en la comunidad educativa, \r\nel desempeño académico de sus compañeros, y  que al presentarse originan la \r\nnecesidad de una medida formativa y/o sancionatoria. \r\n', 6),
(26, 'Faltas academicas', ' Están relacionadas directamente con las actuaciones \r\nu omisiones del  aprendiz con relación al cumplimiento de los deberes de índole \r\nacadémico. Al presentarse la falta, se  aplican medidas formativas o sancionatorias.\r\n', 6),
(27, 'Faltas disciplinarias', ' stán relacionadas directamente con factores \r\ncomportamentales del  Aprendiz. Se configura la falta disciplinaria cuando \r\nel Aprendiz incurre con su actuación u omisión en  una de las prohibiciones, \r\nincumple un deber o se extralimita en el ejercicio de sus derechos de carácter \r\n comportamental.', 6),
(28, 'Calificación de las faltas', ' Las faltas académicas y disciplinarias deben \r\ncalificarse como: Leves, Graves y Gravísimas. ', 6),
(29, 'Criterios para calificar la falta', '  Para hacer la calificación \r\ndefinitiva de la falta en uno de los  tres grados señalados anteriormente. ', 6),
(30, 'Medidas formativas.', 'Las medidas formativas son acciones \r\npara corregir o prevenir faltas leves o mejorar el rendimiento o \r\nla conducta del Aprendiz Sena.', 7),
(31, 'Tipos de medidas formativas.', 'Se aplican distintos tipos de \r\nmedidas según el caso:  académicas y/o disciplinarias. \r\n', 7),
(32, 'Medidas formativas Académicas', 'Son medidas adoptadas por el \r\nSENA de carácter  pedagógico, para garantizar el logro de los resultados \r\nde aprendizaje. Se adoptan con el fin de prevenir  \r\nel abandono del proceso formativo y para lograr avances académicos \r\nacordes con el desarrollo del  programa de formación. \r\n', 7),
(33, 'Medidas formativas disciplinarias', 'Son medidas adoptadas por el \r\nSENA de carácter  comportamental, actitudinal o social, para \r\npropiciar en el Aprendiz cambios en su conducta. \r\n', 7),
(34, 'Medidas Sancionatorias.', 'Las sanciones son medidas por \r\nfaltas graves del Aprendiz Sena; se aplican según la gravedad \r\ny se registran en los sistemas de gestión de la Institución.', 7),
(35, 'Instancias de evaluación y aplicación de las medidasformativas y sanciones', 'En el debido proceso, hay dos instancias que proponen las medidas a aplicar \r\nal Aprendiz Sena; la subdirección del Centro es la que decide. Las instancias \r\nson: el equipo ejecutor y el comité de evaluación y seguimiento.', 7),
(36, 'Equipo ejecutor del programa de formación', 'El comité es el encargado de analizar y plantear rutas de manejo para \r\ncasos académicos de los aprendices y remitir al comité de seguimiento y \r\nevaluación. Está conformado por el Coordinador académico, los Instructores \r\ny el Aprendiz Vocero.', 7),
(37, ' Comité de evaluación y seguimiento del Centro de formación.', 'El Comité de Evaluación y Seguimiento es la segunda instancia de \r\nlas medidas formativas académicas y la primera de las disciplinarias \r\ny sanciones. Sus recomendaciones se entregan a la Subdirección \r\ndel Centro para su decisión final.', 7),
(38, 'Criterios para aplicación de sanciones', 'publicidad, contradicción, presunción de inocencia, valoración integral de las pruebas \r\ny descargos, motivación de la decisión, proporcionalidad, impugnación y oportunidad. Estos principios \r\nbuscan garantizar el debido proceso y el respeto por los derechos del Aprendiz.', 7),
(39, 'Procedimiento para la aplicación de sanciones. ', 'El procedimiento se inicia con el informe o queja de cualquier persona que conozca \r\nla falta disciplinaria o académica. Se debe abrir un expediente con los documentos y pruebas del caso.\r\n El informe o queja se puede radicar por los canales institucionales.', 7),
(40, 'Citación al Aprendiz', 'La Coordinación Académica citará al (los) Aprendiz \r\n (ces) al Comité de Evaluación y Seguimiento dentro de los tres días hábiles \r\n de recibir el informe o queja. La comunicación se enviará al domicilio \r\n o correo electrónico del Aprendiz o su representante legal.\r\n', 7),
(41, 'Sesión del Comité de Evaluación y Seguimiento', 'El Comité de Evaluación y \r\nSeguimiento se reúne cuando sea necesario con quórum de la mitad más uno. \r\nEl (los) Aprendiz (ces) puede(n) presentar descargos, pruebas y testimonios \r\no no asistir por decisión propia. Si no asiste(n) sin justificación o fuerza \r\nmayor, el Comité recomendará la sanción a la Subdirección de Centro.', 7),
(42, 'Acto administrativo sancionatorio', 'La Subdirección de Centro puede solicitar \r\nal(los) Aprendiz (ces) que amplíe(n) sus descargos y pruebas. Luego, decidirá \r\ny expedirá el acto administrativo motivado en cinco días hábiles o se apartará \r\nde la recomendación del Comité con razones.', 7),
(43, 'Notificacion al aprendiz', 'El acto administrativo se notificará al \r\nAprendiz personalmente o por aviso al domicilio registrado. \r\nEl aviso contendrá la información del acto, los recursos, las autoridades \r\ny los plazos. La notificación se surtirá al día siguiente de la entrega \r\ndel aviso.', 7),
(44, 'Delegación', 'Se delega en los Subdirectores de Centro \r\nconocer del recurso de reposición  interpuesto por los aprendices\r\n contra el acto administrativo que resuelve una situación académica o  \r\n disciplinaria. ', 7),
(45, 'Recurso de reposición', 'El Aprendiz puede presentar el Recurso \r\n de Reposición contra el acto administrativo de la Subdirección del \r\n Centro. El recurso se rige por la Ley 1437 de 2011 y debe ser resuelto \r\n sin agravar la sanción.', 7),
(46, 'Firmeza del acto administrativo', 'El acto administrativo se registra en \r\n el Sistema de Gestión Académica y se informa a las instancias pertinentes. \r\n El Aprendiz pierde los estímulos e incentivos, entrega el carné y se pone a \r\n paz y salvo.', 7),
(47, 'Evaluación del Aprendizaje.', 'La Evaluación del Aprendizaje en el SENA \r\nse basa en evidencias de aprendizaje comprobables y en la aplicación práctica \r\ndel conocimiento.', 8),
(48, 'Las evidencias de aprendizaje.', 'Las evidencias son los referentes que \r\npermiten identificar los logros de los aprendices en relación con los resultados \r\nde aprendizaje y el saber, el saber hacer y el ser. Las evidencias son de \r\nconocimiento, de desempeño y de producto y se complementan entre sí.', 8),
(49, 'Transparencia de la evaluación de aprendizaje', 'Hace referencia a la claridad de \r\nlos  parámetros de evaluación y los criterios para valorar las evidencias, que \r\nlos aprendices, deben conocer  y tener claro previamente al desarrollo de las mismas. \r\n', 8),
(50, 'Acompañamiento en el proceso evaluativo.', 'El instructor o responsable evalúa \r\nel proceso de formación con el aprendiz, basándose en los criterios de evaluación y \r\nla ruta de aprendizaje, y retroalimenta y ajusta las estrategias según lo concertado.\r\n', 8),
(51, ' Acompañamiento en el proceso evaluativo.', 'En el SENA se utilizan dos tipos de \r\njuicios de evaluación para  expresar el logro del aprendizaje o la carencia del logro', 8),
(52, 'Seguimiento de los resultados.', 'El instructor o co-formador hace \r\nhasta dos planes de mejoramiento para el aprendiz que no logre el resultado \r\nde aprendizaje y los registra en el portafolio de evidencias.', 8),
(53, 'Inconformidad con la evaluación', 'El aprendiz que esté en desacuerdo con la \r\nevaluación  aplicada por el Instructor, podrá solicitar la revisión de \r\nlos resultados', 8),
(54, 'Representatividad de los aprendices', 'Es una estrategia institucional \r\nque permite a los aprendices de formación titulada elegir representantes \r\nde ficha o de Centro por modalidad y jornada, para participar en la \r\ncomunidad SENA.', 9),
(55, 'Representantes voceros de ficha.', 'Son aprendices de formación titulada \r\nque se destacan por su desempeño y actitudes y que facilitan la interacción \r\ncon la comunidad educativa. Cada grupo tiene un vocero principal y uno suplente, \r\nelegidos por el grupo en el primer mes de formación.', 9),
(56, 'Requisitos y condiciones para ser Vocero de ficha', 'Los requisitos para ser Vocero de Ficha son:Ser postulado o aceptar ser postulado por los aprendices del mismo grupo.\r\nEstar activo en su programa de formación.', 9),
(57, 'Responsabilidades del Vocero de ficha.', 'Las funciones de los Voceros de Ficha\r\nPromover la participación de los aprendices en el proyecto formativo y en el Plan de Bienestar al aprendiz.', 9),
(58, 'Elección de los voceros de ficha', 'La elección de vocero de ficha se hace por \r\npostulación libre y voluntaria de los aprendices en el primer mes de formación. Los \r\naprendices eligen democráticamente al vocero y suplente que los representará. El \r\nproceso se registra en un acta firmada por los aprendices y el instructor. El \r\ninstructor entrega el acta a Bienestar al aprendiz. El vocero puede ser reelegido \r\nsi cumple con su rol y el grupo lo aprueba.', 9),
(59, 'Revocatoria de la designación de los voceros', 'Los voceros de ficha pueden \r\nser relevados por sus compañeros si incumplen sus responsabilidades o \r\nfaltas académicas o disciplinarias, o si se postulan como candidatos a \r\nrepresentantes de centro. El proceso se documenta en un acta firmada por \r\nlos aprendices y el instructor.', 9),
(60, 'Suplencia de voceros', 'En el caso que se requiera suplir o remover al vocero \r\nde ficha, el  vocero suplente asumirá las responsabilidades de vocero de ficha \r\n(grupo). La suplencia durará el  tiempo que le faltaba al vocero principal \r\nrevocado para concluir el periodo.', 9),
(61, 'Representantes de Centro', 'Son aprendices de formación titulada que se \r\ndestacan por su desempeño, liderazgo y trabajo en equipo y que son elegidos \r\ndemocráticamente para representar los intereses de los aprendices del Centro \r\nde Formación ante las instancias del SENA.', 9),
(62, 'Número de Representantes por Centro de Formación.', 'Cada centro de formación tendrá  un (1) \r\nrepresentante principal y un (1) representante suplente por modalidad y jornada \r\nde formación.  Las instituciones en convenio de ampliación de cobertura tendrán \r\ntambién un (1) representante principal y un (1) representante suplente por\r\n modalidad y jornada de formación, en las que desarrollen  los programas SENA. ', 9),
(63, 'Representantes de Centro', 'El periodo de representación de los aprendices electos \r\nserá  de un (1) año de duración, contado a partir de suscrita la \r\nresolución de designación del o los  representantes. \r\n', 9),
(64, 'Requisitos y condiciones para postularse como Representante de los \r\nAprendices del  Centro', 'Para ser representante de aprendices SENA se requiere: Estar matriculado en un \r\nprograma de formación titulada de más de 15 meses en el Centro de \r\nFormación, modalidad y jornada que se postula, Estar cursando o haber cursado el \r\nprimer trimestre y tener mínimo 13 meses pendientes por cursar.\r\nDiligenciar el formulario de inscripción.', 9),
(65, ' Verificación de requisitos y condiciones para postularse como Representante de los  Aprendices del Centro', 'Los Centros de Formación verificarán el cumplimiento de los requisitos de \r\nlos aprendices inscritos y harán acta con los conceptos de verificación. \r\nLos resultados se informarán a los aprendices y a la \r\ncomunidad educativa por medios institucionales.', 9),
(66, 'Responsabilidades del Representante de Aprendices en el Centro', 'El representante de aprendices SENA debe presentar una propuesta \r\nprogramática que se ajuste a los principios, valores y procederes éticos \r\ninstitucionales, al Plan Nacional Integral de Bienestar al Aprendiz y a este \r\nreglamento. La propuesta debe tener un plan de acción.', 9),
(67, 'Dependencia responsable del proceso de Elección de Representantes de aprendices', 'Las Subdirecciones de Centro o la entidad conviniente se encargan de la elección \r\nde representantes de aprendices. Las evidencias del proceso son responsabilidad \r\nde las Subdirecciones y deben seguir las normas de gestión documental del SENA.', 9),
(68, 'Procedimiento para elegir Representante de los Aprendices por Centro.', 'La elección de representantes de aprendices se hace entre marzo y abril de \r\ncada año. Cada centro de formación define el cronograma y la forma de cada \r\nactividad electoral.', 9),
(69, 'Revocatoria de la designación del Representante de Aprendiz SENA.', 'Los  representantes principales electos del Centro de Formación, pueden \r\nser removidos de su  representación perdiendo su investidura y \r\nrepresentatividad ante la Comunidad Educativa', 9),
(70, 'Suplencia de Representante de aprendices', 'Cuando se haga efectiva la revocatoria a la  elección de los \r\nrepresentantes, asumirá el cargo el Suplente respectivo.  \r\n', 9),
(71, '', 'La Dirección de Formación Profesional desarrollará un plan para divulgar el presente  reglamento en la comunidad educativa. ', 9),
(72, '', 'El presente Acuerdo rige a partir de la fecha de su publicación en el Diario Oficial y deroga  ', 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `capitulos`
--

CREATE TABLE `capitulos` (
  `cap_id` int(11) NOT NULL,
  `cap_titulo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `capitulos`
--

INSERT INTO `capitulos` (`cap_id`, `cap_titulo`) VALUES
(1, 'PRINCIPIOS GENERALES'),
(2, 'DERECHOS, ESTIMULOS DEL APRENDIZ SENA'),
(3, 'DEBERES Y PROHIBICIONES DEL APRENDIZ SENA'),
(4, 'TRAMITES ACADEMICOS Y ADMINISTRATIVOS'),
(5, 'PROCESO DE FORMACION, INCUMPLIMIENTO Y DESERCION.'),
(6, 'FALTAS ACADÉMICAS Y DISCIPLINARIAS'),
(7, 'MEDIDAS FORMATIVAS Y SANCIONES'),
(8, 'EVALUACIÓN'),
(9, 'REPRESENTATIVIDAD DE LOS APRENDICESS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comites`
--

CREATE TABLE `comites` (
  `id` int(11) NOT NULL,
  `instructor_fk` int(11) NOT NULL,
  `tipo_falta` enum('disciplinaria','academica') NOT NULL,
  `descripcion_solicitud` varchar(255) NOT NULL,
  `carpeta_anexos` varchar(255) DEFAULT 'valor_por_defecto',
  `acta` text DEFAULT NULL,
  `estado` enum('espera','rechazado','aceptado','ejecucion','finalizado') DEFAULT 'espera',
  `recomendacion` varchar(255) DEFAULT NULL,
  `anexar_plan_mejoramiento` varchar(255) DEFAULT NULL,
  `resultado_plan_mejoramiento` enum('D','A') DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp(),
  `articulos` varchar(255) NOT NULL,
  `evidencia` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comites`
--

INSERT INTO `comites` (`id`, `instructor_fk`, `tipo_falta`, `descripcion_solicitud`, `carpeta_anexos`, `acta`, `estado`, `recomendacion`, `anexar_plan_mejoramiento`, `resultado_plan_mejoramiento`, `createdAt`, `updatedAt`, `articulos`, `evidencia`) VALUES
(48, 3, 'academica', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500', 'valor_por_defecto', NULL, 'aceptado', NULL, NULL, NULL, '2023-11-20 23:30:06', '2023-11-21 14:37:32', '8', 'Cafe magico.png-1700523006130.png'),
(49, 3, 'academica', 'res.status(500).json({ error: \"Hubo un error al obtener los datos\" });\r\n    throw error;', 'valor_por_defecto', NULL, 'aceptado', NULL, NULL, NULL, '2023-11-20 23:34:14', '2023-11-23 19:47:14', '2', 'Cafe magico.png-1700523254762.png'),
(50, 3, 'academica', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500', 'valor_por_defecto', NULL, 'espera', NULL, NULL, NULL, '2023-11-20 23:39:42', '2023-11-20 23:39:42', '3', 'Cafe magico.png-1700523582952.png'),
(51, 3, 'disciplinaria', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500', 'valor_por_defecto', NULL, 'rechazado', NULL, NULL, NULL, '2023-11-20 23:55:30', '2023-11-23 20:02:11', '2', 'Cafe magico.png-1700524530838.png'),
(52, 3, 'disciplinaria', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500', 'valor_por_defecto', NULL, 'espera', NULL, NULL, NULL, '2023-11-21 00:01:48', '2023-11-21 00:01:48', '3', 'Cafe magico.png-1700524908626.png'),
(53, 3, 'disciplinaria', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500', 'valor_por_defecto', NULL, 'espera', NULL, NULL, NULL, '2023-11-21 00:04:37', '2023-11-21 00:04:37', '4', 'Cafe magico.png-1700525077496.png'),
(54, 3, 'academica', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500', 'valor_por_defecto', NULL, 'espera', NULL, NULL, NULL, '2023-11-21 00:41:31', '2023-11-21 00:41:31', '3', 'Cafe magico.png-1700527291730.png'),
(55, 3, 'disciplinaria', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500', 'valor_por_defecto', NULL, 'espera', NULL, NULL, NULL, '2023-11-21 00:46:26', '2023-11-21 00:46:26', '3', 'Cafe magico.png-1700527586633.png'),
(56, 3, 'disciplinaria', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500', 'valor_por_defecto', NULL, 'espera', NULL, NULL, NULL, '2023-11-21 00:59:54', '2023-11-21 00:59:54', '1', 'Cafe magico.png-1700528394437.png'),
(57, 3, 'academica', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500', 'valor_por_defecto', NULL, 'espera', NULL, NULL, NULL, '2023-11-21 01:01:23', '2023-11-21 01:01:23', '', 'Cafe magico.png-1700528483543.png'),
(58, 3, 'disciplinaria', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500', 'valor_por_defecto', NULL, 'espera', NULL, NULL, NULL, '2023-11-21 01:03:05', '2023-11-21 01:03:05', '', 'Cafe magico.png-1700528585659.png'),
(59, 3, 'disciplinaria', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500', 'valor_por_defecto', NULL, 'espera', NULL, NULL, NULL, '2023-11-21 01:04:43', '2023-11-21 01:04:43', '2', 'Cafe magico.png-1700528683495.png'),
(60, 3, 'disciplinaria', 'articLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500', 'valor_por_defecto', NULL, 'espera', NULL, NULL, NULL, '2023-11-21 01:11:11', '2023-11-21 01:11:11', '2', 'Cafe magico.png-1700529071163.png'),
(61, 3, 'academica', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500', 'valor_por_defecto', NULL, 'espera', NULL, NULL, NULL, '2023-11-21 01:13:55', '2023-11-21 01:13:55', '1,3', 'cafe.sql-1700529235769.sql'),
(62, 3, 'academica', 'articuloId articuloId articuloId', 'valor_por_defecto', NULL, 'espera', NULL, NULL, NULL, '2023-11-21 01:19:42', '2023-11-21 01:19:42', '2', 'Cafe magico.png-1700529582892.png'),
(63, 3, 'disciplinaria', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,', 'valor_por_defecto', NULL, 'espera', NULL, NULL, NULL, '2023-11-21 15:34:01', '2023-11-21 15:34:01', '8', 'Cafe magico.png-1700580841174.png'),
(64, 3, 'academica', 'descripccion', 'valor_por_defecto', NULL, 'espera', NULL, NULL, NULL, '2023-11-22 21:26:34', '2023-11-22 21:26:34', '14', 'cafe.sql-1700688394008.sql'),
(65, 3, 'academica', 'falta falta', 'valor_por_defecto', NULL, 'espera', NULL, NULL, NULL, '2023-11-27 17:24:25', '2023-11-27 17:24:25', '2', 'Cafe magico.png-1701105865122.png'),
(66, 3, 'academica', 'adsdafasfdsddfasdfsadfsadf', 'valor_por_defecto', NULL, 'espera', NULL, NULL, NULL, '2023-11-27 18:38:02', '2023-11-27 18:38:02', '4', 'Nuevo Documento de texto.txt-1701110282410.txt'),
(67, 3, 'academica', 'fdfsafaAAAAAAA', 'valor_por_defecto', NULL, 'espera', NULL, NULL, NULL, '2023-11-27 18:41:41', '2023-11-27 18:41:41', '21', 'Nuevo Documento de texto.txt-1701110501752.txt');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fichas`
--

CREATE TABLE `fichas` (
  `id` int(11) NOT NULL,
  `codigo` varchar(255) NOT NULL,
  `inicioLectiva` datetime NOT NULL,
  `finLectiva` datetime NOT NULL,
  `inicioProductiva` datetime NOT NULL,
  `finProductiva` datetime NOT NULL,
  `modalidad` varchar(255) NOT NULL,
  `jornada` varchar(255) NOT NULL,
  `programa` varchar(255) NOT NULL,
  `instructor_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `fichas`
--

INSERT INTO `fichas` (`id`, `codigo`, `inicioLectiva`, `finLectiva`, `inicioProductiva`, `finProductiva`, `modalidad`, `jornada`, `programa`, `instructor_id`, `createdAt`, `updatedAt`) VALUES
(1, '250678453', '2023-11-19 21:48:30', '2023-11-19 21:48:30', '2023-11-19 21:48:30', '2023-11-19 21:48:30', 'presencial', 'diurna', 'ADSI', 13, '2023-11-19 21:48:30', '2023-11-19 21:48:30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `normas_infligidas`
--

CREATE TABLE `normas_infligidas` (
  `nor_id` int(11) NOT NULL,
  `art_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notificacions`
--

CREATE TABLE `notificacions` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `remitente_fk` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `notificacions`
--

INSERT INTO `notificacions` (`id`, `titulo`, `descripcion`, `remitente_fk`, `createdAt`, `updatedAt`) VALUES
(1, 'Nueva Solicitud a Comite', 'falta falta', 3, '2023-11-27 17:24:25', '2023-11-27 17:24:25'),
(3, 'Nueva Solicitud de Comite 2', 'Ejemplo de descripcion de la Solicitud 2', 3, '2023-11-27 18:37:00', '2023-11-27 18:37:00'),
(4, 'Nueva Solicitud a Comite', 'adsdafasfdsddfasdfsadfsadf', 3, '2023-11-27 18:38:02', '2023-11-27 18:38:02'),
(5, 'Nueva Solicitud de Comite 2', 'Ejemplo de descripcion de la Solicitud 2', 3, '2023-11-27 18:41:12', '2023-11-27 18:41:12'),
(6, 'Nueva Solicitud a Comite', 'fdfsafaAAAAAAA', 3, '2023-11-27 18:41:41', '2023-11-27 18:41:41');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notificacion_usuarios`
--

CREATE TABLE `notificacion_usuarios` (
  `id` int(11) NOT NULL,
  `notificacion_id` int(11) NOT NULL,
  `receptor_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `notificacion_usuarios`
--

INSERT INTO `notificacion_usuarios` (`id`, `notificacion_id`, `receptor_id`, `createdAt`, `updatedAt`) VALUES
(1, 5, 2, '2023-11-27 18:41:12', '2023-11-27 18:41:12'),
(2, 6, 2, '2023-11-27 18:41:41', '2023-11-27 18:41:41');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedads`
--

CREATE TABLE `novedads` (
  `id` int(11) NOT NULL,
  `descripcion_novedad` varchar(255) NOT NULL,
  `nombre_novedad` varchar(255) NOT NULL,
  `instructor_fk` int(11) NOT NULL,
  `aprendiz_fk` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `novedads`
--

INSERT INTO `novedads` (`id`, `descripcion_novedad`, `nombre_novedad`, `instructor_fk`, `aprendiz_fk`, `createdAt`, `updatedAt`) VALUES
(1, 'joven con problemas de sexualidad', ' dejarse tocar sus partes nobles', 3, 1, '2023-10-19 19:09:21', '2023-10-19 19:09:21'),
(2, 'descripccion de novedad', 'novedad', 3, 13, '2023-11-16 20:09:37', '2023-11-16 20:09:37'),
(3, 'fffff', 'fffff', 3, 54, '2023-11-19 16:41:39', '2023-11-19 16:41:39');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paragrafos`
--

CREATE TABLE `paragrafos` (
  `par_id` int(11) NOT NULL,
  `par_descripcion` varchar(900) NOT NULL,
  `art_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `paragrafos`
--

INSERT INTO `paragrafos` (`par_id`, `par_descripcion`, `art_id`) VALUES
(1, 'El Equipo ejecutor del programa de formación nominará los aprendices de las fichas y el \r\ncomité de evaluación y seguimiento de cada centro de formación será el encargado de seleccionar los \r\ncandidatos beneficiarios de los estímulos e incentivos para la excelencia, consignados en el numeral 23 \r\ndel presente artículo de conformidad con los criterios señalados, y en atención a la normatividad \r\ninstitucional vigente', 7),
(2, 'los aprendices en condición de discapacidad tienen deberes adicionales a los \r\nenunciados. En particular, deberán poner en conocimiento oportunamente al \r\nCentro de formación sobre cualquier condición de discapacidad para proceder \r\na la gestión de los ajustes razonables pertinentes. También deberán procurar \r\npor el cuidado de su salud y el bienestar de la comunidad, garantizando el \r\ncumplimiento de tratamientos médicos o procesos de rehabilitación establecidos\r\n por las instancias de salud tratantes', 8),
(3, 'Un aprendiz solo debe tener un único registro en el sistema de gestión académica, \r\ndebidamente actualizado. Cualquier otro registro del aprendiz en el sistema será invalidado por el \r\nadministrador del sistema, por tratarse de datos inconsistentes. Es responsabilidad del aprendiz \r\ngestionar con el Centro de Formación la actualización de su registro y aportar los documentos idóneos \r\ny reconocidos legalmente', 11),
(4, 'los padres de familia o tutor o representante legal deben otorgar su consentimiento informado para que \r\nlos aprendices menores de edad accedan, reciban y desarrollen la formación profesional integral según \r\nlo establecido en este reglamento y en los procedimientos institucionales. Este consentimiento informado \r\ndebe ser incluido en la documentación para asentar matrícula. A través de este documento, los padres de \r\nfamilia, o tutor o representante legal, expresan su autorización para que el aprendiz adelante la formación \r\nprofesional en el SENA.', 12),
(5, 'La radicación de novedades para los aprendices en formación titulada virtual se debe\r\nhacer en el sistema de servicio al ciudadano de la institución y atendiendo el paso a paso antes \r\nseñalado.', 13),
(6, 'Los trámites académicos y/o administrativos relacionados con aprendices en los \r\nprogramas de articulación con la educación media o ampliación de cobertura, se ajustarán a la \r\nnormatividad institucional vigente', 13),
(7, 'El Aprendiz puede solicitar máximo un (1) traslado durante su proceso \r\nde formación', 14),
(8, '. Para todos los casos, la respuesta de parte de la Subdirección de Centro con destino al \r\naprendiz debe ir con copia a los instructores asignados en la ficha origen, especialmente en los casos \r\nde aprendices de formación titulada virtual y a distancia, para que en la plataforma virtual disponible \r\npara su proceso de formación - se gestionen las acciones pertinentes con el proceso formativo', 14),
(9, 'Los aprendices en programas de articulación con la media y ampliación de cobertura no \r\npueden realizar traslado de ficha a formación regular. Procede el traslado de fichas cuando se trate de \r\ncambio de institución educativa o de jornada entre fichas de articulación con la media o entre fichas \r\nde ampliación de cobertura. En caso de no poder continuar con la formación, aplicará la novedad de \r\n“retiro voluntario”, que no tendrá ningún tipo de sanción institucional, lo anterior contemplando la \r\nnormatividad vigente en el SENA.', 14),
(10, 'El acto administrativo de autorización de aplazamiento, emitido por la \r\nSubdirección de Centro de Formación tras la recomendación del Comité de \r\nEvaluación y Seguimiento, establece claramente dos condiciones para el reingreso \r\ndel aprendiz: El programa de formación al que desea regresar debe ser la misma \r\nversión en la que estaba inscrito previamente.Debe corresponder a una ficha que \r\nesté actualmente en ejecución y que el avance de la misma permita al \r\naprendiz continuar su proceso formativo.', 14),
(11, 'Para todos los casos, la respuesta de parte de la Subdirección de Centro con destino al \r\naprendiz debe ir con copia a los instructores asignados en la ficha origen, especialmente en los casos \r\nde aprendices de formación titulada virtual y a distancia y los convenios especiales, para que dentro \r\ndel ambiente de formación LMS se gestionen las acciones pertinentes con el proceso formativo.', 14),
(12, 'En la modalidad de formación titulada virtual o a distancia, el Centro debe hacer el \r\nregistro de esta novedad en el sistema de gestión académica a más tardar dentro de los dos (2) días \r\nhábiles siguientes a la fecha de radicación de la respuesta al aprendiz, a fin de garantizar la \r\nsincronización del estado del aprendiz con la plataforma LMS.', 14),
(13, 'Una vez se autorice esta novedad, el Centro debe hacer el registro de ésta en el sistema de \r\ngestión académica a más tardar a los dos (2) días hábiles siguientes a la fecha de radicación de la \r\nrespuesta al aprendiz, a fin de garantizar la sincronización del estado del aprendiz con la plataforma \r\nLMS.', 14),
(14, 'Para los aprendices del programa ampliación de cobertura que no terminan el proceso \r\nde formación en las fechas definidas en el convenio suscrito, los Centros de Formación tienen la \r\nresponsabilidad de gestionar el certificado, previo el cumplimiento de requisitos y dentro de los \r\ntérminos definidos en este reglamento.', 15),
(15, 'Los aprendices de articulación con la media, deben culminar la ejecución de las etapas \r\nlectiva y productiva del programa de formación SENA, con el último año escolar. En este caso, el \r\ninstructor correspondiente, evaluará los resultados de aprendizaje en el sistema gestión académica y \r\nprevio el cumplimiento de requisitos el Centro de Formación emitirá el correspondiente certificado.', 15),
(16, 'Expedición de duplicados: La expedición de duplicados de los documentos académicos \r\nobtenidos en vigencias anteriores a 2010, debe solicitarse directamente en el Centro de Formación y \r\nel costo se regirá según lo establecido por el SENA para estos casos (pérdida, cambio de tipo de \r\ndocumento y deterioro).', 16),
(17, 'Etapa lectiva. De acuerdo con el estatuto de la FPI, es la etapa que se desarrolla según la \r\nestrategia pedagógica teórico-práctica de la formación profesional integral, con el objetivo de \r\nreflexionar sobre la práctica laboral y desde ésta hacia la teoría, permitiendo comprender, asimilar y \r\naplicar conocimientos, habilidades, destrezas y actitudes.', 19),
(18, 'Etapa productiva. Es la etapa en la que el aprendiz SENA aplica, complementa, fortalece \r\ny consolida sus competencias, en términos de conocimiento, habilidades, destrezas, actitudes y \r\nvalores. La etapa productiva le permite al aprendiz aplicar sus conocimientos en la resolución de \r\nproblemas en contextos reales o simulados, y se desarrolla según lo establecido en los procedimientos \r\ninstitucionales', 19),
(19, 'En estas etapas los aprendices SENA deben desarrollar y cumplir las evidencias de \r\naprendizaje, actividades presenciales y/o virtuales que se establezcan, para confirmar que son \r\ncompetentes en su saber y hacer. ', 19),
(20, 'El reglamento del SENA establece los casos fortuitos o de fuerza mayor que pueden afectar la asistencia y participación de un aprendiz.\r\nMuerte de un familiar hasta segundo grado de consanguinidad o afinidad. Calamidad doméstica. Problemas de seguridad que impidan el traslado del aprendiz al Centro de Formación.\r\nProblemas de salud propios o de un familiar dependiente del aprendiz. Urgencias relacionadas con el estado de embarazo del aprendiz. Urgencias de un familiar dependiente del aprendiz.\r\nEl aprendiz debe informar al instructor sobre la situación en un plazo no mayor a tres días hábiles después de que ocurra.', 21),
(21, 'Los casos no contemplados anteriormente que tengan soportes justificables serán \r\nvalorados por el comité de evaluación y seguimiento del respectivo centro de formación, quien \r\ndeterminará si efectivamente se trata de incumplimiento justificado o no, según las condiciones \r\npropias del contexto y la situación específica del aprendiz.', 21),
(22, 'En los casos fortuitos, si las faltas generan que el aprendiz incumpla más del 30% de las \r\nactividades previstas en el trimestre al programa de formación, el instructor encargado de la formación \r\nsolicitará al equipo ejecutor de la ficha la revisión de caso y su consideración exenta de subjetividad\r\npara remitir al Comité de evaluación y seguimiento del Centro de formación solicitando la revisión de \r\nla novedad que aplique según el caso.', 21),
(23, 'El incumplimiento justificado no aplica para la formación complementaria virtual.', 21),
(24, 'El equipo ejecutor de la ficha elevará la solicitud de cancelación de la formación por \r\ndeserción al comité de evaluación y seguimiento después de agotado el plan de mejoramiento y \r\nanalizada la situación propia del caso del aprendiz.', 24),
(25, 'Se garantizará el debido proceso dando cumplimento a lo establecido en los artículos 39 al \r\n41 de este acuerdo.', 24),
(26, 'Aquellas conductas que constituyan delito tipificado en el Código Penal Colombiano, deben \r\nser además denunciadas por el servidor público que tenga conocimiento de ellas, ante la(s) \r\nautoridad(es) competente(s), de conformidad con lo establecido en la Constitución Política de \r\nColombia, Código Penal y la Ley 734 de 2002 - Código Disciplinario Único.', 28),
(27, 'Todo plan de mejoramiento académico con sus respectivas evidencias deben consignarse \r\nen el formato que la entidad tiene establecido para el efecto y debe ser registrado en el Sistema Gestión \r\nAcadémica y en el Portafolio del Aprendiz que reposa en la respectiva plataforma.', 32),
(28, 'Los planes de mejoramiento académico deben ser establecidos treinta posteriores al \r\ninicio de la etapa lectiva o productiva y máximo treinta días antes de finalizar la etapa lectiva o \r\nproductiva, para lo cual el instructor debe garantizar el registro oportuno de los juicios evaluativos en \r\nel Sistema de Gestión Académica. La verificación de este plan, será responsabilidad de la coordinación \r\nacadémica. ', 32),
(29, 'Es responsabilidad del o de los instructor(es) hacer acompañamiento al Aprendiz durante \r\nel desarrollo de las actividades concertadas en el plan de Mejoramiento académico.', 32),
(30, ' El número máximo de planes de mejoramiento académico durante toda la etapa lectiva, \r\nes de dos (2) relacionados con los resultados de aprendizaje no alcanzados; y para la etapa productiva,\r\nes de uno (1).', 32),
(31, 'Para el caso de los aprendices de articulación con la media, la medida formativa disciplinaria \r\nse regirá por el reglamento adoptado por la institución educativa, y tendrá efectos en su estado como \r\naprendiz SENA, previo análisis del comité de evaluación y seguimiento', 33),
(32, 'Un aprendiz puede tener hasta dos (2) condicionamientos de matrícula superados durante \r\nsu proceso formativo. Un tercer condicionamiento de matrícula dará lugar a la cancelación de \r\nmatrícula.', 34),
(33, 'Una vez el acto administrativo sancionatorio de condicionamiento de matrícula ha surtido \r\nel debido proceso, se procederá a la firmeza del acto administrativo conforme con lo establecido en \r\neste reglamento. ', 34),
(34, 'La cancelación de la matrícula de los aprendices de formación titulada y/o \r\ncomplementaria implica que el Aprendiz no podrá participar en procesos de ingreso a programas de \r\nformación titulada del SENA durante seis meses, contados a partir del momento en que el acto \r\nadministrativo quede en firme, excepto para los casos en que el aprendiz solicita reingreso y no es \r\nposible autorizarlo por causas atribuibles al SENA, según lo establece este Reglamento, en cuyo caso \r\nno procede la restricción de los seis meses', 34),
(35, 'Una vez el acto administrativo sancionatorio de cancelación de matrícula de índole \r\nacadémico ha surtido el debido proceso, se procederá a la firmeza del acto administrativo conforme \r\ncon lo establecido en este reglamento.', 34),
(36, 'Para el caso de los aprendices de articulación con la media, las sanciones se regirán por el \r\nreglamento adoptado por la institución educativa, y tendrá efectos en su estado como aprendiz SENA, \r\nprevio análisis del comité de evaluación y seguimiento', 34),
(37, 'El equipo encargado del programa de formación del SENA se reunirá al finalizar el período de inducción y \r\nal menos una vez por trimestre para evaluar la situación académica de los aprendices en diversas modalidades \r\nde formación. El propósito principal de estas reuniones es: Brindar seguimiento y apoyo académico a cada \r\naprendiz en su proceso formativo. Analizar y recomendar medidas para los casos en los que los aprendices \r\nenfrenten dificultades en la consecución de los resultados de aprendizaje. Verificar la adecuada documentación \r\nde novedades y evaluaciones de los aprendices en el Sistema de Gestión Académica. Cerrar los planes de mejoramiento \r\nacadémico asignados a los aprendices.', 36),
(38, 'La reunión de seguimiento y acompañamiento formativo académico será citada por la \r\ncoordinación académica, para garantizar la asistencia de los aprendices a dicha reunión, el equipo \r\nejecutor de la formación deberá divulgar y socializar esta información con los aprendices citados. ', 36),
(39, 'Cuando se trata de aprendiz que cursa formación en institución educativa que ha suscrito \r\nconvenio con el SENA, las reuniones de seguimiento y acompañamiento formativo, deben realizarse \r\nen presencia de un profesional representante de la institución educativa o quien haga sus veces.', 36),
(40, 'En relación con las reuniones de seguimiento y acompañamiento formativo académico de \r\naprendices matriculados en formación titulada virtual o a distancia, se llevarán a cabo a través de la \r\nherramienta de comunicación sincrónica disponible en la plataforma LMS vigente en la entidad, y la \r\nsesión deberá ser grabada. Producto de esta reunión se deberá elaborar un acta por parte de uno de \r\nlos instructores asistentes y/o ente responsable, la cual será aprobada por los participantes en dicho \r\nencuentro.', 36),
(41, 'Según sea el caso, se podrá invitar a las sesiones del comité de evaluación y seguimiento \r\na personas que ayuden a comité a tomar una decisión más objetiva, como por ejemplo: al responsable \r\nde contrato de aprendizaje cuando el caso sea de etapa productiva por todas las connotaciones legales \r\nque estos casos llevan consigo; a un delegado de la institución si el caso es de Articulación con la Media; \r\na un delegado de una institución cuando el caso es de Convenios. En todos los casos, los invitados \r\ntendrán voz, pero no voto.', 37),
(42, 'El Comité de Evaluación y Seguimiento se reunirá al menos una vez al mes, o cuando sea \r\nnecesario, para aplicar el procedimiento establecido en el reglamento. Este comité realizará \r\nseguimiento a programas de formación afines tecnológicamente, en espacios en los que puedan \r\ninteractuar varios grupos de aprendices de especialidades afines. También será posible \r\nplanificar comités de seguimiento que agrupen aprendices de diversas especialidades, \r\ndependiendo de los proyectos que estén desarrollando. Para sesionar y tomar decisiones, \r\nse requerirá la asistencia de la mitad más uno de sus integrantes.', 37),
(43, 'Se dará trámite a la queja o informes anónimos cuando aporten datos que permitan ser \r\nverificados o prueba(s) que pueda(n) llegar a demostrar la veracidad de los hechos. Se seguirá la \r\nnormatividad vigente para el trámite de las Peticiones, Quejas y Reclamos.', 39),
(44, '. Cuando se trate de hechos que presuntamente se relacionan con una falta disciplinaria, \r\nla Coordinación Académica, con base en las pruebas y el informe o queja recibido, procederá de \r\ninmediato a realizar una indagación preliminar con las instancias pertinentes que permita confirmar o \r\ndesvirtuar los hechos. Lo anterior, le permitirá decidir si cita o no a Comité de Evaluación y Seguimiento, \r\nsiendo éste el último recurso para contribuir al buen desarrollo de la Formación Profesional Integral \r\ndel aprendiz', 39),
(45, 'Para la modalidad virtual y a distancia, la sesión del comité se realizará mediante el uso \r\nde la herramienta de comunicación sincrónica disponible en la plataforma LMS de la entidad y se debe \r\nnotificar al aprendiz que debe contar con los medios adecuados para la interacción y comunicación \r\ndurante la sesión, garantizando su activa participación (cámara y micrófono), deberá quedar el registro \r\nde grabación de la sesión.', 41),
(46, 'Para los aprendices de articulación con la media, los comités de evaluación y seguimiento \r\ndeben desarrollarse en el Centro de Formación, o en las instalaciones de la institución educativa donde \r\nse imparte la formación, según conveniencia de la partes.', 41),
(47, 'Para los aprendices de ampliación de cobertura, los comités de evaluación y seguimiento \r\ndeben desarrollarse en la institución educativa en convenio.', 41),
(48, 'A las deliberaciones del Comité de Evaluación y Seguimiento no asistirá(n) el o los \r\ninstructores o personas que presentaron el informe o queja ni el o los aprendices citados.', 41),
(49, 'El correo electrónico institucional (preferente) y el personal del aprendiz registrados en el \r\nSistema de Gestión Académica, para todos los efectos y en especial los previstos en el presente \r\nreglamento será medio de notificación personal para dar a conocer las decisiones que surjan en \r\ndesarrollo de un proceso académico o disciplinario, únicamente, cuando el aprendiz de manera expresa \r\ny voluntaria lo haya autorizado.', 43),
(50, 'En articulación con la media, la evaluación se ejecuta con la participación del docente de la \r\ninstitución, el instructor SENA y el aprendiz, según aplique, pero el registro del juicio evaluativo es \r\nresponsabilidad del instructor SENA.', 50),
(51, 'Si el aprendiz no logra el resultado de aprendizaje propuesto, según ruta de aprendizaje, \r\nel instructor titular realizará plan de mejoramiento a cumplir antes que termine la competencia \r\nprogramada y durante la etapa a la que corresponda dicha competencia. En caso de que el aprendiz \r\nno alcance el resultado previsto en tiempo acordado, el Instructor responsable asigna el juicio de \r\nevaluación como no aprobado', 53),
(52, 'En caso que el aprendiz de formación complementaria virtual no esté logrando los \r\nresultados de aprendizaje del programa, el instructor promoverá la realización de las actividades \r\npropuestas, de acuerdo con el cronograma de formación, las fechas de finalización de la ficha y los \r\nresultados de aprendizaje propuestos.', 53),
(53, 'En caso de que el suplente presente alguna situación que impida asumir las \r\nresponsabilidades, o por alguna otra circunstancia se presente la vacancia en la representación, se \r\ndesarrollará una nueva votación con los aprendices de la ficha (grupo) para elegir nuevo vocero y \r\nsuplente y se registrará acta respectiva', 60),
(54, 'En el evento que la Regional tenga convenios de ampliación de cobertura, la institución \r\nconviniente deberá realizar el proceso de elección de representantes para cada jornada en la que se \r\ntenga la oferta de programas SENA. ', 61),
(55, 'Los aprendices que desarrollen procesos formativos en programas de articulación con la \r\nmedia, tendrán en los personeros la representatividad.', 61),
(56, 'En caso de que no se inscriban candidatos, o que los candidatos inscritos no cumplan los \r\nrequisitos para postularse, el representante principal y suplente de aprendices de la modalidad o \r\njornada, serán escogidos en reunión de voceros del centro de formación y quedarán registrados por \r\nmedio de un acta, que estará firmada por los voceros participantes y el profesional designado por la \r\nSubdirección del Centro de formación que acompaña el proceso de la elección.', 65),
(57, 'La participación como representante de aprendices no lo exime de las responsabilidades \r\nde su formación profesional integral según rutas de aprendizaje.', 66),
(58, 'En caso de que el Centro de Formación presente condiciones de fuerza mayor que impidan el \r\nnormal desarrollo de las votaciones para las elecciones de representante de aprendices SENA \r\nen las fechas estipuladas, se deberán postergar las elecciones hasta que se normalicen \r\ndichas condiciones y se emita una nueva circular con las fechas del proceso. Se consideran \r\ncasos atípicos los problemas de infraestructura de los centros de formación, los cierres \r\ntemporales de los centros de formación por situaciones de eventos catastróficos o de orden \r\npúblico, los problemas con herramientas electrónicas en los centros de formación que estén \r\nvinculadas al proceso electoral y las situaciones en las que se considere que la comunidad \r\nSENA votante está en riesgo.', 68),
(59, 'Para la revocatoria de la designación como Representante de Aprendiz SENA, el Comité \r\nde Evaluación y Seguimiento analiza y resuelve la situación, según lo establecido en este reglamento', 69),
(60, 'El acto administrativo de revocatoria para la elección de la representación de Aprendiz \r\nSENA no admite la interposición de recurso, en razón a que se trata de un acto académico', 69),
(61, 'En caso de que el suplente presente alguna situación referida en las causales de revocatoria \r\nde la representación o por alguna otra circunstancia se presente la vacancia en la \r\nrepresentación, la asumirá quien haya obtenido el tercer lugar en la elección, y así \r\nsucesivamente en orden descendente. En caso de que no exista un tercero, se desarrollará una \r\nelección cerrada de representantes con los voceros de ficha del centro de formación de la \r\njornada y modalidad correspondiente. Se levantará un acta del proceso y se emitirá la \r\nresolución de designación respectiva. El representante electo continuará la gestión y la \r\npropuesta programática del representante elegido inicialmente por votación y cumplirá con las \r\nfunciones señaladas en los artículos anteriormente mencionados.', 70),
(62, 'El nuevo Representante del Aprendiz SENA que asuma la suplencia, ejercerá durante el \r\ntiempo que le faltaba al representante revocado para concluir el periodo, o por el tiempo que dure la \r\nausencia del Representante. Los periodos son de carácter institucional y no personal', 70);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos`
--

CREATE TABLE `permisos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `creado` datetime NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `permisos`
--

INSERT INTO `permisos` (`id`, `nombre`, `creado`, `createdAt`, `updatedAt`) VALUES
(1, 'list-roles', '2023-08-28 15:58:35', '2023-11-01', '2023-11-01'),
(2, 'create-roles', '2023-08-28 15:58:35', '2023-11-01', '2023-11-01'),
(3, 'edit-roles', '2023-08-28 15:58:35', '2023-11-01', '2023-11-01'),
(4, 'delete-roles', '2023-08-28 15:58:35', '2023-11-01', '2023-11-01'),
(5, 'list-permisos', '2023-11-10 00:54:50', '2023-11-10', '2023-11-10'),
(6, 'permisos-rol', '2023-11-10 00:54:50', '2023-11-10', '2023-11-10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `creado` datetime NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre`, `creado`, `createdAt`, `updatedAt`) VALUES
(1, 'Administrador', '2023-10-19 16:27:47', '2023-11-01', '2023-11-01'),
(2, 'Instructor', '2023-10-19 16:27:47', '2023-11-01', '2023-11-01'),
(3, 'Aprendiz', '2023-10-19 16:27:47', '2023-11-01', '2023-11-01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles_permisos`
--

CREATE TABLE `roles_permisos` (
  `id` int(11) NOT NULL,
  `rol_id` int(11) NOT NULL,
  `permisos_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles_permisos`
--

INSERT INTO `roles_permisos` (`id`, `rol_id`, `permisos_id`, `createdAt`, `updatedAt`) VALUES
(1, 1, 2, '2023-10-07 20:35:51', '2023-10-07 20:35:51'),
(2, 1, 3, '2023-10-07 20:35:51', '2023-10-07 20:35:51'),
(3, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 1, 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(34, 1, 5, '2023-11-10 02:37:59', '2023-11-10 02:37:59'),
(35, 1, 6, '2023-11-10 02:37:59', '2023-11-10 02:37:59');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230907150132-create-permisos.js'),
('20230907150740-create-roles.js'),
('20230907150754-create-sessions.js'),
('20230907151024-create-usuarios.js'),
('20230907154109-add-foreign-keys.js'),
('20230907164020-create-roles-permisos.js'),
('20230914220138-agregar-restricciones-unicidad-usuarios.js'),
('20231003224924-create-comites.js'),
('20231004220340-create-aprendices_implicados.js'),
('20231005141607-create-ficha.js'),
('20231005150023-add_instructor_foreign_key_to_fichas.js'),
('20231008155234-agregar-articulos-a-comite.js'),
('20231008160415-agregar-valor-default-a-datetime.js'),
('20231011230031-create-novedad.js'),
('20231026125325-create-notificacion.js'),
('20231026131627-create-notificacion-usuario.js'),
('20231107171111-agregar-columna-evidencia-comite.js'),
('20231113020843-agregar-foranea-comite-a-aprendices-implicados.js'),
('20231118212720-create-aprendices.js'),
('20231119204320-addFichaIdToAprendices.js'),
('20231122230317-tipoDocApr_implidos.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `id` int(11) NOT NULL,
  `session_id` varchar(255) DEFAULT NULL,
  `expires` int(11) DEFAULT NULL,
  `data` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre_completo` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contrasenia` varchar(255) DEFAULT NULL,
  `rol_id` int(11) DEFAULT NULL,
  `tipo_documento` varchar(255) DEFAULT NULL,
  `documento` varchar(255) DEFAULT NULL,
  `cargo` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `dependencia` varchar(255) DEFAULT NULL,
  `creado` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre_completo`, `email`, `contrasenia`, `rol_id`, `tipo_documento`, `documento`, `cargo`, `telefono`, `dependencia`, `creado`) VALUES
(1, 'Ricardo Ospina', NULL, '3', 3, 'TI', '3', NULL, NULL, 'CAD', '2023-10-19 16:30:26'),
(2, 'Brayan Gomez Noguera', NULL, '1', 1, 'CC', '1', NULL, NULL, 'CAD', '2023-10-19 16:30:26'),
(3, 'Alejandro Toro', NULL, '2', 2, 'CC', '2', NULL, NULL, 'CAD', '2023-10-19 16:30:26'),
(13, 'Brayan Gomez Noguera', 'begomez334@gmail.com', '86c451d5', 2, 'CC', '1054476568', 'Aprendiz', '3206516254', 'CAD', '2023-10-25 22:50:39'),
(14, 'Alejandro Toro', 'karlatrosillo@gmail.com', 'b483d3cf', 3, 'CC', '10567845', 'Aprendiz', '3106755050', 'CAD', '2023-10-25 22:50:39'),
(15, 'Santiago Gomez Noguera', 'begomez1054@gmail.com', 'be180b58', 3, 'TI', '1054476564', 'Aprendiz', '3013816950', 'CAD', '2023-10-25 22:50:39'),
(19, 'aprendiz Uno', 'aprendizUno@gmail.com', '12345', 3, 'CC', '31', 'Aprendiz', '3432', 'CAD', '2023-11-18 20:17:56'),
(48, 'aprendiz Dos', 'aprendizDos@gmail.com', '12345', 3, 'CC', '32', 'Aprendiz', '34320002', 'CAD', '2023-11-18 20:17:56'),
(49, 'aprendiz Tres', 'aprendizTres@gmail.com', '12345', 3, 'CC', '33', 'Aprendiz', '34320003', 'CAD', '2023-11-18 20:17:56'),
(50, 'aprendiz Cuatro', 'aprendizCuatro@gmail.com', '12345', 3, 'CC', '34', 'Aprendiz', '34320004', 'CAD', '2023-11-18 20:17:56'),
(51, 'aprendiz Cinco', 'aprendizCinco@gmail.com', '12345', 3, 'CC', '35', 'Aprendiz', '34320005', 'CAD', '2023-11-18 20:17:56'),
(52, 'aprendiz Seis', 'aprendizSeis@gmail.com', '12345', 1, 'CC', '36', 'Aprendiz', '34320006', 'CAD', '2023-11-18 20:17:56'),
(53, 'aprendiz Siete', 'aprendizSiete@gmail.com', '12345', 3, 'CC', '37', 'Aprendiz', '34320007', 'CAD', '2023-11-18 20:17:56'),
(54, 'aprendiz Ocho', 'aprendizOcho@gmail.com', '12345', 3, 'CC', '38', 'Aprendiz', '34320008', 'CAD', '2023-11-18 20:17:56'),
(55, 'aprendiz Nueve', 'aprendizNueve@gmail.com', '12345', 3, 'CC', '39', 'Aprendiz', '34320009', 'CAD', '2023-11-18 20:17:56'),
(56, 'aprendiz Diez', 'aprendizDiez@gmail.com', '12345', 3, 'CC', '40', 'Aprendiz', '34320010', 'CAD', '2023-11-18 20:17:56');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `aprendices`
--
ALTER TABLE `aprendices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `aprendices_ficha_fk_foreign_idx` (`ficha_fk`);

--
-- Indices de la tabla `aprendices_implicados`
--
ALTER TABLE `aprendices_implicados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `aprendices_implicados_comite_fk_foreign_idx` (`comite_fk`);

--
-- Indices de la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD PRIMARY KEY (`art_id`),
  ADD KEY `cap_id` (`cap_id`);

--
-- Indices de la tabla `capitulos`
--
ALTER TABLE `capitulos`
  ADD PRIMARY KEY (`cap_id`);

--
-- Indices de la tabla `comites`
--
ALTER TABLE `comites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `instructor_fk` (`instructor_fk`);

--
-- Indices de la tabla `fichas`
--
ALTER TABLE `fichas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fichas_instructor_fk` (`instructor_id`);

--
-- Indices de la tabla `normas_infligidas`
--
ALTER TABLE `normas_infligidas`
  ADD PRIMARY KEY (`nor_id`),
  ADD KEY `art_id` (`art_id`);

--
-- Indices de la tabla `notificacions`
--
ALTER TABLE `notificacions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notificacions_remitente_fk` (`remitente_fk`);

--
-- Indices de la tabla `notificacion_usuarios`
--
ALTER TABLE `notificacion_usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notificacion__usuarios_notificacion_id` (`notificacion_id`),
  ADD KEY `notificacion__usuarios_receptor_id` (`receptor_id`);

--
-- Indices de la tabla `novedads`
--
ALTER TABLE `novedads`
  ADD PRIMARY KEY (`id`),
  ADD KEY `novedads_instructor_fk` (`instructor_fk`),
  ADD KEY `novedads_aprendiz_fk` (`aprendiz_fk`);

--
-- Indices de la tabla `paragrafos`
--
ALTER TABLE `paragrafos`
  ADD PRIMARY KEY (`par_id`),
  ADD KEY `art_id` (`art_id`);

--
-- Indices de la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles_permisos`
--
ALTER TABLE `roles_permisos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rol_id` (`rol_id`),
  ADD KEY `permisos_id` (`permisos_id`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuarios_email_unique` (`email`),
  ADD UNIQUE KEY `usuarios_documento_unique` (`documento`),
  ADD UNIQUE KEY `usuarios_telefono_unique` (`telefono`),
  ADD KEY `usuarios_rol_id_fk` (`rol_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `aprendices`
--
ALTER TABLE `aprendices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `aprendices_implicados`
--
ALTER TABLE `aprendices_implicados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=108;

--
-- AUTO_INCREMENT de la tabla `comites`
--
ALTER TABLE `comites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT de la tabla `fichas`
--
ALTER TABLE `fichas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `normas_infligidas`
--
ALTER TABLE `normas_infligidas`
  MODIFY `nor_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `notificacions`
--
ALTER TABLE `notificacions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `notificacion_usuarios`
--
ALTER TABLE `notificacion_usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `novedads`
--
ALTER TABLE `novedads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `paragrafos`
--
ALTER TABLE `paragrafos`
  MODIFY `par_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT de la tabla `permisos`
--
ALTER TABLE `permisos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `roles_permisos`
--
ALTER TABLE `roles_permisos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `sessions`
--
ALTER TABLE `sessions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `aprendices`
--
ALTER TABLE `aprendices`
  ADD CONSTRAINT `aprendices_ficha_fk_foreign_idx` FOREIGN KEY (`ficha_fk`) REFERENCES `fichas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `aprendices_implicados`
--
ALTER TABLE `aprendices_implicados`
  ADD CONSTRAINT `aprendices_implicados_comite_fk_foreign_idx` FOREIGN KEY (`comite_fk`) REFERENCES `comites` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `aprendices_implicados_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD CONSTRAINT `articulos_ibfk_1` FOREIGN KEY (`cap_id`) REFERENCES `capitulos` (`cap_id`);

--
-- Filtros para la tabla `comites`
--
ALTER TABLE `comites`
  ADD CONSTRAINT `comites_ibfk_1` FOREIGN KEY (`instructor_fk`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `fichas`
--
ALTER TABLE `fichas`
  ADD CONSTRAINT `fichas_instructor_fk` FOREIGN KEY (`instructor_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `normas_infligidas`
--
ALTER TABLE `normas_infligidas`
  ADD CONSTRAINT `normas_infligidas_ibfk_1` FOREIGN KEY (`art_id`) REFERENCES `articulos` (`art_id`);

--
-- Filtros para la tabla `notificacions`
--
ALTER TABLE `notificacions`
  ADD CONSTRAINT `Notificacions_ibfk_1` FOREIGN KEY (`remitente_fk`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `notificacion_usuarios`
--
ALTER TABLE `notificacion_usuarios`
  ADD CONSTRAINT `Notificacion_Usuarios_ibfk_1` FOREIGN KEY (`notificacion_id`) REFERENCES `notificacions` (`id`),
  ADD CONSTRAINT `Notificacion_Usuarios_ibfk_2` FOREIGN KEY (`receptor_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `novedads`
--
ALTER TABLE `novedads`
  ADD CONSTRAINT `Novedads_ibfk_1` FOREIGN KEY (`instructor_fk`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `Novedads_ibfk_2` FOREIGN KEY (`aprendiz_fk`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `paragrafos`
--
ALTER TABLE `paragrafos`
  ADD CONSTRAINT `paragrafos_ibfk_1` FOREIGN KEY (`art_id`) REFERENCES `articulos` (`art_id`);

--
-- Filtros para la tabla `roles_permisos`
--
ALTER TABLE `roles_permisos`
  ADD CONSTRAINT `roles_permisos_ibfk_1` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `roles_permisos_ibfk_2` FOREIGN KEY (`permisos_id`) REFERENCES `permisos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_rol_id_fk` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
