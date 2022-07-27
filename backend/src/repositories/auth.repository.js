const AuthModel = require('../models/auth.model');

const create = async (model) => {
    try {
        const authModel = new AuthModel(model);
        return await authModel.save();
    } catch(error) {
        throw error;
    };
};

const getAuthByName = async (userName) => {
    try {
        const auth = await AuthModel.find({ userName });
        return auth;
    } catch(error) {    
        throw error;
    };
}

module.exports = { create, getAuthByName };