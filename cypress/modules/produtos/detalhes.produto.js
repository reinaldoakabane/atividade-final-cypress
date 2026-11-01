function detalhesProduto(produto, categoria, preco, disponibilidade, condição, marca) {
    cy.contains('.productinfo p', produto)
        .should('be.visible')
        .closest('.product-image-wrapper')
        .contains('a', 'View Product')
        .click()
    cy.xpath("//div[@class='product-information']//h2")
        .should('be.visible')
        .and('have.text', produto)
    cy.xpath("//div[@class='product-information']//p[contains(text(), 'Category:')]")
        .should('be.visible')
        .and('contain.text', categoria)
    cy.xpath("//div[contains(@class, 'product-information')]//span/span")
        .should('be.visible')
        .and('contain.text', preco)
    cy.xpath("//div[contains(@class, 'product-information')]//p[.//b[contains(., 'Availability:')]]")
        .should('be.visible')
        .and('contain.text', disponibilidade)
    cy.xpath("//div[contains(@class, 'product-information')]//p[.//b[contains(., 'Condition:')]]")
        .should('be.visible')
        .and('contain.text', condição)
    cy.xpath("//div[contains(@class, 'product-information')]//p[.//b[contains(., 'Brand:')]]")
        .should('be.visible')
        .and('contain.text', marca)
}

module.exports = {
    detalhesProduto
}
