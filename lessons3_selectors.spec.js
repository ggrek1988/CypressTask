
//struktura testu tylko css
describe('Locators',() =>
{
    it('Locators',() =>{
        //przejscie na strone
        cy.visit("https://www.ebay.pl/")
        //klasa
//kropka w komendzie jest informacją ze chcemy odwołać sie do locator class gh-tb ui-autocomplete-input a zapisujemy :
//poprzez połaczenie .gh-tb.ui-autocomplete-input"
//class
        cy.get(".gh-tb.ui-autocomplete-input")

//szukanie locatora po Id, wtedy zawsze stosujemy '#'
//id
        cy.get("#gh-ac")

//name

        cy.get("[name='_nkw']")

        
//placeholder
        cy.get("[placeholder='Wyszukaj coś']")

 //np test_data  cy.get("[test_data='_nkw']")

//dowolny tekst

        cy.contains("Moda")

//przydatne na menu
        cy.get(".hl-cat-nav__js-tab").contains("Moda")

            });


       


});

