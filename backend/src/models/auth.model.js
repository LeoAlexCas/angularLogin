const mongo = require('mongoose');
const { Schema } = mongo;

const authSchema = new Schema({
    userName: { type: String, required: true, unique: true },
    pass: { type: String, required: true, unique: true },
    roleId: { type: String, required: true, unique: true },
});

const AuthModel = mongo.model("auths", authSchema);

module.exports = AuthModel;