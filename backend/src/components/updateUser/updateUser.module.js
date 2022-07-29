const { updateUserByName } = require('../../repositories/auth.repository');

async function updateUserModule(req) {
    try {
        console.log('Inciando modulo');
        await updateUserByName(req.body.queryName.userName, req.body.updatedUser)
            .catch((error) => {
                console.error(error);
                throw new Error("Error actualizando");
            });

            return `Usuario ${req.body.queryName.userName} Actualizado.`

    } catch(error) {
        throw error;
    }
};

module.exports = updateUserModule;