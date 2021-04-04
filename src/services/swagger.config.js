const path = require('path');
require('dotenv').config();

module.exports = {
        swaggerDefinition: {
            swagger:"2.0",
            info:{"title":"Proyecto Cloud Primavera 2021",
            "description":"Documentacion de los endpoints disponibles para el proyecto del collar de monitoreo canino.",
            "contact": {
                "name": "API Support",
              },
              "version": "1.0.0",
              "servers":[`${process.env.APP_PATH}:${process.env.PORT}`]
        
            }
        },
        apis: ['app.js',path.join(__dirname,'..','..','routes','index.js')]
    }

    