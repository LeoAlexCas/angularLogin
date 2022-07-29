const { getAuthByName } = require('../../repositories/auth.repository');
const jwt = require("jsonwebtoken");

async function signInModule(req) {
    try {
        console.log('capturando user y pass')
        const { userName, pass } = req.body;
        const userTocheck = await getAuthByName(userName)
        if(userTocheck.length === 0) {
            throw new Error("Nombre de usuario incorrecto");
        };
    
        const userData = userTocheck[0];
  
        let token;
        
        if( pass == userData.pass) {
            token = jwt.sign(JSON.stringify(userData.userNumber), 'stil');
        } else {
            throw new Error("Pass incorrecta");
        }
    
        return token;    

    } catch(error) {
        throw error;
    }
};

module.exports = signInModule;