const signInModule = require('./signin.module');

async function signInController(req, res) {
    try {
        const response = await signInModule(req);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    };
};

module.exports = signInController;