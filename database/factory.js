'use strict'

const Factory = use('Factory')

Factory.blueprint('App/Models/Eleicao', (faker) => {
    return {
        inicio: faker.timestamp(),
        fim: faker.timestamp(),
        resultado: faker.timestamp(),
        titulo: faker.sentence({ words: 3 }),
        instrucao: faker.paragraph(),
        termo: faker.paragraph(),
        mensagem: faker.paragraph()
    }
})

Factory.blueprint('App/Models/Eleitor', (faker) => {
    return {
        nome: faker.name(),
        cpf: faker.cpf(),
        email: faker.email(),
        senha: faker.password(),
        login: faker.word({ length: 10 })
    }
})
