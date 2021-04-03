// Declaracion de librerias a importar
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

// Apuntar al archivo de rutas
const routes = require('./routes');

const jsonParser = bodyParser.json();

// Definimos los puertos y host de la app.
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0"

// Creamos nuestra app apuntando la libreria
const app = express();

// Documentacion de codigo
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./src/services/swagger.config');
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Se asignan los puertos o permisos para poder acceder
const corsOptions = { origin: '*', optionsSuccessStatus: 200 }
app.use(cors(corsOptions))

// Definimos los archivos estaticos
app.use('/assets', express.static(path.join(__dirname, 'public')));

// Indicamos que usaremos un router
app.use('/api', jsonParser, routes);

// iniciamos nuestro server
app.listen(PORT,HOST, () => { console.log(`Server listening on port ${PORT} and host ${HOST}`); });