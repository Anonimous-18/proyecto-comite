CREATE TABLE `permisos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `creado` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `permisos`
--

INSERT INTO `permisos` (`id`, `nombre`, `creado`) VALUES
(1, 'list', '2023-08-28 20:58:35'),
(2, 'create', '2023-08-28 20:58:35'),
(3, 'edit', '2023-08-28 20:58:35'),
(4, 'delete', '2023-08-28 20:58:35');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `creado` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre`, `creado`) VALUES
(1, 'Administrador', '2023-08-28 20:57:18'),
(2, 'Instructor', '2023-08-28 20:57:18'),
(3, 'Aprendiz', '2023-08-28 20:57:18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles_permisos`
--

CREATE TABLE `roles_permisos` (
  `id` int(11) NOT NULL,
  `rol_id` int(11) NOT NULL,
  `permisos_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles_permisos`
--

INSERT INTO `roles_permisos` (`id`, `rol_id`, `permisos_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `contrasenia` varchar(255) NOT NULL,
  `creado` timestamp NULL DEFAULT current_timestamp(),
  `rol_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `contrasenia`, `creado`, `rol_id`) VALUES
(1, 'admin', 'admin@gmail.com', 'admin', '2023-08-28 20:59:55', 1);

--
-- Índices para tablas volcadas
--
