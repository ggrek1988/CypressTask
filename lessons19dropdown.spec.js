//referencja aby wyswietlało mi potrzebne metody do cypressa
/// <reference types="cypress" />


describe('console', () => {
    it('cosole', () => {
        cy.visit("http://demo.automationtesting.in/Register.html")
        
        //exaple 1
        //obsługa poprzez znacznik <select></select> , w select wpisujemy co chcemy szykać
        cy.get('#Skills').select('APIs')

        //examle 2 use enter

        cy.get('.select2-selection').click().then(()=>
        {

            cy.get(".select2-search__field").type('Japan{enter}')

        })

        //exaple 3 use only click for contains, uzywam then aby nie stosować cy.wait
        cy.get('.select2-selection').click().then(()=>
        {

            cy.get('.select2-results__option').contains('Japan').click()
            

        })
        
        
    });
});