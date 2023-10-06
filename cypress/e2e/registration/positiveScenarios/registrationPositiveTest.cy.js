
const lastName = "Testowy"
const firstName = "Mike"
const phoneNumber = "1234567890"

describe('Feature: Registration - Positive tests', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress 
    //from failing the test
    return false
})

    it(`As a user I want to be able to fill required fields and submit the form`, () => {
      cy.visit('/');
      cy.viewport(550, 750) 
      cy.get('#firstName')
        .type(firstName)
      cy.get('#lastName')
        .type(lastName);
      cy.get('#userNumber')
        .type(phoneNumber)
      cy.get('[id="gender-radio-1" ]')
        .click({force: true})
      cy.get('#submit')
        .click()  
       cy.get('#example-modal-sizes-title-lg')
        .should('be.visible')
        .should('contain', 'Thanks for submitting the form');
      cy.get('.modal-body')
        .should('be.visible')
        .should('contain', firstName)
        .should('contain', lastName)
        .should('contain', phoneNumber)
    });
});