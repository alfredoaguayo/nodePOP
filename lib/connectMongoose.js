'use strict';

const mongoose = require('mongoose');

mongoose.connection.on('error', err => {
    console.log('Error de conexión', err);
    process.exit(1);
});

mongoose.connection.once('open', () => {
    console.log('Conexión a MongoDB en', mongoose.connection.name);
});

// Conexión a Mongo Atlás, base de datos online
mongoose.connect('mongodb+srv://keepcoding:Airclic100132@cluster0.5dppz.mongodb.net/cursonode?authSource=admin&replicaSet=atlas-g0bsqx-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose.connection;
