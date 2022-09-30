//referencja aby wyswietlało mi potrzebne metody do cypressa
/// <reference types="cypress" />


describe('Alert', () => {
    

    it('Alert', () => {
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")

        // //exaple 1
        cy.get(":nth-child(1) > button").click()
        cy.get('#result').should('be.visible').and('have.text','You successfully clicked an alert')

        // //exaple 2
        cy.get(':nth-child(2) > button').click()
        cy.get('#result').should('be.visible').and('have.text','You clicked: Ok')

        //exaple 3
        cy.on("window:alert",(str)=>{

            expect(str).to .equal('I am a JS Alert')
        })

        
        //exaple 4 z alertem confir
        cy.on('window:confirm',(str)=>{
            //assercia z moka
            expect(str).to.equal('I am a JS Confirm')
        })

    });
});