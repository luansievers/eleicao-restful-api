'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')

/**
 * This class handles all exceptions thrown during
 * the HTTP request lifecycle.
 *
 * @class ExceptionHandler
 */
class ExceptionHandler extends BaseExceptionHandler {
  /**
   * Handle exception thrown during the HTTP lifecycle
   *
   * @method handle
   *
   * @param  {Object} error
   * @param  {Object} options.request
   * @param  {Object} options.response
   *
   * @return {void}
   */
  async handle(error, { request, response }) {
    /*
    * CSRF Validation
    * On validation failure, an exception is thrown with EBADCSRFTOKEN code. Make sure to listen for the exception and return an appropriate response.
    */
   console.log(error)
    if (error.code === 'EBADCSRFTOKEN') {
      response.forbidden('Não é possível processar a sua requisição')
      return
    }
    switch (error.status) {
      case 400:
        response.status(error.status).send("Solicitação Inválida")
        break;
      case 401:
        response.status(error.status).send("Não autorizado")
        break;
      case 402:
        response.status(error.status).send("Pagamento necessário")
        break;
      case 403:
        response.status(error.status).send("Proibido")
        break;
      case 404:
        response.status(error.status).send("Não encontrado")
        break;
      case 405:
        response.status(error.status).send("Método não permitido")
        break;
      case 406:
        response.status(error.status).send("Não aceito")
        break;
      case 407:
        response.status(error.status).send("Autenticação de Proxy Necessária")
        break;
      case 408:
        response.status(error.status).send("Tempo de solicitação esgotado")
        break;
      case 409:
        response.status(error.status).send("Conflito")
        break;
      case 410:
        response.status(error.status).send("Perdido")
        break;
      case 411:
        response.status(error.status).send("Duração necessária")
        break;
      case 412:
        response.status(error.status).send("Falha de pré-condição")
        break;
      case 413:
        response.status(error.status).send("Solicitação da entidade muito extensa")
        break;
      case 414:
        response.status(error.status).send("Solicitação de URL muito Longa")
        break;
      case 415:
        response.status(error.status).send("Tipo de mídia não suportado")
        break;
      case 416:
        response.status(error.status).send("Solicitação de faixa não satisfatória")
        break;
      case 417:
        response.status(error.status).send("Falha na expectativa")
        break;
      case 500:
        response.status(error.status).send("Erro do Servidor Interno")
        break;
      case 501:
        response.status(error.status).send("Não implementado")
        break;
      case 502:
        response.status(error.status).send("Porta de entrada ruim")
        break;
      case 503:
        response.status(error.status).send("Serviço Indisponível")
        break;
      case 504:
        response.status(error.status).send("Tempo limite da Porta de Entrada")
        break;
      case 505:
        response.status(error.status).send("Versão HTTP não suportada")
        break;
      default:
        response.status(error.status).send("Ocorreu um erro")
    }
  }

  /**
   * Report exception for logging or debugging.
   *
   * @method report
   *
   * @param  {Object} error
   * @param  {Object} options.request
   *
   * @return {void}
   */
  async report(error, { request }) {
  }
}

module.exports = ExceptionHandler
