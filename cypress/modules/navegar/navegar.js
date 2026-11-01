function navegar(url) {
    cy.visit(url)
    cy.get('a[href*=login]').should('be.visible')
}

module.exports = {
    navegar
}