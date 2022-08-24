const { createItem } = require('../../repositories/items.repository');

async function postItemModule(req) {
    try {
        const itemCreated = await createItem(req.body.item);
        return itemCreated;
    } catch(error) {
        throw error;
    };
};

module.exports = postItemModule;