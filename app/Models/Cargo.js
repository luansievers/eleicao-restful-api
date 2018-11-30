'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cargo extends Model {
    
    eleicao () {
        return this.belongsTo('app/Models/Eleicao')
    }

    candidatos () {
        return this.hasMany('app/Models/Candidato')
    }
    
}

module.exports = Cargo
