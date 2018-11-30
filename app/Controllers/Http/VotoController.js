'use strict'

const Voto = use("App/Models/Voto")

class VotoController {

  async index ({ request, response, view, auth }) {
    const voto = await Voto.all()
    return voto
  }

  async store ({ request, response, auth }) {
    const data = request.only(["ip", "idCandidato"])
    const voto = await Voto.create(data)
    return voto
  }

  async show ({ params, request, response, view, auth }) {
    const voto = await Voto.findOrFail(params.id)
    return voto
  }

  async update ({ params, request, response, auth }) {
    const data = request.only(["ip", "idCandidato"])
    const voto = await Voto.findOrFail(params.id)
    voto.merge(data)
    await voto.save()
    return voto
  }

  async destroy ({ params, request, response, auth }) {
    const voto = await Voto.findOrFail(params.id)
    await voto.delete()
    return response.status(200).send()
  }

}

module.exports = VotoController
