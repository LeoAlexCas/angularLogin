const mongo = require('mongoose');
const { Schema } = mongo;

const itemsSchema = new Schema({
    itemName: { type: String, required: true },
    description: { type: String },
    amount: { type: Number },
    owner: { type: String }
},
{
    timestamps: true
});

const ItemModel = mongo.model("items", itemsSchema);

module.exports = ItemModel;