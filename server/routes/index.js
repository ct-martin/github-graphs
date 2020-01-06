const routes = require('express').Router();
<<<<<<< HEAD:routes/index.js
const apiV1 = require('./api/v1.js');
=======
const apiV1 = require('./api/v1');
>>>>>>> a232882774fdb412227932c43297ac164b89e97a:server/routes/index.js
routes.use('/api', apiV1);

routes.get("/", (request, response) => {
    response.redirect("index.html");
});

routes.get('*', (request, response) => {
    response.redirect("404.html");
});

module.exports = routes;