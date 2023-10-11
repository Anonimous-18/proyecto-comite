## iconos 
https://react-icons.github.io/react-icons/search?q=facebook

## Comando para crear modelos de tablas ya existentes:
<h1>sequelize-auto -o "./models" -d nombre_basedatos -h localhost -u usuario -p 3306 -x contraseña -e mysql</h1>
--
<h1>npx sequelize-auto -o "./models" -d proyecto_comite -h localhost -u root -p 3306 -x "" -e mysql</h1>


## MIGRACIONES BASE DE DATOS
<h2>npx sequelize-cli db:migrate:undo</h2>
<h2>npx sequelize-cli db:migrate</h2>

## GENERAR MODELO CON CAMPOS
<h2>npx sequelize-cli model:generate --name Novedad --attributes descripcion_novedad:string,nombre_novedad:string</h2>
