// CADASTRO

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

function verificarSeMensagemDeCadastroExistenteFoiExibida() {
    cy.get('form[action*=signup] p')
        .should('exist')
        .should('be.visible')
        .should('contain', 'Email Address already exist!')
        .and('contain.text', 'Email Address already exist!')
}

module.exports = {
    iniciarCadastro,
    preencherCadastro,
    verificarSeCadastroFoiEfetuadoComSucesso,
    verificarSeMensagemDeCadastroExistenteFoiExibida
}