function validarEnderecoCompra({ rua, cidade, pais }) {
    cy.get('#address_delivery > .address_title > .page-subheading')
        .should('be.visible')
        .and('contain', 'Your delivery address')
    cy.get('#address_delivery .address_address1')
        .should('be.visible')
        .and('contain', rua)
    cy.get('#address_delivery > .address_city')
        .should('be.visible')
        .and('contain', cidade)
    cy.get('#address_delivery > .address_country_name')
        .should('be.visible')
        .and('contain', pais)

    cy.get('#address_invoice > .address_title > .page-subheading')
        .should('be.visible')
        .and('contain', 'Your billing address')

}

module.exports = {
    validarEnderecoCompra
}