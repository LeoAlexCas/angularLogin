const getUserModule = require('./getUser.module');

function getUserController(req, res) {
    try {
        const response = getUserModule(req);
        res.status(200).send(response);
    } catch (error) {
        throw error;
    }
}

module.exports = getUserController;