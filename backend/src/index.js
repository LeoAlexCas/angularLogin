const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mongo = require('mongoose'),
{ MongoConnection } = require('./services/mongoConnect');
const uri = 'mongodb+srv://root:rgN4YGQuKpQH7frU@cluster0.khtcb2v.mongodb.net/?retryWrites=true&w=majority'
const routes = require('./routes/routes');

const mongoConnex = new MongoConnection(mongo, uri);

async function startServer() {
    try {
        app.use(bodyParser.json({ limit: "50mb" }));
        app.use(cors());
        app.use(express.json());

        await mongoConnex.connect();

        routes(app);

        const port = 3000;
        app.listen(port, () => {
            console.log(`Server ejecutandose en puerto ${port}`)
        });
    } catch(error) {
        console.error(error);
    }
}

startServer();
