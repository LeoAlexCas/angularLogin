const getItemsController = require('./getItems.controller');

function route(app) {
    app.get('/items', getItemsController);
};

module.exports = route;