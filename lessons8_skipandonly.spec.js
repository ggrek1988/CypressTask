//referencja aby wyswietlało mi potrzebne metody do cypressa
/// <reference types="cypress" />
//mozliwe uzycie na całym zestawie testów describe.skip/only
describe('Skip and only', () => {
    //skip - pomija testy
    //only - wykonuje tylko bierzący test
    //funckje z mocha
    it.skip('test_01', () => {
        cy.log("test1")
    });

    it('test_02', () => {
        cy.log("test2")
    });

    it('test_03', () => {
        cy.log("test3")
    });

    it('test_04', () => {
        cy.log("test4")
    });
});