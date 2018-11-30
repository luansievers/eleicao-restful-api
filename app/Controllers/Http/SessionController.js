'use strict'

const User = use('App/Models/User')
const Encryption = use('Encryption')

class SessionController {

  async login({ request, auth }) {

    const data = request.only(['username', 'password'])

    const user = await User.findBy({ 'username': data.username }, { 'password': data.password })
    await user.tokens().update({ is_revoked: true })

    return await auth.generate(user)
  }

  async logout({ auth }) {
    const user = auth.current.user
    const token = auth.getAuthHeader()

    await user
      .tokens()
      .where('token', Encryption.decrypt(token))
      .update({ is_revoked: true })
  }
}

module.exports = SessionController