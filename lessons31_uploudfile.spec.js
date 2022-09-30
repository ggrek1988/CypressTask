//referencja aby wyswietlało mi potrzebne metody do cypressa
/// <reference types="cypress" />
/// <reference types="cypress-downloadfile"/>

//nalezy zainstalowac plugin który pomoze nam na załaczenie plików 
//
describe('Test uploud and download file', () => {
    it.skip('Test uploud file', () => {
        
        cy.visit('http://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('Capture001.png')
        cy.get('#file-submit').click()
        cy.get("body").then(($body)=>{

            if ($body.text().includes('File Uploaded!'))
            {
                cy.log("File Uploaded!")
            }
        })
        cy.get('h3').should("have.text","File Uploaded!").and("be.visible")
        cy.get('#uploaded-files').should("be.visible").and('contain.text','Capture001.png')

    });

    it('Test download file', () => {
        cy.downloadFile('http://the-internet.herokuapp.com/download/sample.png','cypress/fixtures/','sample.png')
    });
});