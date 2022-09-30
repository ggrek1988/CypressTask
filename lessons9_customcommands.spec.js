//referencja aby wyswietlało mi potrzebne metody do cypressa
/// <reference types="cypress" />


//custom commands
//wykorzystanie support/commans
describe('Testcustomcommands', () => {
    const email = 'test12345@wp.pl'
    const password = '12345678'
    it('Testcustomcommands', () => {
        //pobierana jest funckja z support/commands.js nowo stworzona 
        cy.new_page()
        //pobierana jest funckja z support/commands.js nowo stworzona 
        cy.commands_login(email,password)

       

    });
});