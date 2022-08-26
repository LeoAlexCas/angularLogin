const ItemModel = require('../models/items.model');

const createItem = async (model) => {
    try {
        const itemModel = new ItemModel(model);
        return await itemModel.save();
    } catch(error) {
        throw error;
    };
};

const updateItem = async (data, model) => {
    try {
        return await ItemModel.updateOne({ _id: data }, model);
    } catch(error) {
        throw error;
    };
};

const deleteItem = async (data) => {
    try {
        return await ItemModel.deleteOne({ _id: data });
    } catch(error) {
        throw error;
    };
};

const getItems = async () => {
    try {
        const items = await ItemModel.find();
        return items;
    } catch(error) {
        throw error;
    };
};

const getOneItem = async (data) => {
    try {   
        const item = await ItemModel.find({_id: data});
    } catch(error) {
        throw error;
    }
}

module.exports = { createItem, updateItem, deleteItem, getItems, getOneItem };