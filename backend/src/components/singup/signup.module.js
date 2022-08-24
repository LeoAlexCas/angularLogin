const { create, getAuthByName } = require('../../repositories/auth.repository');
const jwt = require("jsonwebtoken");
const bycrypt = require('bcryptjs');
require('dotenv').config();

async function signUpModule(req) {
    try {
        const { userName, pass, roleId, userNumber } = req.body;
        const newPass = await bycrypt.hash(pass, 10);
        const newUser = {
            userName,
            pass: newPass,
            roleId,
            userNumber
        };

        const created = await create(newUser)
            .catch((error) => {
                const message = error.message || "";
                console.log(message);
                if(message.includes("E11000")) {
                    if(message.includes('userName')) {
                        //TODO error por usuario duplicado
                        throw new Error("nombre usado");
                    };
                    if(message.includes('roleId')) {
                        //TODO error por usuario duplicado
                        throw new Error("roleId");
                    };
                };
            }
        );

        const token = jwt.sign({_id: created._id}, `${process.env.SECRET_WORD}`);
        console.log('Token Generado correctamente');

        return {
            status: 'OK',
            token
        };
    } catch(error) {
        throw error;
    }
};

module.exports = signUpModule;