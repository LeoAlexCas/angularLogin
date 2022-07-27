function postUserModule(req) {
    try {
        console.log(req.body)
        const checked = bodyCheck(req.body);
        if(!checked) {
            throw new Error('body incorrecto');
        }


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
        !body.roleId
        ) {
            return false;
        }

        return true;
}

module.exports = postUserModule;