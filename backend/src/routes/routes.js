const postUserRoute = require('../components/postUser/postUser.route');
const getUserRoute = require('../components/getUser/getUser.route');

function routes(app) {
    postUserRoute(app);
    getUserRoute(app);
};

module.exports = routes;