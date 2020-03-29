const express = require('express');
const OngController = require('./controllers/OngController');
const CasoController = require('./controllers/CasoController');
const PerfilController = require('./controllers/PerfilController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.all);
routes.post('/ongs', OngController.create);

routes.get('/casos', CasoController.all);
routes.post('/casos', CasoController.create);
routes.delete('/casos/:id', CasoController.delete);

routes.get('/perfil', PerfilController.casosPorOng);

module.exports = routes;