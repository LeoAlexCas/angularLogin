const { create } = require('../../repositories/auth.repository');

async function postUserModule(req) {
    try {
        console.log(req.body)
        const checked = bodyCheck(req.body);
        if(!checked) {
            throw new Error('body incorrecto');
        }

        const userCreated = {
            userName: req.body.userName,
            pass: req.body.pass,
            roleId: req.body.roleId
        }

        await create(userCreated);


        return 'postEnviado';
    } catch(error) {
        throw error;
    }
}

const bodyCheck = (body) => {
    console.log('chequeando');
    if(
        !body.userName ||
        !body.pass ||
        !body.roleId ||
        !body.userNumber
        ) {
            return false;
        }

        return true;
}

module.exports = postUserModule;