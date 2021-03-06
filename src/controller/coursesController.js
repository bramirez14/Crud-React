let DB = require("../database/models");
//cloudinary
var cloudinary = require("cloudinary").v2;
//config cloudinary
cloudinary.config({
  cloud_name: "dyzd94ova",
  api_key: "518829137534427",
  api_secret:"q3wl_vQCfyXctutmxoF9fF-B-BA",
});
//const fs  = require('fs-extra')


const coursesController = {

get: async (req, res) => {
      try {
        let listCourse = await DB.courses.findAll();
        res.send(listCourse);

        } 
  catch (error) {
       res.send(error);
    }
    },
 post: async (req, res) => {
 try{
 const { course ,price,professor,discount,hours,level } = req.body
 
 const path = req.files[0].path
 const result = await cloudinary.uploader.upload(path);

  let courseCreated = await DB.courses.create({
 course,
 price,
 professor,
 discount,
 hours,
 level,
 image:result.secure_url,
 public_id:result.public_id
 })

 //para borrar la imagen que crea multer
 // await fs.unlink(path)
 res.send(courseCreated)
 }catch (error) {
    res.send(error);
  }
 },
   edit: async (req, res) => {
    try {
      let id = req.params.id;
      let course = await DB.courses.findByPk(id);
      res.send(course);
    } catch (error) {
	res.send(error)
    }
  },
 put:async (req, res) => {
 try{
  const { id } = req.params;
    let { course,price,professor,discount,hours,level } = req.body

    console.log(price)
   let courseEdited = await DB.courses.update({
  course:course,
 	discount:discount,
  professor:professor,
  hours:hours,
  level:level,
   price:price,
    }, {
    where: {
      id: id,
    }
  });
  res.send('producto editado con exito!!!')
 }catch (error) {
        res.send("No se pudo editar el producto, intentelo mas tarde");
  }
  },
  delete:async (req, res) => {
 try{
   const { id } = req.params;
   let course = await DB.courses.findByPk(id);
   console.log(course.dataValues.public_id)
   await cloudinary.uploader.destroy(course.dataValues.public_id);
  await DB.courses.destroy({
        where: {
          id: id,
        },
      });
      res.send("El curso se elimino correctamente");
 }catch (error) {
    res.send(error);
  }
  }
}
module.exports = coursesController;
