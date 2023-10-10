## iconos 
https://react-icons.github.io/react-icons/search?q=facebook

## Comando para crear modelos de tablas ya existentes:
<h1>sequelize-auto -o "./models" -d nombre_basedatos -h localhost -u usuario -p 3306 -x contraseña -e mysql</h1>
--
<h1>npx sequelize-auto -o "./models" -d proyecto_comite -h localhost -u root -p 3306 -x "" -e mysql</h1>


##MIGRACIONES BASE DE DATOS
npx sequelize-cli db:migrate:undo
npx sequelize-cli db:migrate
