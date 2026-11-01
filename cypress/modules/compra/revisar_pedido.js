function revisarPedido(nomesProdutos, comentario) {
    // Revisando o Pedido
    nomesProdutos.forEach((nomeProduto) => {
        cy.contains('.cart_description h4 a', nomeProduto)
            .should('be.visible')
    })
    cy.get('textarea.form-control').type(comentario)
    cy.contains('a.check_out', 'Place Order')
        .should('be.visible')
        .click()
}

module.exports = {
    revisarPedido
}