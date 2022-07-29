const postUserRoute = require('../components/postUser/postUser.route');
const getUserRoute = require('../components/getUser/getUser.route');
const signInRoute = require('../components/signin/signin.route');
const updateUserRoute = require('../components/updateUser/updateUser.route');

function routes(app) {
    postUserRoute(app);
    getUserRoute(app);
    signInRoute(app);
    updateUserRoute(app);
};

module.exports = routes;