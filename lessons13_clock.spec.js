//referencja aby wyswietlało mi potrzebne metody do cypressa
/// <reference types="cypress" />


//cofniecie sie w czasie, lub kiedy musimy czekac na jakąś akcje

describe('clock function', () => {
    it('clock function', () => {
        cy.visit('http://the-internet.herokuapp.com/dynamic_loading')
        cy.clock()
        cy.get('[href="/dynamic_loading/1"]').click()
        cy.get('button').click()
        cy.tick(12000)
        cy.get('#finish > h4').should('be.visible').and('contain','Hello World!')
    });
});