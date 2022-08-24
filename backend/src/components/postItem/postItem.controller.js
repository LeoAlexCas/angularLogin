const postItemModule = require('./postItem.module');

async function postItemController(req, res) {
    try {
        const response = await postItemModule(req);
        res.status(200).send(response);
    } catch(error) {
        res.status(500).send(error.message);
    };
};

module.exports = postItemController;