//referencja aby wyswietlało mi potrzebne metody do cypressa
/// <reference types="cypress" />


describe('invoke function', () => {
    it('invoke function', () => {

        cy.visit('http://the-internet.herokuapp.com/hovers')
       

        /////////exaple 1///////////////
        //cy.get('.figcaption').first().invoke('show')
        //cy.get(':nth-child(3) > .figcaption > h5').should('be.visible').and('have.text','name: user1')

        /////////exaple 2///////////////
        //wymuszenie aby był widoczny {force:true}
        cy.get(':nth-child(3) > .figcaption > a').click({force:true})
        

    });
});