var express = require('express');
var multer= require('multer');
var router = express.Router();
var path=require('path');
var methodOverride = require('method-override')


//llama a las rutas 
const Controller= require('../controller/coursesController');
//fx de multer
const storage = multer.diskStorage({
  destination: path.join(__dirname,'public/upload'),
  filename:(req,file,cb)=>{
  cb(null, new Date().getTime() + path.extname(file.originalname));
  }
  })
var upload = multer({ storage})



/*LISTADO DE PRODUCTOS*/

router.get('/',Controller.get)
router.post('/',upload.any(),Controller.post)
router.put('/:id',Controller.put)
router.delete('/:id',Controller.delete)


module.exports = router;
