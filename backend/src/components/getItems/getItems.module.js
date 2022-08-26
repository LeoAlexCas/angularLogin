const { getItems, getOneItem } = require('../../repositories/items.repository');

async function getItemsModule(req) {
    try {
        if(req.headers.id) {
            const item = await getOneItem(id);
            return item;
        }
        const items = await getItems();
        return items;
    } catch(error) {
        throw error;
    };
};

module.exports = getItemsModule;