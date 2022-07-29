const updateUserController = require('./updateUser.controller');

function route(app) {
    app.put('/updateUser', updateUserController);
}

module.exports = route;