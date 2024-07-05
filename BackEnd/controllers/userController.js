// src/controllers/movieController.js

/**
 * El controlador es el que tendrá los cambios más importantes 
 * y es el que hará el tratamiento de la información.
 * En este archivo tenemos que codificar los métodos
 * .getAllMovies
 * .getMovieById
 * .createMovie
 * .updateMovie
 * .deleteMovie
 */

//* 1- Importamos el módulo propio db
//* El objeto db posee los métodos para conectar con la base de datos. 
//* Es la conexión a la base de datos.
const db = require('../db/db');

//* 2- Método para obtener todas las peliculas
const getAllUsers = (req, res) => {
    //* Creamos una consulta
    const sql = 'SELECT * FROM users';

    //* Utilizamos .query para enviar la consulra a la bbdd
    //* Primer parametro la consulta, segundo una función callback
    db.query(sql, (err, results) => {
        //*si sucede algun error
        if (err) {console.log(err); return;} 
        //*enviamos el resultado en formato json
        res.json(results);
           
    });
};

//* 3- Método para obtener usuario con consultas parametrizadas
const getUserById = (req, res) => {
    //*Tomamos la solicitud y extraemos su id
    //* Esta es una notacion de desestructuración {id}
    //* en la req viaja /user/1, la expresion {id} estrae el nro 1 de la ruta
    //* y lo almacena dentro de la variable id
    const { id } = req.params;

    //* Creamos la consulta con marcador de posición
    const sql = 'SELECT * FROM user WHERE id = ?';

    //* Los marcadores de posición se utilizan para evitar la inyección de SQL, 
    //* ya que los valores se escapan automáticamente.

    //* Interactuamos con la bbdd, pasamos la consulta anterior
    db.query(sql, [id], (err, result) => {
        //*en caso de error
        if (err) {console.log(err); return;} 
        //*enviamos en formato json
        res.json(result);
        
    });
};

//* 4- Método para crear una películaario
const createUser = (req, res) => {
    // Desestructuramos la request
    const { apellido, nombre, dni, nacimiento, idobrasocial } = req.body;
    // Creamos la consulta con marcadores de posición
    const sql = 'INSERT INTO users (apellido, nombre, dni, nacimiento, idobrasocial) VALUES (?, ?, ?, ?, ?)';
    // Pasamos la consulta
    //.query(consulta, array_con_valores, funcion_callback)
    db.query(sql, [apellido, nombre, dni, nacimiento, idobrasocial], (err, result) => {
        //en caso de error
        if (err)  {console.log(err); return;} 
        //enviamos mensaje de exito con info del usuario creado
        res.json({ message: 'Usuario creado', userId: result.insertId });
        
    });
};

//* 5- Método para modificar un usuario (COMPLETAR)

const updateUser = (req, res) => {
    //* Desestructuramos la solicitud
    //* Extraemos el id del usuario
    const { id } = req.params;
    //* Extraemos los datos del usuario
    const { apellido, nombre, dni, nacimiento, idobrasocial } = req.body;

    //* Creamos la consulta con marcadores de posición
    const sql = 'UPDATE user SET apellido = ?, nombre = ?, dni = ?, nacimiento = ?, idobrasocial = ? WHERE id = ?';

    //* Pasamos la consulta
    db.query(sql, [apellido, nombre, dni, nacimiento, idobrasocial, id], (err, result) => {
        //*en caso de error
        if (err) {
            console.log(err);
            return;
        } 
        //*enviamos mensaje de exito
        res.json({ message: 'Datos de usuario actualizados' });
        
    });
}

//* 6- Método para borrar un usuario (COMPLETAR)
const deleteUser = (req, res) => {
    //* Extraemos el id de la película
    const { id } = req.params;

    //* Creamos la consulta con marcadores de posición
    const sql = 'DELETE FROM users WHERE id = ?';

    //* Pasamos la consulta
    db.query(sql, [id], (err, result) => {
        //*en caso de error
        if (err) {console.log(err);
            return;
        } 
        //*enviamos mensaje de exito
        res.json({ message: 'Usuario eliminado' });
        
    });
}


//7- Exportamos los módulos que serán utilizados en moviesRouter.js
module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};

//8- Pasamos a configurar db.js

