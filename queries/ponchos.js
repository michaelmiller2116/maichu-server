const database = require("../database-connection");

module.exports = {
    list() {
        return database('ponchos').select()
    },
    read(id) {
        return database('ponchos').select().where('id', id).first()
    },
    create(poncho) {
        return database('ponchos').insert(poncho).returning('*').then(record => record[0])
    },
    update(id, poncho) {
        return database('ponchos').update(poncho).where('id', id).returning('*').then(record => record[0])
    },
    delete(id) {
        return database('ponchos').delete().where('id', id)
    }
};
