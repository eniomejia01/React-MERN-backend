const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
require('dotenv').config();


//crear el servidos de express
const app = express();

//Base de datos
dbConnection();

// CORS 
app.use(cors());

//Directorio publico
app.use( express.static('public') );

// Lectura y parseo del body
app.use( express.json() );


//rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));




//escuchar perticiones
app.listen(process.env.PORT, () => {
    console.log(`servidor corriendo en puerto ${process.env.PORT}`);
});


