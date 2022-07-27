const getUserController = require('./getUser.controller');

function route(app) {
    app.post('/getUser', postUserController);
}

module.exports = route;