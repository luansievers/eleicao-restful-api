'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Voto extends Model {
    
    candidato () {
        return this.belongsTo('app/Models/Candidato')
    }

}

module.exports = Voto
