//referencja aby wyswietlało mi potrzebne metody do cypressa
/// <reference types="cypress" />

////do page object model tworzenie classy w katalogu support np. /support/Locators/HomePageLocators.js 
//z funkcjami return dane lokatory model 1

//do page object model 2
import HomePage from "../support/LocatorsPO/HomePageLocators"
import SignIn from "../support/LocatorsPO/SignInLocators"

describe('PageObjectModel', () => {
    //do page object model 3
    const homePage = new HomePage()
    const signIn = new SignIn()
    it('PageObjectModel ', () => {

        

        cy.visit('http://a.testaddressbook.com')

        //do page object model 4
        cy.signInClick()
        
        signIn.email_input().type('email')
        signIn.password_input.type('password')
        signIn.Sign_in_button().click()
    });
});