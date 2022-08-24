const postItem = require('./postItem.controller');

function route(app) {
    app.post('/items', postItem);
}

module.exports = route;