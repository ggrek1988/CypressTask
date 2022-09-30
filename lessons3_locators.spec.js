//referencja aby wyswietlało mi potrzebne metody do cypressa
/// <reference types="cypress" />

//discrabe - opis grupt testów, sposób na pogrupowanie testów wywodzi sie z mocka, czego beda zweirac nasze przypadki testowe
describe('Serch one product on page ', () => {
    //it to nic innego jak przypadki testowe
    it('Should serch product', () => {

        cy.visit("https://www.ebay.pl/")
        cy.get("#gh-ac").type("swetr")
        cy.get("#gh-btn").click()

        //assertion
        cy.get(".srp-results.srp-list.clearfix")
            .find(".s-item")
            .first()
            .should("be.visible")
            .and("contain.text","Sweter")


    });
});

