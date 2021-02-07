'use strict';

const mongoose = require('mongoose');

// Definición de esquema y colección.
const productSchema = mongoose.Schema({
    name: { type: String, index: true },
    comStatus: { type: String, index: true },
    price: { type: Number, index: true },
    photo: { type: String },
    tags: { type: Array, default: [], index: true }
}, {
    colection: 'products'
})


// Detalles para aplicación de condiciones de búsqueda.
productSchema.statics.list = function(filter, limit, skip, fields, sort){
    const query = Product.find(filter);
    query.limit(limit); 
    query.skip(skip);
    query.select(fields);
    query.sort(sort);
    return query.exec();
};


// creamos el modelo con el equema definido
const Product = mongoose.model('Product', productSchema);


// exportamos el modelo (opcional)

module.exports = Product;
