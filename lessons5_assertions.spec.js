//referencja aby wyswietlało mi potrzebne metody do cypressa
/// <reference types="cypress" />

describe('Assertion ', () => {
    //it to nic innego jak przypadki testowe
    it('Assertion', () => {


        //implicit assertion
        //wiele rzeczy na postawie jednego elementu
        cy.get(".rt-bng")
            .find(".rt-body")
            //potem znajdz
            .find(".rt-tr")
            //.first()
            //powinna byc widoczna
            .should("be.visible")
            //.and("contain.text","Sweter")
            //jesli widoczna znajdz kolejną klase
            .and("have.class","odd")
            .first()

            //explicit assertion expect i asserts
            cy.request("POST","http://dev.local/seed/users",
            {
                "name":"Dave",
                "job":"Developer"

            })

            .then((response) =>{

                expect(response.status).to.eq(201)
                expect(response.duration).to.be.below(1000)
                expect(response.body).to.have.property("name","Dave")
                expect(response.body).to.have.property("job","Developer")
            })


    });

    cy.visit()//wbudowana assercia
    cy.request()//udzielnie odpowiedzi
    cy.contains()//element z zawartoscią wkoncu sie pojawi
    cy.get()//oczekuje dimysle element zaistnieje na naszej stronie
        .find()//oczekuje ze element bedzie widoczny
        .type()//jelsi coś chcemy wpisac, oczekuje az bedzie wstanie coś wpisać
        .click()//oczekuje az element bedzie w stanie klikniecia
        .its()//znajdzie własciwośc na bierzący temat.
    //contain - pl, zawierać 
    cy.get(".tr-by").should("co")
});