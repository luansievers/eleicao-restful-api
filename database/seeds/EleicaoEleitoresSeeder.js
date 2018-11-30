'use strict'

const Factory = use('Factory')

class EleicaoEleitoresSeeder {
  async run () {
    const eleicao = await Factory.model('App/Models/Eleicao').create()
    const eleitores = await Factory.model('App/Models/Eleitor').makeMany(100)
    await eleicao.eleitores().saveMany(eleitores)
  }
}

module.exports = EleicaoEleitoresSeeder
