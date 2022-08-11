const { create, getAuthByName } = require('../../repositories/auth.repository');
const jwt = require("jsonwebtoken");
require('dotenv').config();

async function signUpModule(req) {
    try {
        const { userName, pass, roleId, userNumber } = req.body;
        const newUser = {
            userName,
            pass,
            roleId,
            userNumber
        };
        
        const checker = await getAuthByName(userName);
        if(checker[0]) {
            throw new Error("nombre duplicado");
        }

        const created = await create(newUser);

        const token = jwt.sign({_id: created._id}, `${process.env.SECRET_WORD}`);

        return token;
    } catch(error) {
        throw error;
    }
};

module.exports = signUpModule;