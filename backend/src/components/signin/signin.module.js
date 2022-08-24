const { getAuthByName } = require('../../repositories/auth.repository');
const jwt = require("jsonwebtoken");
const bycrypt = require('bcryptjs');
require('dotenv').config();

async function signInModule(req) {
    try {
        console.log('capturando user y pass')
        const { userName, pass } = req.body;
        const userTocheck = await getAuthByName(userName)
        if(userTocheck.length === 0) {
            throw new Error("Nombre de usuario incorrecto");
        };
        
        console.log('Chequeando userData');
        const userData = userTocheck[0];
  
        let token;
        
        if(await bycrypt.compare(pass, userData.pass)) {
            console.log('Estableciendo Token');
            token = jwt.sign(JSON.stringify(userData.userNumber), `${process.env.SECRET_WORD}`);
        } else {
            console.log('Pass Incorrecta');
            throw new Error("Pass incorrecta");
        }
    
        return {
            status: 'OK',
            token
        };

    } catch(error) {
        throw error;
    }
};

module.exports = signInModule;