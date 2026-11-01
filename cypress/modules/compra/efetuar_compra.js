function adicionarProdutoAoCarrinho(nomeProduto) {
    cy.contains('.productinfo p', nomeProduto)
        .should('be.visible')
        .closest('.product-image-wrapper')
        .find('.productinfo .btn')
        .click()

    cy.get('.modal-footer > .btn').click()
}

function efetuarUmaCompra(nomesProdutos) {
    nomesProdutos.forEach(adicionarProdutoAoCarrinho)

    cy.contains('.shop-menu a', 'Cart').click()
    cy.url().should('include', '/view_cart')
    cy.contains('a.check_out', 'Proceed To Checkout')
        .should('be.visible')
        .click()
}

module.exports = {
    efetuarUmaCompra
}