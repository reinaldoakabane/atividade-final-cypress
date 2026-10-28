/// <reference types="cypress" />

const cadastro = require('../modules/cadastro/index')
const login = require('../modules/login/login')

describe('Automation Exercise', () => {
    // Cadastro
    // cy.get() -> elementos baseados em css selector
    // cy.contains() -> elementos baseados em texto

    it('Cadastrar um novo usuário com sucesso', () => {
        cy.visit('/')
        cy.get('a[href*=login]').click()
        // Iniciar Cadastro
        cadastro.iniciarCadastro('Test 123', `pgats-aut-test-${Date.now()}@mail.com`)
        // Preencher Cadastro
        cadastro.preencherCadastro()
        // Verificar Cadastro
        cadastro.verificarSeCadastroFoiEfetuadoComSucesso()

    });

    it('Efetuar Login de Usuário com email e senha corretos', () => {
        cy.visit('/login')
        // Preencher Login
        login.preencherlogin('pgats-aut-test-1793149008994@mail.com', '12345')
        // Verificar Login
        login.verificarLoginComSucesso()

    });

    it('Efetuar Login de Usuário email e senha INCORRETOS', () => {
        cy.visit('/login')

        // Preencher Login
        login.preencherlogin('pgats-aut-test-1793149008994@mail.com', '54321')

        // Verificar se mensagem de erro foi exibida no Login
        login.verificarSeMensagemDeErroFoiExibidaNoLogin()

    });

    it('Efetuar Logout', () => {
        cy.visit('/login')
        // Preencher Login
        login.preencherlogin('pgats-aut-test-1793149008994@mail.com', '12345')
        // Efetuar Logout
        login.efetuarLogout()
        // Verificar se o usuario foi deslogado
        login.verificarSeUsuarioFoiDeslogado()

    });

    it('Tentar cadastrar usuário com e-mail já cadastrado', () => {
        cy.visit('/')
        cy.get('a[href*=login]').click()
        cadastro.iniciarCadastro('Test 123', 'pgats-aut-test-1793149008994@mail.com')
        cadastro.verificarSeMensagemDeCadastroExistenteFoiExibida()
    });

});

/* CADASTRO

function iniciarCadastro(nome, email) {
    // cy.get('[data-qa="signup-name"]').type(`Test 123`)
    // cy.get('[data-qa="signup-email"]').type(`pgats-aut-test-${Date.now()}@mail.com`)
    cy.get('[data-qa="signup-name"]').type(nome)
    cy.get('[data-qa="signup-email"]').type(email)
    cy.get('[data-qa="signup-button"]').click()
}

function preencherCadastro() {
    cy.get('#id_gender2').check()
    cy.get('[data-qa="password"]').type('12345')
    // Selects e Comboboxes -> select
    cy.get('[data-qa="days"]').select('11')
    cy.get('[data-qa="months"]').select('December')
    cy.get('[data-qa="years"]').select('1989')
    // checkboxes -> check
    cy.get('#newsletter').check()
    cy.get('#optin').check()
    cy.get('[data-qa="first_name"]').type('Test')
    cy.get('[data-qa="last_name"]').type('123')
    cy.get('[data-qa="company"]').type('PGATS')
    cy.get('[data-qa="address"]').type('Street 1')
    cy.get('[data-qa="country"]').select('United States')
    cy.get('[data-qa="state"]').type('Orlando')
    cy.get('[data-qa="city"]').type('Florida')
    cy.get('[data-qa="zipcode"]').type('32819')
    cy.get('[data-qa="mobile_number"]').type('123456789')
    cy.get('[data-qa="create-account"]').click()
}

function verificarSeCadastroFoiEfetuadoComSucesso() {
    //cy.get('[data-qa="create-account"]').click()
    cy.get('[data-qa="account-created"]')
        .should('be.visible')
        .and('contain', 'Account Created!')
}
*/

/* LOGIN

function preencherlogin(email, senha) {
    // cy.get('[data-qa="login-email"]').type('pgats-aut-test-1793149008994@mail.com')
    // cy.get('[data-qa="login-password"]').type('12345')
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(senha)
    cy.get('[data-qa="login-button"]').click()
}

function verificarLoginComSucesso() {
    cy.contains('.navbar-nav li', 'Test 123')
    cy.get('.navbar-nav li')
        .contains('Test 123')
        .should('be.visible')
}

function verificarSeMensagemDeErroFoiExibidaNoLogin() {
    cy.get('form[action*="login"] > p')
        .should('exist')
        .should('be.visible')
        .should('contain', 'Your email or password is incorrect!')
        .and('contain.text', 'Your email or password is incorrect!')
}

function efetuarLogout() {
    cy.get('a[href*="logout"]')
        .should('be.visible')
        .click()
}

function verificarSeUsuarioFoiDeslogado() {
    cy.get('.login-form > h2').should('be.visible')
    cy.get('a[href*="logout"]').should('not.exist')
    cy.get('[action*="login"]').should('be.visible');
    cy.url().should('include', 'login')
}

function verificarSeMensagemDeCadastroExistenteFoiExibida() {
    cy.get('form[action*=signup] p')
        .should('exist')
        .should('be.visible')
        .should('contain', 'Email Address already exist!')
        .and('contain.text', 'Email Address already exist!')
}

*/