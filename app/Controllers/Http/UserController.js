'use strict'

const User = use("App/Models/User")

class UserController {

  async index ({ request, response, view, auth }) {
    const user = await User.all()
    return user
  }

  async store ({ request, response, auth }) {
    const data = request.only(["username", "email", "password"])
    const user = await User.create(data)
    return user
  }

  async show ({ params, request, response, view, auth }) {
    const user = await User.findOrFail(params.id)
    return user
  }

  async update ({ params, request, response, auth }) {
    const data = request.only(["username", "email", "password"])
    const user = await User.findOrFail(params.id)
    user.merge(data)
    await user.save()
    return user
  }

  async destroy ({ params, request, response, auth }) {
    const user = await User.findOrFail(params.id)
    await user.delete()
    return response.status(200).send()
  }

}

module.exports = UserController
