//referencja aby wyswietlało mi potrzebne metody do cypressa
/// <reference types="cypress" />



//iframe ramki w których znajdują sie formularz


describe('iFrames', () => {
    it('iFrames', () => {
        cy.visit('http://the-internet.herokuapp.com/iframe')
       
        //sposób na dostanie się do iframe 1
        //cy.get("iframe").eq(0) lub cy.get("iframe").ferst
        //sposób na dostanie się do iframe 2
        //cy.get("iframe").eq(1)
        //lub dostac sie do ostatniego
        //cy.get("iframe").last

        cy.get("iframe")
        //wartoc 0 zwraca nam ostatnio wybrany element i własciwość contentDocument zwraca nam obiekt 
        //wygenerownay przez iframe , body pobierze nam tresc
        //ogólna procedyra aby dodoac sie do iframe
        .its('0.contentDocument.body')
        .should('be.visible')
        //uzycie cy.wrap pozwala nam na uzycie wiekszej liczby zmiennych do asserci
        .then(cy.wrap)
        //.should('contain.text','Your content goes here.')
        .clear()
        .type("przykładowy test")

    });
});