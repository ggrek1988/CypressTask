//referencja aby wyswietlało mi potrzebne metody do cypressa
/// <reference types="cypress" />

//testowanie warunkowe odnosi się do wpsólnego wzorca programowania


describe('Conditional testing', () => {

    it.skip('Conditional testing', () => {
        cy.visit("https://helion.pl/")
//==============================================================Example 1===============
        //then - przypisanie własciwosci cy.get() do $body
        cy.get('body').then(($body) =>{

            //if ($body.find('#helloUser').lenght > 0)
            if ($body.text().includes('Zaloguj się'))
            {
                cy.log("user do not logged")
            }
            else
            {
                cy.log("user log")
            }

        })
//==============================================================Example 2===============
       //odwołanie się do elementu na stronie 

        // cy.get('button').then(($btn) => 
        // {
        //     if ($btn.hasClass('active')){

        //     }
        //  else{

        //     }
        // })

//==============================================================Example 3===============
        //sprawdza czy w body jest ciag znaków
        cy.get('body').then(($body) => 
            {
             if ($body.text().includes('Koszyk')){
                 cy.log('jest koszyk')
                 //jelsi mamy element przykryty 
                 cy.get('#koszykbox').click({force:true})

            }
        else{
            cy.log('nie ma  koszyka')
            }
        })

    })
//==============================================================Example 4 metoda Each===============
it('each metod', () => {
    cy.visit("https://helion.pl/")
    cy.get('#linkCatalog > a').click()
    cy.wait(200)
    //each (element, index, lista)
    //cy.get('.main-menu').find('li').each.....
    cy.get('.left-menu-container').find('.kategorieGlowne').each(($el,index,$lista)=>{

        const textElement = $el.find('a').text()
        //cy.log(textElement)

        if (textElement.includes('Gry'))
            {
                cy.log("mamy kategorie gry")
                //szuka po nazwie
                cy.contains('Gry').click()
            }
        else{

            cy.log('nie ma kategorii')
        }

    })
});











        


     
       

 

});