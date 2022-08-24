const { getItems } = require('../../repositories/items.repository');

async function getItemsModule(req) {
    try {
        const items = await getItems();
        return items;
    } catch(error) {
        throw error;
    };
};

module.exports = getItemsModule;