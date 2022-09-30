//referencja aby wyswietlało mi potrzebne metody do cypressa
/// <reference types="cypress" />


//custom commands
//wykorzystanie support/commans
describe('TestAlias', () => {
    const email = 'test12345@wp.pl'
    const password = '12345678'
    it('TestAlias', () => {
        
        cy.visit('http://a.testaddressbook.com/sign_in')
        cy.get('#session_email').type(email)
        cy.get('#session_password').type(password)
        cy.get('[type="submit"]').click()

        //tworzenie aliasu
        cy.get('[data-test-addresses]').as('addresses')
        //zastosowanie aliasu exaple 1
        cy.get('@addresses').click()

        //zastosowanie aliasu exaple 1
        //intercept - przechwycenie
        cy.intercept("GET", 'http://endpoint').as('requestAddresses')
        cy.get('@addresses').click()
        cy.wait('@requestAddresses').its('response.statusCode').should('be.visible',200)


    });
});