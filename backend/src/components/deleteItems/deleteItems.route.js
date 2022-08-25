const deleteItemsController = require('./deleteItems.controller');

function route(app) {
    app.delete('/items/:itemId', deleteItemsController);
};

module.exports = route;