const postUserController = require('./postUser.controller');

function route(app) {
    app.post('/postUser', postUserController);
}

module.exports = route;