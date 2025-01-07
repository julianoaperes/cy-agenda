describe("Login", () => {
  beforeEach(() => {
    cy.visit("/"); // Given the user access this link
  });
  it('Should login successfully when the user fill out the form with valid credentials by clicking on the "Entrar" button', () => {
    cy.get("a[href = 'entrar']").click(); // When the user clicks on the "Entrar" button
    cy.get("h2").should("have.text", "Seus dados"); // Then the user should see the "Seus dados" title
    cy.get("input[placeholder='Nome']").type("Teste Qa"); // And fill out the "name" field with "Teste Qa"
    cy.get("input[placeholder='E-mail']").type("qateste@teste.com"); // And fill out the "email" field
    cy.get("input[placeholder='Whatsapp']").type("14345678912"); // And fill out the "password" field
    cy.get("button[type='submit']").click(); // And click on the "Continuar" button
    cy.get("h1").should("have.text", "O LendárioBarbershop"); // Then the user should see the "O LendárioBarbershop" title
  });
  it('Should login successfully when the user fill out the form with valid credentials by clicking on the "Agendar um horário" button', () => {
    cy.get("a[href = '/agendamento']").click(); // When the user clicks on the "Entrar" button
    cy.get("h2").should("have.text", "Seus dados"); // Then the user should see the "Seus dados" title
    cy.get("input[placeholder='Nome']").type("Teste Qa"); // And fill out the "name" field with "Teste Qa"
    cy.get("input[placeholder='E-mail']").type("qateste@teste.com"); // And fill out the "email" field
    cy.get("input[placeholder='Whatsapp']").type("14345678912"); // And fill out the "password" field
    cy.get("button[type='submit']").click(); // And click on the "Continuar" button
    cy.get("h1").should("have.text", "Agendamento de Serviços"); // Then the user should see the "Agendamento de Serviços" title
  });
  it('"Seus dados" form: Should displays validation messages when the fields were not filled out', () => {
    cy.get("a[href = 'entrar']").click(); // When the user clicks on the "Entrar" button
    cy.get("h2").should("have.text", "Seus dados"); // Then the user should see the "Seus dados" title
    cy.get("button[type='submit']").click(); // And click on the "Continuar" button
    cy.assertValidationMessage("input[placeholder='Nome']", "Mandatory field");
    cy.assertValidationMessage(
      "input[placeholder='E-mail']",
      "Mandatory field"
    );
    cy.assertValidationMessage(
      "input[placeholder='Whatsapp']",
      "Mandatory field"
    );
  });
  it('"Cancel" button: Should cancel the login an return to the homepage', () => {
    cy.get("a[href = 'entrar']").click(); // When the user clicks on the "Entrar" button
    cy.get("h2").should("have.text", "Seus dados"); // Then the user should see the "Seus dados" title
    cy.get("input[placeholder='Nome']").type("Teste Qa"); // And fill out the "name" field with "Teste Qa"
    cy.get("input[placeholder='E-mail']").type("qateste@teste.com"); // And fill out the "email" field
    cy.get("input[placeholder='Whatsapp']").type("14345678912"); // And fill out the "password" field
    cy.get("button[type='button']").click(); // And click on the "Cancelar" button
    cy.get("h1").should("have.text", "O LendárioBarbershop"); // Then the user should see the "O LendárioBarbershop" title
  });
  it('"Name" field: Should display a validation message when typed numbers', () => {
    cy.get("a[href = 'entrar']").click(); // When the user clicks on the "Entrar" button
    cy.get("h2").should("have.text", "Seus dados"); // Then the user should see the "Seus dados" title
    cy.get("input[placeholder='Nome']").type("123456"); // And fill out the "name" field with "Teste Qa"
    cy.get("button[type='submit']").click(); // And click on the "Continuar" button
    cy.assertValidationMessage(
      "input[placeholder='Nome']",
      "Invalid field. Accept only letters"
    );
  });
  it('"Name" field: Should display a validation message when typed especial characters', () => {
    cy.get("a[href = 'entrar']").click(); // When the user clicks on the "Entrar" button
    cy.get("h2").should("have.text", "Seus dados"); // Then the user should see the "Seus dados" title
    cy.get("input[placeholder='Nome']").type("$¨&$*&"); // And fill out the "name" field with "Teste Qa"
    cy.get("button[type='submit']").click(); // And click on the "Continuar" button
    cy.assertValidationMessage(
      "input[placeholder='Nome']",
      "Invalid field. Accept only letters"
    );
  });
  it('"Name" field: Should display a validation message when typed only the first name', () => {
    cy.get("a[href = 'entrar']").click(); // When the user clicks on the "Entrar" button
    cy.get("h2").should("have.text", "Seus dados"); // Then the user should see the "Seus dados" title
    cy.get("input[placeholder='Nome']").type("$¨&$*&"); // And fill out the "name" field with "Teste Qa"
    cy.get("button[type='submit']").click(); // And click on the "Continuar" button
    cy.assertValidationMessage(
      "input[placeholder='Nome']",
      "Invalid field. Must be the full name"
    );
  });
  it('"E-mail" field: Should display a validation message when typed invalid data', () => {
    cy.get("a[href = 'entrar']").click(); // When the user clicks on the "Entrar" button
    cy.get("h2").should("have.text", "Seus dados"); // Then the user should see the "Seus dados" title
    cy.get("input[placeholder='E-mail']").type("www.teste.com"); // And fill out the "email" field with "www.teste.com"
    cy.get("button[type='submit']").click(); // And click on the "Continuar" button
    cy.assertValidationMessage(
      "input[placeholder='E-mail']",
      "Invalid field. Must be the full name"
    );
  });
  it('"Whatsapp" field: Should display a validation message when typed invalid data', () => {
    cy.get("a[href = 'entrar']").click(); // When the user clicks on the "Entrar" button
    cy.get("h2").should("have.text", "Seus dados"); // Then the user should see the "Seus dados" title
    cy.get("input[placeholder='Whatsapp']").type("abcd%¨**(&%%"); // And fill out the "email" field with "abcd%¨**(&%%"
    cy.get("button[type='submit']").click(); // And click on the "Continuar" button
    cy.assertValidationMessage(
      "input[placeholder='Whatsapp']",
      "Invalid field. Must be the full name"
    );
  });
});
