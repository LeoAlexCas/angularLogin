const postUserModule = require('./postUser.module');

async function postUserController(req, res) {
    try {
        const response = await postUserModule(req);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    };
};

module.exports = postUserController;