function selecionarTodosProdutos() {
    cy.xpath("//*[@id='header']//a[@href='/products']").click();
    cy.get('.features_items > h2')
        .should('be.visible')
        .and('have.text', 'All Products')
    cy.xpath("//div[contains(@class, 'features_items')]")
        .should('be.visible')
}





module.exports = {
    selecionarTodosProdutos
}