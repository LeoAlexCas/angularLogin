const updateItemModule = require('./updateItem.module');

async function updateItemController(req, res) {
    try {
        const response = await updateItemModule(req);
        res.status(200).send(response);
    } catch(error) {
        res.status(500).send(error.message);
    };
};

module.exports = updateItemController;