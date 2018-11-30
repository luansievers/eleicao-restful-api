'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EleitorSchema extends Schema {
  up () {
    this.create('eleitores', (table) => {
      table.increments()
      table.string('nome').notNullable()
      table.string('cpf').notNullable()
      table.string('email').notNullable()
      table.string('senha').notNullable().unique()
      table.string('login').notNullable().unique()
      table.string('comprovante').unique()
      table.integer('idEleicao').unsigned().references('id').inTable('eleicoes').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('eleitores')
  }
}

module.exports = EleitorSchema
