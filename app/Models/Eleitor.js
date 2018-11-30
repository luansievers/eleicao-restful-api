'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class Eleitor extends Model {
    static boot() {
        super.boot()

        this.addHook('beforeSave', async (eleitorInstance) => {
            if (eleitorInstance.dirty.senha) {
                eleitorInstance.senha = await Hash.make(eleitorInstance.senha)
            }
        })
    }

    static get table() {
        return 'eleitores'
    }

    static get hidden() {
        return ['senha']
    }

    eleicao() {
        return this.belongsTo('app/Models/Eleicao')
    }

}

module.exports = Eleitor
