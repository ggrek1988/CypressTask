//referencja aby wyswietlało mi potrzebne metody do cypressa
/// <reference types="cypress" />

//discrabe - opis grupt testów, sposób na pogrupowanie testów wywodzi sie z mocka, czego beda zweirac nasze przypadki testowe
describe('use fixtures file  ', () => {
    //it to nic innego jak przypadki testowe
    //it.skip - pomija test
    it.skip('use fixtures file ', () => {

        cy.visit("http://the-internet.herokuapp.com/login")
       
        //defining fixtures files
        cy.fixture("testdate").then(function(testdata)
        {   
            this.testdata = testdata

            cy.get("#username").type(this.testdata.username)
            cy.get("#password").type(this.testdata.password)
            cy.get(".radius").click()
        })

     });

     // writeFile() and readFile()
     it('cy.writeFile and cy.readFile', () => {
           
        cy.visit("http://the-internet.herokuapp.com/login")
   
        //defining fixtures files
        cy.fixture("testdate")
            .then(function(testdata)
        {   
            this.testdata = testdata

            cy.get("#username").type(this.testdata.username)
            cy.get("#password").type(this.testdata.password)
            cy.get(".radius").click()
        })
        cy.get(".subheader").then((headerText) =>{
        cy.get(".large-4 > div").then((footer) =>{
            const text = headerText.text()
            const footertext = footer.text()
            //cy.log(footertext)
            
            //writeFile
            cy.writeFile("cypress/fixtures/subheader.json",{napis:text , footer:footertext})

            //readFile
            cy.readFile("cypress/fixtures/subheader.json").then((napisHeader)=>
            {
                cy.log(napisHeader.napis)
                cy.log(napisHeader.footer)
            })
        })
            
        })
    });
});

