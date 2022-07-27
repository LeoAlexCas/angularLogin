const getUserModule = require('./getUser.module');

async function getUserController(req, res) {
    try {
        const response = await getUserModule(req);
        res.status(200).send(response);
    } catch (error) {
        throw error;
    }
}

module.exports = getUserController;