import Knex from 'knex'

export const up = function (knex: Knex) {
  return knex.schema.createTable('incidents', table => {
    table.increments()
    table.string('title').notNullable()
    table.string('description').notNullable()
    table.decimal('value').notNullable()

    table.string('ong_id').notNullable()

    table.foreign('ong_id').references('id').inTable('ongs')
  })
}

export const down = function (knex: Knex) {
  return knex.schema.dropTableIfExists('incidents')
}
