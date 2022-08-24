const postUserRoute = require('../components/postUser/postUser.route');
const getUserRoute = require('../components/getUser/getUser.route');
const signInRoute = require('../components/signin/signin.route');
const updateUserRoute = require('../components/updateUser/updateUser.route');
const signupRoute = require('../components/singup/signup.route');
const postItemsRoute = require('../components/postItem/postItem.route');
const getItemsRoute = require('../components/getItems/getItems.route');

function routes(app) {
    postUserRoute(app);
    getUserRoute(app);
    signInRoute(app);
    updateUserRoute(app);
    signupRoute(app);
    postItemsRoute(app);
    getItemsRoute(app);
};

module.exports = routes;