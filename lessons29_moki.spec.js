//referencja aby wyswietlało mi potrzebne metody do cypressa
/// <reference types="cypress" />


//mokowanie czyli troche zakłamwyaniu rzeczywistosci
describe('Testy intercept and mocking', () => {
    it('Intercept', () => {
        
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type("Admin")
        cy.get('#txtPassword').type("admin123")
        //zawsze przed akcją która powoduje powstanie GEta, mokowanie
        cy.intercept("GET","https://opensource-demo.orangehrmlive.com/index.php/dashboard").as("dashboard")
        cy.get('#btnLogin').click()
        //intercept stosuje sie aby nie uzywać wait(czas) a zeby wait czekał na konkterna akcje na stronie i nie ustawiać 
        //na sztywno czasu dokonania
        cy.wait("@dashboard")
        cy.get('#welcome').should('be.visible')
    });


    it('Test mocking', () => {
        //endpoin tags, zródło storny i zakładka sieci/network
        cy.fixture("tags.json").then((tags)=>{
            //zamokowanie odpowiedzi
            cy.intercept("GET","http://api.realworld.io/api/tags",tags)
            cy.visit("http://react-redux.realworld.io/")
        })
        
    });
});