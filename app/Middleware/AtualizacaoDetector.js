'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Não deve ser possível realizar update após a eleição ter sido iniciada
 */
class AtualizacaoDetector {
  
  async handle ({ request }, next) {
    console.log(request)
    console.log(request.ip())
    console.log(request.method())
    console.log(request.url())
    await next()
  }
}

module.exports = AtualizacaoDetector
