//referencja aby wyswietlało mi potrzebne metody do cypressa
/// <reference types="cypress" />

//vieport - pozwala na pisanie testów pod widoki mobilne

describe('Test Vieport', () => {
    it('Test Vieport', () => {
        cy.viewport("iphone-8")
        cy.visit('https://www.allegro.pl/')

        //ustawienie parametru w configuracji na szybko jednorazowo na testach
        Cypress.config({defaultCommandTimeout:10000})
    });
});