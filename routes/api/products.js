var express = require('express');
var router = express.Router();

const Product = require('../../models/Product');

// GET /api/products
// Se obtiene una lista de productos.
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

        // if(typeof tags !== 'undefined') {
        //     if(typeof tags === 'string') {
        //         filter.tags = tags;
        //     } else {
        //         filter.tags = { $in: tags };
        //     }
        // }

        if(tags) {
            filter.tags = { $in: tags };
        }

        if(min && max)  {
            filter.price = {$gte:min, $lte: max};
        }

        const result = await Product.list(filter, limit, skip, fields, sort);
        res.json(result);
    } catch (err) {
        next(err);
}
});

// GET /api/products:id 
// Se oobtener un producto de la lista.
router.get('/:id', async (req, res, next) => {
    try {
        const _id = req.params.id;
        const product = await Product.findOne({ _id: _id }); //  const agente = Agente.findOne({ _id: });
        if(!product) {
            return res.status(404).json({ error: 'not found' });
        } 
        res.json({ result: product});
    } catch (err){
        next(err)
    }
})

// POST /api/products
// Crear un anuncio de un producto.
router.post('/', async (req, res, next) => {
    try {
        const productData =  req.body;
        const product = new Product(productData);

        const productCreado = await product.save();
        
        res.status(201).json({result: productCreado});
    } catch (err){
        next(err)
    }
})

// DEL delete/api/agentes:id 

router.delete('/:id', async (req, res, next) => {
    try {
        const _id = req.params.id;

        await Agente.deleteOne({ _id: _id });
        // se usa {new: true} para que devuelva el dato actuializado.

        res.json();
    } catch (err){
        next(err)
    }
})


module.exports = router;
