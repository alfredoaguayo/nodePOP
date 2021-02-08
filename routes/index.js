var express = require('express');
var router = express.Router();
const axios = require('axios');

const Product = require('../models/Product');

/* GET home page. */

router.get('/', async function(req, res, next) {
  try {
      // *******************  Toma los datos de la URL pra realizar las busquedas.
      const name = req.query.name;
      const comStatus = req.query.comStatus;
      const price = req.query.price;
      const tags = req.query.tags;
      const fields = req.query.fields;
      const sort = req.query.sort;
      const min = req.query.min;
      const max = req.query.max;
      const limit = parseInt(req.query.limit);
      const skip = parseInt(req.query.skip);


      const filter = {};

      if(name) {
          filter.name = name;
      }

      if(comStatus) {
          filter.comStatus = comStatus;
      }

      if(price) {
          filter.price = price;
      }

      if(tags) {
          filter.tags = { $in: tags };
      }

      if(min && max)  {
          filter.price = {$gte:min, $lte: max};
      }

      const list = await Product.list(filter, limit, skip, fields, sort);
      res.render('index', {list});
  } catch (err) {
      next(err);
}
});

// router.get('/', function(req, res, next) {
//   main().catch(err => console.log(err));
//   async function main() {
//       const url = 'http://localhost:3500/api/products';
      
//       const response = await axios.get(url);
//       const list =  response.data;     
//       res.render('index', {list});
//       console.log(response.data);
//   };
// });

module.exports = router;
