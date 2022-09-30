//referencja aby wyswietlało mi potrzebne metody do cypressa
/// <reference types="cypress" />


//zmienne srodowiskowe i consolowe
//uzywamy pliku cypress.json
//aby nie było widocznych zmiennych w konsoli wystarczy uzyć {log:false}

describe('ZmienneSrodowiskowe', () => {
    it('ZmienneSrodowiskowe', () => {
        cy.visit('http://the-internet.herokuapp.com/login')
        cy.get('#username').type(Cypress.env('username'),{log:false})
        cy.get('#password').type(Cypress.env('password'),{log:false})
        cy.get('.radius').click()

       
        //exaple 1
        cy.get('#flash').should('be.visible').and('contain.text','You logged into a secure area!')

        //exaple 2 
        cy.log('koniec testu')

    });
});