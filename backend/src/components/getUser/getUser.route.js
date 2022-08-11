const getUserController = require('./getUser.controller');
const verifyToken = require('../../middle/tokenVerify.handler');

function route(app) {
    app.get(
        '/getUser', 
        verifyToken,
        getUserController
        );
}

module.exports = route;