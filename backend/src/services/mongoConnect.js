class MongoConnection {
    constructor(mongo, uri) {
        this.mongo = mongo;
        this.uri = uri;
    }

    async connect() {
        console.log('MongoConnection: Iniciando conexion a mongo');
        await this.mongo.connect(this.uri)
        .catch(async error => {
            console.error('MongoConnection: Conectado a mongo correctamente')
            console.error(error);
        });
        console.log('MongoConnection: Conectado a mongo correctamente');
    };
}

module.exports = { MongoConnection };