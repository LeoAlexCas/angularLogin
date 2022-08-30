const deleteItemsController = require('./deleteItems.controller');
const verifyToken = require('../../middle/tokenVerify.handler');

function route(app) {
    app.delete(
        '/items/:itemId',
        verifyToken, 
        deleteItemsController
        );
};

module.exports = route;