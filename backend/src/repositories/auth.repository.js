const AuthModel = require('../models/auth.model');

const create = async (model) => {
    try {
        const authModel = new AuthModel(model);
        return await authModel.save();
    } catch(error) {
        throw error;
    };
};

module.exports = { create };