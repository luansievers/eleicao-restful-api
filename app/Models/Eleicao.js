'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Eleicao extends Model {

    static get table() {
        return 'eleicoes'
    }

    static get dates() {
        return super.dates.concat(['inicio', 'fim', 'resultado'])
    }

    eleitores() {
        return this.hasMany('App/Models/Eleitor', 'id', 'idEleicao')
    }

    cargos() {
        return this.hasMany('App/Models/Cargo', 'id', 'idEleicao')
    }

}

module.exports = Eleicao
