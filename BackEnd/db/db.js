/** !
 ** Finalmente el archivo db.js será el que cree el objeto que conecta con la base de datos.
 ** Esa conexión utilizará el objeto mysql provisto en en el módulo mysql2
 */

//* 1- Importamos el módulo mysql2
const mysql = require("mysql2");

//* 2- Configuracion de la conexión
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123Shikamaru",
  port: 3306,
});

//* 3- Conexión a la base de datos
connection.connect((err) => {
  if (err) {
    console.error("Error de coexion: " + err);
    return;
  }

  //* Si todo va bien
  console.log("Conexión exitosa");

  //* Creamos una consulta, cverificamos si existe la base y si no la creamos.

  const sqlCreatedb = "CREATE DATABASE IF NOT EXISTS users_db";

  //* Ejecutamos la consulta
  connection.query(sqlCreatedb, (err, result) => {
    if (err) {
      console.error("Error de conexion: " + err);
      return;
    }
    console.log("Base de datos creada o ya existente");

    //*  Creamos la tabla si no existe
    connection.changeUser({ database: "users_db" }, (err) => {
      if (err) {
        console.error("Error de conexión: " + err);
        return;
      }
      console.log("Conectado a la base de datos users_db");

      const sqlCreateTable = `
                CREATE TABLE IF NOT EXISTS users (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    apellido VARCHAR(255) NOT NULL,
                    nombre VARCHAR(255) NOT NULL,
                    dni INT(8) NOT NULL,
                    nacimiento DATE NOT NULL,
                    idobrasocial INT 
                );
            `;

      //* Pasamos la consulta
      connection.query(sqlCreateTable, (err, results) => {
        //* En caso de error
        if (err) {
          console.error("Error al crear la tabla: " + err);
          return;
        }
        //* Si todo va bien
        console.log("Tabla creada o ya existente");
      });
    });
  });
});

//* Exportamos del modulo
module.exports = connection;
