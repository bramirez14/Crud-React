
let DB = require("../database/models");

const productsController = {
home:   (req, res) => {
  res.send('Welcome to my API!');
},
list: async (req, res) => {
      try {
        let listProduct = await DB.products.findAll();
        res.send(listProduct);

        } 
  catch (error) {
       res.send(error);
    }
    },
   
}
module.exports = productsController;
