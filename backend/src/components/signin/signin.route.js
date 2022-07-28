const signInController = require('./signin.controller');

function route(app) {
    app.post('/signin', signInController);
}

module.exports = route;