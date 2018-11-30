'use strict'

const User = use("App/Models/User")

const Factory = use('Factory')

class UserSeeder {
  async run () {
    const data = {}
    data.username = 'stockinfo'
    data.email = 'luan.sievers@stockinfo.com.br'
    data.password = 'stock613'
    await User.create(data)
  }
}

module.exports = UserSeeder
