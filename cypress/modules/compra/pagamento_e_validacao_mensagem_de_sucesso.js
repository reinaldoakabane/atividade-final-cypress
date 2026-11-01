function pagamentoEValidacaoMensagemDeSucesso({ nome, cartao, cvc, mesExpiracao, anoExpiracao }) {
    // Pagamento
    cy.get('[data-qa="name-on-card"]').type(nome)
    cy.get('[data-qa="card-number"]').type(cartao)
    cy.get('[data-qa="cvc"]').type(cvc)
    cy.get('[data-qa="expiry-month"]').type(mesExpiracao)
    cy.get('[data-qa="expiry-year"]').type(anoExpiracao)

    // Validação da mensagem de sucesso da ordem
    cy.window().then((window) => {
        cy.once('window:before:unload', () => {
            const successMessage = window.document.querySelector('#success_message')
            expect(Cypress.$(successMessage)).to.be.visible
            expect(successMessage.textContent).to.contain('Your order has been placed successfully!')
        })
    })
    cy.get('[data-qa="pay-button"]').click()
}

module.exports = {
    pagamentoEValidacaoMensagemDeSucesso
}