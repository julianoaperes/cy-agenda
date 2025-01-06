describe("Login", () => {
  it('It should login successfully when the user fill out the form with valid credentials by clicking on the "Entrar" button', () => {
    cy.visit("/"); // Given the user access this link
    cy.get("a[href = 'entrar']").click(); // When the user clicks on the "Entrar" button
    cy.get("h2").should("have.text", "Seus dados"); // Then the user should see the "Seus dados" title
    cy.get("input[placeholder='Nome']").type("Teste Qa"); // And fill out the "name" field with "Teste Qa"
    cy.get("input[placeholder='E-mail']").type("qateste@teste.com"); // And fill out the "email" field
    cy.get("input[placeholder='Whatsapp']").type("14345678912"); // And fill out the "password" field
    cy.get("button[type='submit']").click(); // And click on the "Continuar" button
    cy.get("h1").should("have.text", "O LendárioBarbershop"); // Then the user should see the "O LendárioBarbershop" title
  });
  it('It should login successfully when the user fill out the form with valid credentials by clicking on the "Agendar um horário" button', () => {
    cy.visit("/"); // Given the user access this link
    cy.get("a[href = '/agendamento']").click(); // When the user clicks on the "Entrar" button
    cy.get("h2").should("have.text", "Seus dados"); // Then the user should see the "Seus dados" title
    cy.get("input[placeholder='Nome']").type("Teste Qa"); // And fill out the "name" field with "Teste Qa"
    cy.get("input[placeholder='E-mail']").type("qateste@teste.com"); // And fill out the "email" field
    cy.get("input[placeholder='Whatsapp']").type("14345678912"); // And fill out the "password" field
    cy.get("button[type='submit']").click(); // And click on the "Continuar" button
    cy.get("h1").should("have.text", "Agendamento de Serviços"); // Then the user should see the "Agendamento de Serviços" title
  });
});
