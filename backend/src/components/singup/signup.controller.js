const signUpModule = require('./signup.module');

async function signUpController(req, res) {
    try {
        const response = await signUpModule(req);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error.message);
    };
};

module.exports = signUpController;