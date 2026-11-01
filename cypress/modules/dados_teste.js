const usuarioExistente = {
    nome: 'Test 123',
    email: 'pgats-aut-test-1793558005748@mail.com',
    senha: '12345',
    senhaIncorreta: '54321'
}

function criarUsuarioTeste() {
    return {
        nome: 'Test 123',
        email: `pgats-aut-test-${Date.now()}@mail.com`,
        senha: '12345',
        diaNascimento: '11',
        mesNascimento: 'December',
        anoNascimento: '1989',
        primeiroNome: 'Test',
        sobrenome: '123',
        empresa: 'PGATS',
        rua: 'Street 1',
        pais: 'United States',
        estado: 'Orlando',
        cidade: 'Florida',
        cep: '32819',
        telefone: '123456789'
    }
}

const dadosCompra = {
    endereco: {
        rua: 'Street 1',
        cidade: 'Florida',
        pais: 'United States'
    },
    comentario: 'Pedido Urgente',
    pagamento: {
        nome: 'Test 123',
        cartao: '9087276489010011',
        cvc: '470',
        mesExpiracao: '11',
        anoExpiracao: '2028'
    }
}

module.exports = {
    usuarioExistente,
    criarUsuarioTeste,
    dadosCompra
}
