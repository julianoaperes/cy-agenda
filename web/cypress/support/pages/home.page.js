class homePage {
  goPreCadastroComeçar() {
    cy.visit('/'); // Given the user accesses this link
    // Then it should open the page to pré-cadastro
    cy.get('a[href = "pre-cadastro"]').click(); // When the user clicks on the "Começar" button
  }
  goPreCadastroAgendar() {
    cy.visit('/'); // Given the user accesses this link
    // Then it should open the page to pré-cadastro
    cy.get('a[href = "/agendamento"]').click(); // When the user clicks on the "Agendar" button
  }
}
export default new homePage();
