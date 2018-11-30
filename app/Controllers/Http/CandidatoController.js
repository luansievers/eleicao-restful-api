'use strict'

const Candidato = use("App/Models/Candidato")

class CandidatoController {

  async index ({ request, response, view, auth }) {
    const candidato = await Candidato.all()
    return candidato
  }

  async store ({ request, response, auth }) {
    const data = request.only(["nome", "urlFoto", "curriculum", "idCargo"])
    const candidato = await Candidato.create(data)
    return candidato
  }

  async show ({ params, request, response, view, auth }) {
    const candidato = await Candidato.findOrFail(params.id)
    return candidato
  }

  async update ({ params, request, response, auth }) {
    const data = request.only(["nome", "urlFoto", "curriculum", "idCargo"])
    const candidato = await Candidato.findOrFail(params.id)
    candidato.merge(data)
    await candidato.save()
    return candidato
  }

  async destroy ({ params, request, response, auth }) {
    const candidato = await Candidato.findOrFail(params.id)
    await candidato.delete()
    return response.status(200).send()
  }

}

module.exports = CandidatoController
