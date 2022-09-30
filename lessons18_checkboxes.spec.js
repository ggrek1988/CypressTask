//referencja aby wyswietlało mi potrzebne metody do cypressa
/// <reference types="cypress" />

describe('checkboxes', () => {
    it('checkboxes', () => {
        cy.visit('http://the-internet.herokuapp.com/checkboxes')

        cy.get('input[type="checkbox"]').first().check().should('be.checked').and('have.value','on')
        //cy.get('input[type="checkbox"]').last().uncheck()
        //zaznaczenie kilku checkbox
        cy.get('input[type="checkbox"]').first().check('option1','option3')
        

    });
    
});