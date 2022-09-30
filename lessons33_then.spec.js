//referencja aby wyswietlało mi potrzebne metody do cypressa
/// <reference types="cypress" />

//synchroniczny - kod przechodzi linijka po linicje wykonując instrukcję w kodzie
//asynchroniczny - operacja jest tylko iniciowana ale program nie wykonuje na jego ukonczenie tylko leci z wykonywanem kodu dalej, 
//promis (.then(()=>{})) - "obecują" wykonywanie danej operacji a nastpenie zwrócenie rezultatu lub wyrzucenie błedu, obiek wystepuje zawsze w trzech stanach
//stan promis pending - polecenie zostało zainiciowane ale nie ukonczone
//stan promis reject - polecenie wykonane niepowodzeniem
//stan promis risorve - nasze wywołanie zakonczyło sie powodzeniem
describe.only('Test', () => {
    it('Test', () => {

        //example 1    
        //najpierw ładuje stronę
        cy.visit("http://the-internet.herokuapp.com/dymic_loading/1").then(()=>
        {

            //czeka az załaduje stronę i pwykona kolejne zadanie
        })
        

        //exaple 2
        //przypisanie aliasu do jakiegoś przycisku
        cy.visit("http://the-internet.herokuapp.com/dymic_loading/1")

        cy.get('button').then((przycisk)=>
        {
            cy.get(przycisk).click()

        })




    });
});