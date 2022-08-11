const signUpController = require('./signup.controller');

function route(app) {
    app.post('/signup', signUpController);
}

module.exports = route;