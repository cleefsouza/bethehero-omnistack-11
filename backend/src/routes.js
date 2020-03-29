const express = require('express');
const OngController = require('./controllers/OngController');
const CasoController = require('./controllers/CasoController');

const routes = express.Router();

routes.get('/ongs', OngController.all);
routes.post('/ongs', OngController.create);

routes.get('/casos', CasoController.all);
routes.post('/casos', CasoController.create);
routes.delete('/casos/:id', CasoController.delete);

module.exports = routes;