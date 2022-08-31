const updateItemsController = require('./updateItem.controller');
const verifyToken = require('../../middle/tokenVerify.handler');

function route(app) {
    app.put(
        '/items/:itemId',
        verifyToken, 
        updateItemsController
        );
};

module.exports = route;