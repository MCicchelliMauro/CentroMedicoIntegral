//* src/routes/movieRoutes.js
/** 
 ** Enrutador 
 ** Endpoints
 */

//* 1- Importamos el módulo
const express = require("express");

//* 2- Instanciamos Router de express
const router = express.Router();

//* 3- Importamos el módulo propio movieController (a realizarlo a futuro)
const userController = require('../controllers/userController');

//*  4- En movieController programaremos el módulo junto a métodos GET, POST, PUT, DELETE
//* Dejaremos sólo la declaración de las rutas, con sus métodos 
//* y el llamado al userController con el método específico para cada opción 

//* Ruta de listado en general
router.get('/', userController.getAllUsers);
//* Ruta para la consulta de usuario por id
router.get('/:id', userController.getUserById);
//* Ruta para crear un usuario
router.post('/', userController.createUser);
//* Ruta para actualizar un usuario
router.put('/:id', userController.updateUser);
//*  Ruta para borrar un usuario
router.delete('/:id', userController.deleteUser);

//* 5- Exportamos el módulo
module.exports = router;

//* 6- Pasamos a configurar userController.js


