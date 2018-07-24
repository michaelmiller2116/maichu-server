const database = require("../database-connection");

module.exports = {
  list() {
    return database('cart').select()
  },
  read(id) {
    return database('cart').select().where('id', id).first()
  },
  create(item) {
    return database('cart').insert(item).returning('*').then(record => record[0])
  },
  update(id, item) {
    return database('cart').update(item).where('id', id).returning('*').then(record => record[0])
  },
  delete(id) {
    return database('cart').delete().where('id', id)
  }
};
