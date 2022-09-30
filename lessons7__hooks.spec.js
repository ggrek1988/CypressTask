//referencja aby wyswietlało mi potrzebne metody do cypressa
/// <reference types="cypress" />

describe('Test_Hoobs', () => {

    
    const username = 'testUser88'
    const password = '123456789101112Ad!'
    
    //moze byc before()
    beforeEach(() => {
         //przed kazdym testem wyczysc cookies
         //cy.clearCookie()
         //przed kazdym testem wyczysc localstore
         //cy.clearLocalStorage
        cy.visit('https://practice.automationbro.com/my-account/')
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get("button[name='login']").click()
    });

    // beforeEach(function() {
    //     cy.fixture('testdate').then((testdate)=>
    //     {   
    //         this.testdate = testdate
    //     })
       
    // });

    

    it('Test1', () => {
        

        //assertio
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
            .should('contains.text',username)
    });

    it('Test2', () => {
       
        //assertio
        cy.get('.woocommerce-MyAccount-navigation-link--dashboard > a')
            .should('contains.text','Dashboard')
        
    });

    //moze byc after
    afterEach(() => {
        cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').click()
    });
});