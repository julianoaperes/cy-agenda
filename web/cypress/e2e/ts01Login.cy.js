import { customDescribeNumbered } from '../support/commands.mjs';
customDescribeNumbered('Login', (it) => {
  beforeEach(() => {
    cy.visit('/'); // Given the user accesses this link
    // The it should open the page to login
  }),
    it("Should login successfully when the user fills out the form with valid credentials by clicking on the 'Entrar' button", () => {
      cy.get('a[href = "pre-cadastro"]').click(); // When the user clicks on the "Entrar" button
      cy.get('h2').should('have.text', 'Seus dados'); // Then the user should see the "Seus dados" title
      cy.get('#nome').type('Teste Qa'); // And fill out the "name" field with "Teste Qa"
      cy.get('#email').type('qateste@teste.com'); // And fill out the "email" field
      cy.get('button[type="submit"]').should('have.text', 'Continuar').click(); // And click on the "Continuar" button
      cy.get('h1').should('have.text', 'O LendárioBarbershop'); // Then the user should see the "O LendárioBarbershop" title
    });

  it("Should login successfully when the user fills out the form with valid credentials by clicking on the 'Agendar um horário' button", () => {
    cy.get('a[href = "/agendamento"]')
      .should('have.text', 'Agendar um horário')
      .click(); // When the user clicks on the "Agendar um horário" button
    cy.get('h2').should('have.text', 'Seus dados'); // Then the user should see the "Seus dados" modal
    cy.get('#nome').type('Teste Qa'); // And fill out the "name" field with "Teste Qa"
    cy.get('#email').type('qateste@teste.com'); // And fill out the "email" field
    cy.get('button[type="submit"]').should('have.text', 'Continuar').click(); // And click on the "Continuar" button
    cy.get('h1').should('have.text', 'Agendamento de Serviços'); // Then the user should see the "Agendamento de Serviços" title
  });

  it('"Seus dados" form: Should displays validation messages after submit, when the fields were empty', () => {
    cy.get('a[href = "pre-cadastro"]').click(); // When the user clicks on the "Entrar" button
    cy.get('h2').should('have.text', 'Seus dados'); // Then the user should see the "Seus dados" form
    cy.get('button[type="submit"]').should('have.text', 'Continuar').click(); // And click on the "Continuar" button
    cy.get('#nome').clear(); // And clear the "name" field
    cy.get('.alert-msg') // Then the user should see the alert-msg "O campo nome é obrigatório."
      .eq(0) // And Check the corresponding alert-msg
      .should('be.visible') // And Check if the alert-msg is visible
      .and('have.text', 'O campo nome é obrigatório.'); // And Check if the alert-msg has the correct text
    cy.get('#email').clear(); // And clear the "email" field
    cy.get('.alert-msg') // Then the user should see the alert-msg "O campo e-mail é obrigatório."
      .eq(1) // And Check the corresponding alert-msg
      .should('be.visible') // And Check if the alert-msg is visible
      .and('have.text', 'O campo e-mail é obrigatório.'); // And Check if the alert-msg has the correct text
  });
  it('"Cancel" button: Should cancel the login an return to the homepage', () => {
    cy.get('a[href = "pre-cadastro"]').click(); // When the user clicks on the "Entrar" button
    cy.get('h2').should('have.text', 'Seus dados'); // Then the user should see the "Seus dados" form
    cy.get('#nome').type('Teste Qa'); // And fill out the "name" field with "Teste Qa"
    cy.get('#email').type('qateste@teste.com'); // And fill out the "email" field
    cy.get('button[type="button"]').should('have.text', 'Cancelar').click(); // And click on the "Cancelar" button
    cy.get('h1').should('have.text', 'O LendárioBarbershop'); // Then the user should return to the home page.
  });
  it('"Name" field: Should display a validation message when typed numbers', () => {
    cy.get('a[href = "pre-cadastro"]').click(); // When the user clicks on the "Entrar" button
    cy.get('h2').should('have.text', 'Seus dados'); // Then the user should see the "Seus dados" form
    cy.get('#nome').type('123456'); // And fill out the "name" field with "123456"
    cy.get('button[type="submit"]').should('have.text', 'Continuar').click(); // And click on the "Continuar" button
    cy.get('.alert-msg') // Then the user should see the alert-msg "Informe seu nome completo.";
      .eq(0) // And Check the corresponding alert-msg
      .should('be.visible') // And Check if the alert-msg is visible
      .and('have.text', 'Informe seu nome completo.'); // And Check if the alert-msg has the correct text
  });
  it('"Name" field: Should display a validation message when typed especial characters', () => {
    cy.get('a[href = "pre-cadastro"]').click(); // When the user clicks on the "Entrar" button
    cy.get('h2').should('have.text', 'Seus dados'); // Then the user should see the "Seus dados" title
    cy.get('#nome').type('%&*$#'); // And fill out the "name" field with "%&*$#"
    cy.get('button[type="submit"]').should('have.text', 'Continuar').click(); // And click on the "Continuar" button
    cy.get('.alert-msg') // Then the user should see the alert-msg "Informe seu nome completo.";
      .eq(0) // And Check the corresponding alert-msg
      .should('be.visible') // And Check if the alert-msg is visible
      .and('have.text', 'Informe seu nome completo.'); // And Check if the alert-msg has the correct text
  });
  it('"Name" field: Should display a validation message when typed only the first name', () => {
    cy.get('a[href = "pre-cadastro"]').click(); // When the user clicks on the "Entrar" button
    cy.get('h2').should('have.text', 'Seus dados'); // Then the user should see the "Seus dados" title
    cy.get('#nome').type('Teste'); // And fill out the "name" field with "Teste"
    cy.get('button[type="submit"]').should('have.text', 'Continuar').click(); // And click on the "Continuar" button
    cy.get('.alert-msg') // Then the user should see the alert-msg "Informe seu nome completo.";
      .eq(0) // And Check the corresponding alert-msg
      .should('be.visible') // And Check if the alert-msg is visible
      .and('have.text', 'Informe seu nome completo.'); // And Check if the alert-msg has the correct text
  });
  it('"E-mail" field: Should display a validation message when typed invalid data', () => {
    cy.get('a[href = "pre-cadastro"]').click(); // When the user clicks on the "Entrar" button
    cy.get('h2').should('have.text', 'Seus dados'); // Then the user should see the "Seus dados" title
    cy.get('#email').type('www.teste.com'); // And fill out the "name" field with "www.teste.com"
    cy.get('button[type="submit"]').should('have.text', 'Continuar').click(); // And click on the "Continuar" button
    cy.get('.alert-msg') // Then the user should see the alert-msg "O e-mail inserido é inválido.";
      .eq(1) // And Check the corresponding alert-msg
      .should('be.visible') // And Check if the alert-msg is visible
      .and('have.text', 'O e-mail inserido é inválido.'); // And Check if the alert-msg has the correct text
  });
});
