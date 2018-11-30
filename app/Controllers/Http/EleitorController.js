'use strict'

const Eleitor = use("App/Models/Eleitor")

class EleitorController {

  async index ({ request, response, view, auth }) {
    const eleitor = await Eleitor.all()
    return eleitor
  }

  async store ({ request, response, auth }) {
    const data = request.only(["nome", "cpf", "email", "senha", "login", "comprovante", "idEleicao"])
    const eleitor = await Eleitor.create(data)
    return eleitor
  }

  async show ({ params, request, response, view, auth }) {
    const eleitor = await Eleitor.findOrFail(params.id)
    return eleitor
  }

  async update ({ params, request, response, auth }) {
    const data = request.only(["nome", "cpf", "email", "senha", "login", "comprovante", "idEleicao"])
    const eleitor = await Eleitor.findOrFail(params.id)
    eleitor.merge(data)
    await eleitor.save()
    return eleitor
  }

  async destroy ({ params, request, response, auth }) {
    const eleitor = await Eleitor.findOrFail(params.id)
    await eleitor.delete()
    return response.status(200).send()
  }

}

module.exports = EleitorController
