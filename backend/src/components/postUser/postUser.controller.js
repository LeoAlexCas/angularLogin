const postUserModule = require('./postUser.module');

async function postUserController(req, res) {
    try {
        const response = await postUserModule(req);
        res.status(200).send(response);
    } catch (error) {
        throw error;
    };
};

module.exports = postUserController;