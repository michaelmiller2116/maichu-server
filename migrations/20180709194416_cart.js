exports.up = function(knex, Promise) {
  return knex.schema.createTable('cart', item => {
    item.increments()
    item.text('image')
    item.text('name')
    item.integer('price')
    item.text('description')
    item.integer('qty')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cart')
}
