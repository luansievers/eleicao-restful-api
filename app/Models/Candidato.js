'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Candidato extends Model {
    
    votos () {
        return this.hasMany('app/Models/Voto')
    }
    
    cargo () {
        return this.belongsTo('app/Models/Cargo')
    }

}

module.exports = Candidato
