const getUserController = require('./getUser.controller');

function route(app) {
    app.get('/getUser', getUserController);
}

module.exports = route;