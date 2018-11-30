'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EleicaoSchema extends Schema {
  up () {
    this.create('eleicoes', (table) => {
      table.increments()
      table.timestamp('inicio', 6).notNullable()
      table.timestamp('fim', 6).notNullable()
      table.timestamp('resultado', 6).notNullable()
      table.string('titulo').notNullable()
      table.text('instrucao').notNullable()
      table.text('termo').notNullable()
      table.text('mensagem').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('eleicoes')
  }
}

module.exports = EleicaoSchema
