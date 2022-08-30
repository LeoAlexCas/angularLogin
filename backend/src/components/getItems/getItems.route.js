const getItemsController = require('./getItems.controller');
const verifyToken = require('../../middle/tokenVerify.handler');

function route(app) {
    app.get(
        '/items', 
        verifyToken,
        getItemsController
        );
};

module.exports = route;