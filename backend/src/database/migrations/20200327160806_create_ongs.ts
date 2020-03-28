import Knex from 'knex'

export const up = function (knex: Knex) {
  return knex.schema.createTable('ongs', table => {
    table.string('id').primary()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('whatsapp').notNullable()
    table.string('city').notNullable()
    table.string('uf', 2).notNullable()
  })
}

export const down = function (knex: Knex) {
  return knex.schema.dropTableIfExists('ongs')
}
