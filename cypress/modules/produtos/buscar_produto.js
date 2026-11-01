function buscarProduto(produto) {
    cy.get('#search_product').type(produto);
    cy.get('#submit_search').click();
    cy.get('.features_items > h2')
        .should('be.visible')
        .and('have.text', 'Searched Products')
    cy.get('.productinfo > p')
        .should('be.visible')
        .and('have.text', produto)
}





module.exports = {
    buscarProduto
}