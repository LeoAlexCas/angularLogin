const postUserRoute = require('../components/postUser/postUser.route');

function routes(app) {
    postUserRoute(app);
};

module.exports = routes;