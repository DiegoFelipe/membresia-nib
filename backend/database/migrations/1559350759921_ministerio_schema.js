'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MinisterioSchema extends Schema {
  up () {
    this.create('ministerios', (table) => {
      table.increments('min_id')
      table.string('min_nome')
      table.string('min_descricao')
      table.timestamps()
    })
  }

  down () {
    this.drop('ministerios')
  }
}

module.exports = MinisterioSchema
