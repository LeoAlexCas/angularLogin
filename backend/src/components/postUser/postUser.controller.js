const postUserModule = require('./postUser.module');

function postUserController(req, res) {
    try {
        const response = postUserModule(req);
        res.status(200).send(response);
    } catch (error) {
        throw error;
    }
}

module.exports = postUserController;