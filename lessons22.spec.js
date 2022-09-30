//referencja aby wyswietlało mi potrzebne metody do cypressa
/// <reference types="cypress" />


//kopiowanie kilki plików do zmiennych srodowiskowych
//cypress.json
//zmiana pliku package.json dopisująć
//"scripts": {
//     "tests": "npx cypress open"
//   }

describe('Conditional testing', () => {
    it('Conditional testing', () => {
        
        cy.visit('./index.php')
        cy.get('.login').click()

        cy.get('#email').type(Cypress.env('username'))
        cy.get('#passwd').type(Cypress.env('password'))

        cy.get('#SubmitLogin').click()
    });
});

