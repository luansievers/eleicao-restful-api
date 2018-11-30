'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CargoSchema extends Schema {
  up () {
    this.create('cargos', (table) => {
      table.increments()
      table.string('nome').notNullable()
      table.string('descricao').notNullable()
      table.integer ('quantidadeVotos').notNullable()
      table.integer('idEleicao').unsigned().references('id').inTable('eleicoes').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('cargos')
  }
}

module.exports = CargoSchema
