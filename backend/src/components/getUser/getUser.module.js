const { getAuthByName } = require('../../repositories/auth.repository');

async function getUserModule(req) {
    try {
        console.log(req.headers);
        if(!req.headers.name) {
            throw new Error("No hay header");
        }

        const auth = await getAuthByName(req.headers.name);

        return auth[0];
    } catch(error) {
        throw error;
    }
};

module.exports = getUserModule;