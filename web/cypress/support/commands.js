// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// ***********************************************
Cypress.Commands.add("assertValidationMessage", (selector, expectedMessage) => {
  cy.get(selector).then(($input) => {
    const actualMessage = $input[0].validationMessage;
    cy.log(`Validation message for ${selector}: ${actualMessage}`);
    console.log(`Validation message for ${selector}: ${actualMessage}`);
    if (actualMessage !== expectedMessage) {
      cy.log(`Expected: ${expectedMessage}, but got: ${actualMessage}`);
    }
    expect(actualMessage).to.eq(expectedMessage);
  });
});
