//referencja aby wyswietlało mi potrzebne metody do cypressa
/// <reference types="cypress" />

//przenoszenie do nowej karty lub popup
describe('Zmiana okna', () => {
    it.skip('Zmiana okna', () => {
        cy.visit('http://the-internet.herokuapp.com/windows')

        //usuwanie atrybutu target="_blank" który powoduje otwarcie nowego okienka
        //.invoke('removeAttr','target')
        cy.get('.example > a').invoke('removeAttr','target').click()
        cy.get('h3').should('be.visible').and('contain.text',"New Window")
        
        });

    it('Popup', () => {
        
        cy.visit("https://www.soccerstand.com/")
        cy.get(':nth-child(1) > .event__info').click()

        //pozwoli aby mozna było przełaczyć sie do nowego okna popup
        cy.window()
        //alias win
        .then((win)=>{
            win.location.href='https://www.soccerstand.com/standings/GfTM50Dt/0W4LIGb1/#table/overall'


        })
        //alias popup
        .as('popup')

        cy.get('@popup').then(()=>
        {
            cy.get('.tableCellParticipant__name').contains('Paris SG').should('be.visible')
        })

    });
});