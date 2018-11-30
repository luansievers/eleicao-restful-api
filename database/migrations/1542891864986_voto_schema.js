'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VotoSchema extends Schema {
  up () {
    this.create('votos', (table) => {
      table.increments()
      table.string('ip').notNullable()
      table.integer('idCandidato').unsigned().references('id').inTable('candidatos').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('votos')
  }
}

module.exports = VotoSchema
