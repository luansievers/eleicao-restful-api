'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CandidatoSchema extends Schema {
  up () {
    this.create('candidatos', (table) => {
      table.increments()
      table.string('nome').notNullable()
      table.string('urlFoto').notNullable()
      table.string('curriculum').notNullable()
      table.integer('idCargo').unsigned().references('id').inTable('cargos').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('candidatos')
  }
}

module.exports = CandidatoSchema
