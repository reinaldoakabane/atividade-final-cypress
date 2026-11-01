function subscreverComEmailValido(email) {
    cy.scrollTo('bottom')
    cy.get('.single-widget > h2')
        .should('be.visible')
        .and('contain', 'Subscription')
    cy.get('#susbscribe_email').type(email)
    cy.get('#subscribe').click()
    cy.get('.alert-success')
        .should('be.visible')
        .and('contain', 'You have been successfully subscribed!')
}





module.exports = {
    subscreverComEmailValido
}