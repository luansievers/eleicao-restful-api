'use strict'

const Cargo = use("App/Models/Cargo")

class CargoController {

  async index ({ request, response, view, auth }) {
    const cargo = await Cargo.all()
    return cargo
  }

  async store ({ request, response, auth }) {
    const data = request.only(["nome", "descricao", "quantidadeVotos", "idEleicao"])
    const cargo = await Cargo.create(data)
    return cargo
  }

  async show ({ params, request, response, view, auth }) {
    const cargo = await Cargo.findOrFail(params.id)
    return cargo
  }

  async update ({ params, request, response, auth }) {
    const data = request.only(["nome", "descricao", "quantidadeVotos", "idEleicao"])
    const cargo = await Cargo.findOrFail(params.id)
    cargo.merge(data)
    await cargo.save()
    return cargo
  }

  async destroy ({ params, request, response, auth }) {
    const cargo = await Cargo.findOrFail(params.id)
    await cargo.delete()
    return response.status(200).send()
  }

}

module.exports = CargoController
