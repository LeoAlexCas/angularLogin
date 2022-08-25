const deleteItemsModule = require('./deleteItems.module');

async function deleteItemsController(req, res) {
    try {
        const response = await deleteItemsModule(req);
        res.status(200).send(response);
    } catch(error) {
        res.status(500).send(error.message);
    };
};

module.exports = deleteItemsController;