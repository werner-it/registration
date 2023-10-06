
describe('Feature: Registration - Negative tests', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress 
    //from failing the test
    return false
})

    it(`As a user I shouldn't be able to submit a form without required data`, () => {
      cy.visit('/');
      cy.viewport(550, 750) 
      cy.get('#submit')
        .click()  
       cy.get('#example-modal-sizes-title-lg')
        .should('not.exist')
    });
});