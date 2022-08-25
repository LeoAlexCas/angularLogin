const { deleteItem } = require('../../repositories/items.repository');

async function deleteItemsModule(req) {
    try {
        const deletedItem = await deleteItem(req.params.itemId);
        return deletedItem;
    } catch(error) {
        throw error;
    };
};

module.exports = deleteItemsModule;