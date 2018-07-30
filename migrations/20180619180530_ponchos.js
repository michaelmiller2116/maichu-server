
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ponchos', poncho => {
    poncho.increments()
    poncho.text('image')
    poncho.text('name')
    poncho.text('description')
    poncho.integer('price')
  } )
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('poncho')
}
