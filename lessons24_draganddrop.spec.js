//referencja aby wyswietlało mi potrzebne metody do cypressa
/// <reference types="cypress" />


describe('Test drag and drop', () => {
    
    //exampe 1
    //z wykorzystaniem pluginu który słuzy do obsługi drag and drop
    //npm install --save-dev @4tw/cypress-drag-drop
    //zaimportowanie do pliku commans.js import '@4tw/cypress-drag-drop'

it.skip('Test z pluginem drag and drop', () => {
    
    cy.visit("http://testautomationpractice.blogspot.com/")
    cy.get("#draggable").drag("#droppable",{force:true})


});

//exampe 2
//drag and drop z uzyciem  dataTransfer

it('Test drag and drop use data transfer', () => {

    const dataTransfer = new DataTransfer;
    cy.visit('http://the-internet.herokuapp.com/drag_and_drop')
//tylko asercja
    cy.get('#column-a').should('have.text','A')
    cy.get('#column-b').should('have.text','B')

    //przenoszenie

    cy.get('#column-a').trigger('dragstart',{dataTransfer})
    cy.get('#column-b').trigger('drop',{dataTransfer})

    //tylko asercja
    cy.get('#column-a').should('have.text','B')
    cy.get('#column-b').should('have.text','A')



    
});

});