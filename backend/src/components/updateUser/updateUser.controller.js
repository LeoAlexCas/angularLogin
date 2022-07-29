const updateUserModule = require('./updateUser.module');

async function updateUserController(req, res) {
    try {
        const response = await updateUserModule(req);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error.message);
    };
};

module.exports = updateUserController;