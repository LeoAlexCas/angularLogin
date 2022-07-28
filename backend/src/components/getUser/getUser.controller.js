const getUserModule = require('./getUser.module');

async function getUserController(req, res) {
    try {
        const response = await getUserModule(req);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = getUserController;