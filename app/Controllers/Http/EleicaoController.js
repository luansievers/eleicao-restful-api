'use strict'

const Eleicao = use("App/Models/Eleicao")

class EleicaoController {

  async index ({ request, response, view, auth }) {
    const eleicao = await Eleicao.all()
    return eleicao
  }

  async store ({ request, response, auth }) {
    const data = request.only(["inicio", "fim", "resultado", "titulo", "instrucao", "termo", "mensagem"])
    const eleicao = await Eleicao.create(data)
    return eleicao
  }

  async show ({ params, request, response, view, auth }) {
    const eleicao = await Eleicao.findOrFail(params.id)
    return eleicao
  }

  async update ({ params, request, response, auth }) {
    const data = request.only(["inicio", "fim", "resultado", "titulo", "instrucao", "termo", "mensagem"])
    const eleicao = await Eleicao.findOrFail(params.id)
    eleicao.merge(data)
    await eleicao.save()
    return eleicao
  }

  async destroy ({ params, request, response, auth }) {
    const eleicao = await Eleicao.findOrFail(params.id)
    await eleicao.delete()
    return response.status(200).send()
  }

}

module.exports = EleicaoController
