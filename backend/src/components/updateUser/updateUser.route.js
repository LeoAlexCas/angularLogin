const updateUserController = require('./updateUser.controller');
const verifyToken = require('../../middle/tokenVerify.handler');

function route(app) {
    app.put('/updateUser', verifyToken, updateUserController);
}

module.exports = route;