const { getItems, getOneItem } = require('../../repositories/items.repository');

async function getItemsModule(req) {
    try {
        if(req.headers.id) {
            console.log(req.headers.id)
            console.log('solo 1 item')
            const item = await getOneItem(req.headers.id);
            console.log(item)
            return item[0];
        } else {
            console.log('todos los items')
            const items = await getItems();
            return items;
        };
    } catch(error) {
        throw error;
    };
};

module.exports = getItemsModule;