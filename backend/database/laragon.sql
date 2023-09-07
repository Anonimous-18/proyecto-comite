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

-- Volcando estructura para tabla proyecto_comite.articulos
CREATE TABLE IF NOT EXISTS `articulos` (
  `art_id` int NOT NULL,
  `art_titulo` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `art_descripcion` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `cap_id` int NOT NULL,
  PRIMARY KEY (`art_id`),
  KEY `cap_id` (`cap_id`),
  CONSTRAINT `articulos_ibfk_1` FOREIGN KEY (`cap_id`) REFERENCES `capitulos` (`cap_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla proyecto_comite.articulos: ~72 rows (aproximadamente)
INSERT INTO `articulos` (`art_id`, `art_titulo`, `art_descripcion`, `cap_id`) VALUES
	(1, 'Formación profesional integral.', 'La formación profesional que imparte el SENA, constituye\r\nactuar crítica y creativamente en el mundo del trabajo y de la vida.', 1),
	(2, 'Comunidad educativa', 'En la Formación Profesional Integral participan diferentes actores, \r\ncomo aprendices, instructores, personal administrativo y de apoyo, directivos, \r\nfamilia, egresados, gremios empresariales, instituciones educativas, \r\ntrabajadores y representantes de diferentes sectores económicos y \r\ncooperantes internacionales.', 1),
	(3, 'Aprendiz SENA', 'Ser aprendiz SENA implica estar matriculado en programas de \r\nformación profesional en diferentes modalidades (presencial, virtual y a \r\ndistancia). El objetivo es adquirir competencias de manera integral para \r\ncontribuir al desarrollo personal, social y laboral, basado \r\nen valores morales, éticos y culturales.', 1),
	(4, 'Cumplimiento de principios y valores', 'El aprendiz y demás miembros de la comunidad SENA deberán \r\nrespetar los principios y valores institucionales que regulan y hacen posible \r\nla convivencia de los miembros del Centro de Formación.', 1),
	(5, 'Centros de convivencias', 'Los centros de formación profesional que ofrecen \r\nel servicio de Centros de Convivencia para aprendices deben cumplir con \r\ndisposiciones específicas establecidas en este Reglamento.', 1),
	(6, 'Alcance', 'El reglamento aplica a todos los aprendices del SENA en \r\ncualquier sede, jornada, nivel, modalidad y tipo de formación, \r\nincluyendo convenios. También se aplica en lugares donde el aprendiz\r\n representa a la institución o cuando lleva el uniforme institucional.', 1),
	(7, 'Derechos del Aprendiz SENA', 'El derecho es la potestad que tiene el \r\naprendiz de gozar de libertades y oportunidades, sin ninguna discriminación\r\n por razones de sexo, raza, origen nacional o familiar, lengua, religión, \r\n opinión política o filosófica. Además de los consagrados en la constitución y la ley, el aprendiz SENA espera \r\nde la Institución', 2),
	(8, 'Deberes del Aprendiz SENA', 'El Equipo ejecutor del programa nominará \r\na los aprendices y el comité de evaluación de cada centro de formación \r\nseleccionará a los beneficiarios de estímulos e incentivos para la excelencia, \r\nsegún los criterios y normas vigentes.', 3),
	(9, 'Prohibiciones', 'Se considerarán prohibiciones para los Aprendices del \r\nSENA.', 3),
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
	(71, '', 'La Dirección de Formación Profesional desarrollará un plan para divulgar el presente  reglamento en la comunidad educativa. \r\n', 9),
	(72, '', 'El presente Acuerdo rige a partir de la fecha de su publicación en el Diario Oficial y deroga  ', 9);

-- Volcando estructura para tabla proyecto_comite.capitulos
CREATE TABLE IF NOT EXISTS `capitulos` (
  `cap_id` int NOT NULL,
  `cap_titulo` varchar(100) NOT NULL,
  PRIMARY KEY (`cap_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla proyecto_comite.capitulos: ~9 rows (aproximadamente)
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

-- Volcando estructura para tabla proyecto_comite.normas_infligidas
CREATE TABLE IF NOT EXISTS `normas_infligidas` (
  `nor_id` int NOT NULL AUTO_INCREMENT,
  `art_id` int NOT NULL,
  PRIMARY KEY (`nor_id`),
  KEY `art_id` (`art_id`),
  CONSTRAINT `normas_infligidas_ibfk_1` FOREIGN KEY (`art_id`) REFERENCES `articulos` (`art_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla proyecto_comite.normas_infligidas: ~0 rows (aproximadamente)

-- Volcando estructura para tabla proyecto_comite.paragrafos
CREATE TABLE IF NOT EXISTS `paragrafos` (
  `par_id` int NOT NULL AUTO_INCREMENT,
  `par_descripcion` varchar(900) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `art_id` int NOT NULL,
  PRIMARY KEY (`par_id`),
  KEY `art_id` (`art_id`),
  CONSTRAINT `paragrafos_ibfk_1` FOREIGN KEY (`art_id`) REFERENCES `articulos` (`art_id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla proyecto_comite.paragrafos: ~62 rows (aproximadamente)
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

-- Volcando estructura para tabla proyecto_comite.permisos
CREATE TABLE IF NOT EXISTS `permisos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `creado` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla proyecto_comite.permisos: ~4 rows (aproximadamente)
INSERT INTO `permisos` (`id`, `nombre`, `creado`) VALUES
	(1, 'list', '2023-08-29 01:58:35'),
	(2, 'create', '2023-08-29 01:58:35'),
	(3, 'edit', '2023-08-29 01:58:35'),
	(4, 'delete', '2023-08-29 01:58:35');

-- Volcando estructura para tabla proyecto_comite.roles
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `creado` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla proyecto_comite.roles: ~3 rows (aproximadamente)
INSERT INTO `roles` (`id`, `nombre`, `creado`) VALUES
	(1, 'Administrador', '2023-08-29 01:57:18'),
	(2, 'Instructor', '2023-08-29 01:57:18'),
	(3, 'Aprendiz', '2023-08-29 01:57:18'),
	(4, 'Invitado', '2023-09-01 14:27:33');

-- Volcando estructura para tabla proyecto_comite.roles_permisos
CREATE TABLE IF NOT EXISTS `roles_permisos` (
  `id` int NOT NULL,
  `rol_id` int NOT NULL,
  `permisos_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla proyecto_comite.roles_permisos: ~4 rows (aproximadamente)
INSERT INTO `roles_permisos` (`id`, `rol_id`, `permisos_id`) VALUES
	(1, 1, 1),
	(2, 1, 2),
	(3, 1, 3),
	(4, 1, 4);

-- Volcando estructura para tabla proyecto_comite.sessions
CREATE TABLE IF NOT EXISTS `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla proyecto_comite.sessions: ~32 rows (aproximadamente)
INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
	('1fPmGlhgulzceafjQRLGyyiP-UgDkMDI', 1693405702, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"user":{"id":2,"nombre":"rosa","email":"rosa@gmail.com","contrasenia":"rosa","creado":"2023-08-29T12:46:59.000Z","rol_id":2}}'),
	('4DM5VJg8Cj-mrm8pmj6sAqXqW3uV3RmZ', 1693400461, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
	('8C6HP6vRpKp3fF_Y_oijFozt9-N7TwN1', 1693400451, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
	('9Q7ufHBVllJwpnDWewSI91wu4tj5XhZk', 1693401154, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
	('CvCPFi8CitCl4zq05FXt3f0tNZg4TdzS', 1693400111, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
	('E5C60P8nq0r1ANQmX4JUdITBwTO2ScPW', 1693400147, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
	('Eu3p_d1OHpaj_xedTXJmbcXPeTZtNSFC', 1693404225, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"user":{"id":1,"nombre":"admin","email":"admin@gmail.com","contrasenia":"admin","creado":"2023-08-29T01:59:55.000Z","rol_id":1}}'),
	('FBptfb6cZljxeYW1j9vbF1CqDVAE8Q9Z', 1693399518, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"user":{"id":1,"nombre":"admin","email":"admin@gmail.com","contrasenia":"admin","creado":"2023-08-29T01:59:55.000Z","rol_id":1}}'),
	('GbKLOftMl8jsFbKfF9zfnoJDPwsHPCNL', 1693400133, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
	('IPwig92w9wZucHviPl-Nn_dcpwM8OuC8', 1693410160, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"user":{"id":2,"nombre":"rosa","email":"rosa@gmail.com","contrasenia":"rosa","creado":"2023-08-29T12:46:59.000Z","rol_id":2}}'),
	('K2MV6x6xI4PSr3AisuHa3hRy1PKgZX42', 1693400252, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
	('KObvn09kxuxh8xDhThK-WSNIYej8Zfc9', 1693400455, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
	('Kk-kKWP3uJNrvrBpujHOk3r-OYsg7W_G', 1693400417, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
	('Kl7w50qD49GnhDIG4QckPjxhyq0uXxB4', 1693405709, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
	('LmcBN87qO8CywEB7cnLETxZGYPyeZmX5', 1693401245, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
	('N06XxiTPzTq5zy86G-wu9TIW6jJ4IKe8', 1693399798, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
	('NXwQcxDNkS8X3hN83sAAxM50-T1EUW3b', 1693401058, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
	('P3g3sUHEIZnCCY0cK7NHVcmrVw7Vn3Na', 1693400244, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
	('P_cRMpksMzh1ApxK0k3ZuY-e-vF0pl1g', 1693400133, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
	('QxFXbt-boarrOgTidURIDks9hr3UW_8l', 1693401149, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
	('WfOTeA5dXcArY6ycyCUB5awdEBr7p9fw', 1693400458, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
	('ZLpDT-bc0WFF_5p2E0PmTVjH4cL4F6cM', 1693400219, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
	('aHQTwCb-jUYekO81pPS1813D_71DBS8D', 1693399695, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"user":{"id":2,"nombre":"rosa","email":"rosa@gmail.com","contrasenia":"rosa","creado":"2023-08-29T12:46:59.000Z","rol_id":2}}'),
	('cv3l772yxg_EKR0H49tDObhAXQzKXWy_', 1693398531, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"user":{"id":1,"nombre":"admin","email":"admin@gmail.com","contrasenia":"admin","creado":"2023-08-29T01:59:55.000Z","rol_id":1}}'),
	('d8WE2EDuMTVmeuaaYVMmcF8gqy8nh9xv', 1693398600, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
	('dlcTBHPL-J2tZuN0PZL1RriM8QXanuGN', 1693400131, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
	('dtGXwS9jeO-rgJnVmuiRaKXyQfF-zSg0', 1693400143, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
	('eKU-ZrnospCYyODFbVHJf4oNjRprj6oI', 1693400265, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
	('kaXq23Ex4f6Iq8l10pyYYVRKaDvxy9C_', 1693399741, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
	('lRFXYTzU7Zn-Gor-AiHPuJmXv6T-yVZ-', 1693400133, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
	('oaAp3Anj2IOswi5MsHH6oY80oFPaGdsa', 1693400147, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
	('qs3ZEdCfKuYOjQgYd0hgow10RYoNkx9M', 1693400337, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
	('s0bpQnKeiYo0VIwWKkDOWkwTTq8x5XyA', 1693400389, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
	('uFlaK8Xmg7btI73f4Cdra4mxHZkFoMIt', 1693399678, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"user":{"id":2,"nombre":"rosa","email":"rosa@gmail.com","contrasenia":"rosa","creado":"2023-08-29T12:46:59.000Z","rol_id":2}}'),
	('yv8dU8dzPJmCBeGxBT1o6jIQzs5GXOXW', 1693398623, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"user":{"id":1,"nombre":"admin","email":"admin@gmail.com","contrasenia":"admin","creado":"2023-08-29T01:59:55.000Z","rol_id":1}}');

-- Volcando estructura para tabla proyecto_comite.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_completo` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(200) NOT NULL,
  `contrasenia` varchar(255) NOT NULL,
  `tipo_documento` varchar(30) NOT NULL,
  `documento` varchar(30) NOT NULL,
  `cargo` varchar(30) NOT NULL,
  `dependencia` varchar(40) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `creado` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `rol_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `rol_id` (`rol_id`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla proyecto_comite.usuarios: ~2 rows (aproximadamente)
INSERT INTO `usuarios` (`id`, `nombre_completo`, `email`, `contrasenia`, `tipo_documento`, `documento`, `telefono`, `creado`, `rol_id`) VALUES
	(1, 'admin', 'admin@gmail.com', 'admin', '', '', '', '2023-08-29 01:59:55', 1),
	(2, 'rosa', 'rosa@gmail.com', '', '', '', '', '2023-08-29 12:46:59', 2),
	(3, 'sanson', 'sansonrivas@gmail.com', 'sanson', 'Cedula', '10025463728', '3456783988', '2023-09-01 16:31:58', 4);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
