var express = require('express');
var router = express.Router();
var path=require('path');


//llama a las rutas 
const Controller= require('../controller/productsController');




/*LISTADO DE PRODUCTOS*/
router.get('/',Controller.home);
router.get('/products',Controller.list)


module.exports = router;