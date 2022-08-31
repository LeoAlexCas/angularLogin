const { updateItem } = require('../../repositories/items.repository');

async function updateItemModule(req) {
    try {
        const updated = await updateItem(req.params.itemId, req.body.updatedItem);
        return updated;
    } catch(error) {
        throw error;
    }
};

module.exports = updateItemModule;