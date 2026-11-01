// LOGIN

function preencherlogin(email, senha) {
    // cy.get('[data-qa="login-email"]').type('pgats-aut-test-1793149008994@mail.com')
    // cy.get('[data-qa="login-password"]').type('12345')
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(senha)
    cy.get('[data-qa="login-button"]').click()
}

function verificarLoginComSucesso(user) {
    cy.contains('.navbar-nav li', user)
    cy.get('.navbar-nav li')
        .contains(user)
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

module.exports = {
    preencherlogin,
    verificarLoginComSucesso,
    verificarSeMensagemDeErroFoiExibidaNoLogin,
    efetuarLogout,
    verificarSeUsuarioFoiDeslogado,

}