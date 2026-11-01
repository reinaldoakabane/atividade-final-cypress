/// <reference types="cypress" />

const cadastro = require('../modules/cadastro/index')
const login = require('../modules/login/login')
const produtos = {
    ...require('../modules/produtos/todos_produtos'),
    ...require('../modules/produtos/detalhes.produto'),
    ...require('../modules/produtos/buscar_produto')
}
const subscrever = require('../modules/subscrever/subscrever_com_email_valido')
const navegar = require('../modules/navegar/navegar')
const { usuarioExistente, criarUsuarioTeste, dadosCompra } = require('../modules/dados_teste')
const compra = {
    ...require('../modules/compra/validar_endereco_compra'),
    ...require('../modules/compra/revisar_pedido'),
    ...require('../modules/compra/pagamento_e_validacao_mensagem_de_sucesso'),
    ...require('../modules/compra/efetuar_compra')
}
describe('Automation Exercise', () => {
    // Cadastro

    it('Caso de Teste 01 - Cadastrar um novo usuário com sucesso', () => {
        const usuario = criarUsuarioTeste()

        navegar.navegar('/')
        cy.get('a[href*=login]').click()
        cadastro.iniciarCadastro(usuario)
        cadastro.preencherCadastro(usuario)
        cadastro.verificarSeCadastroFoiEfetuadoComSucesso()
    });

    it('Caso de Teste 02 - Efetuar Login de Usuário com email e senha corretos', () => {
        navegar.navegar('/login')
        login.preencherlogin(usuarioExistente.email, usuarioExistente.senha)
        login.verificarLoginComSucesso(usuarioExistente.nome)
    });

    it('Caso de Teste 03 - Efetuar Login de Usuário email e senha INCORRETOS', () => {
        navegar.navegar('/login')

        // Preencher Login
        login.preencherlogin(usuarioExistente.email, usuarioExistente.senhaIncorreta)
        login.verificarSeMensagemDeErroFoiExibidaNoLogin()
    });

    it('Caso de Teste 04 - Efetuar Logout', () => {
        navegar.navegar('/login')
        login.preencherlogin(usuarioExistente.email, usuarioExistente.senha)
        login.efetuarLogout()
        login.verificarSeUsuarioFoiDeslogado()
    });

    it('Caso de Teste 05 - Tentar cadastrar usuário com e-mail já cadastrado', () => {
        navegar.navegar('/')
        cy.get('a[href*=login]').click()
        cadastro.iniciarCadastro(usuarioExistente)
        cadastro.verificarSeMensagemDeCadastroExistenteFoiExibida()
    });

    it('Caso de Teste 08 - Verificar todos produtos e uma página do produto detalhado', () => {
        navegar.navegar('/')
        produtos.selecionarTodosProdutos()
        produtos.detalhesProduto('Blue Top', 'Category: Women > Tops', 'Rs. 500', 'Availability: In Stock', 'Condition: New', 'Brand: Polo')
    });

    it('Caso de Teste 09 - Buscar um produto', () => {
        navegar.navegar('/')
        produtos.selecionarTodosProdutos()
        produtos.buscarProduto('Blue Top')

    });

    it('Caso de Teste 10 - Validar subscrição na home page', () => {
        navegar.navegar('/')
        subscrever.subscreverComEmailValido(usuarioExistente.email)
    });

    it('Caso de Teste 15 - Criar uma ordem: Registrar antes do checkout', () => {
        const usuario = criarUsuarioTeste()
        const produtosPedido = ['Stylish Dress', 'Sleeveless Dress']

        navegar.navegar('/')
        cy.get('a[href="/login"]').click()
        cadastro.iniciarCadastro(usuario)
        cadastro.preencherCadastro(usuario)
        cadastro.verificarSeCadastroFoiEfetuadoComSucesso()
        cy.get('[data-qa="continue-button"]').click()
        login.verificarLoginComSucesso(usuario.nome)
        compra.efetuarUmaCompra(produtosPedido)
        compra.validarEnderecoCompra(dadosCompra.endereco)
        compra.revisarPedido(produtosPedido, dadosCompra.comentario)
        compra.pagamentoEValidacaoMensagemDeSucesso(dadosCompra.pagamento)
        cadastro.deletarContaEValidarMensagem()
    });

    it('Caso de Teste 16 - Criar uma ordem: Login antes do checkout', () => {
        const produtosPedido = ['Men Tshirt', 'Fancy Green Top']
        const usuario = criarUsuarioTeste()

        navegar.navegar('/')
        cy.get('a[href="/login"]').click()
        cadastro.iniciarCadastro(usuario)
        cadastro.preencherCadastro(usuario)
        cadastro.verificarSeCadastroFoiEfetuadoComSucesso()
        cy.get('[data-qa="continue-button"]').click()
        login.efetuarLogout()
        navegar.navegar('/')
        cy.get('a[href="/login"]').click()
        login.preencherlogin(usuario.email, usuario.senha)
        login.verificarLoginComSucesso(usuario.nome)
        compra.efetuarUmaCompra(produtosPedido)
        compra.validarEnderecoCompra(dadosCompra.endereco)
        compra.revisarPedido(produtosPedido, dadosCompra.comentario)
        compra.pagamentoEValidacaoMensagemDeSucesso(dadosCompra.pagamento)
        cadastro.deletarContaEValidarMensagem()
    });

});