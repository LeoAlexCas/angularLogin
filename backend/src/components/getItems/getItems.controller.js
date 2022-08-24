const getItemsModule = require('./getItems.module');

async function getItemController(req, res) {
    try {
        const response = await getItemsModule(req);
        res.status(200).send(response);
    } catch(error) {
        res.status(500).send(error.message);
    };
};

module.exports = getItemController;