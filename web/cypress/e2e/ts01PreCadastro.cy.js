import { customDescribeNumbered } from '../support/commands.mjs';
import preCadastroPage from '../support/pages/pre-cadastro.page';
customDescribeNumbered('Validation of "Pré-cadastro" scenarios', (it) => {
  beforeEach(() => {
    cy.visit('/'); // Given the user accesses this link
    // Then it should open the page to pré-cadastro
  }),
    it("Should do the pré-cadastro successfully when the user fills out the form with valid credentials by clicking on the 'Entrar' button", () => {
      preCadastroPage.goPreCadastroComeçar(); // Then the user should see the "Seus dados" form
      preCadastroPage.fillForm('Test Qa', 'teste@teste.com'); // And fill out the "name" and "email" fields
      preCadastroPage.submitForm(); // And click on the "Continuar" button
      cy.get('h1').should('have.text', 'O LendárioBarbershop'); // Then the user should be driven to the home page and see the "O LendárioBarbershop" title
    });

  it("Should pré-cadastro successfully when the user fills out the form with valid credentials by clicking on the 'Agendar um horário' button", () => {
    preCadastroPage.goPreCadastroAgendar(); // Then the user should see the "Seus dados" form
    preCadastroPage.fillForm('Test Qa', 'teste@teste.com'); // And fill out the "name" and "email" fields
    preCadastroPage.submitForm(); // And click on the "Continuar" button
    cy.get('h1').should('have.text', 'Agendamento de Serviços'); // Then the user should see the "Agendamento de Serviços" title
  });

  it('The fields: Should displays validation messages after submit, when the fields were empty', () => {
    preCadastroPage.goPreCadastroComeçar(); // Then the user should see the "Seus dados" form
    preCadastroPage.clearFields(); // And clear the fields
    preCadastroPage.submitForm(); // And click on the "Continuar" button
    preCadastroPage.NameEmailAlertMsg(
      'Nome Completo',
      'O campo nome é obrigatório.'
    ); // Then the user should see the alert-msg "O campo nome é obrigatório."
    preCadastroPage.NameEmailAlertMsg(
      'E-mail',
      'O campo e-mail é obrigatório.'
    ); // And the alert-msg "O campo e-mail é obrigatório."
  });
  it('"Cancel" button: Should cancel the pré-cadastro an return to the homepage', () => {
    preCadastroPage.goPreCadastroComeçar(); // Then the user should see the "Seus dados" form
    preCadastroPage.fillForm('Test Qa', 'teste@teste.com'); // And fill out the "name" and "email" fields
    preCadastroPage.cancelSubmit(); // And click on the "Cancelar" button
    // Then the user should return to the home page.
  });
  it('"Name" field: Should accept only letters', () => {
    preCadastroPage.goPreCadastroComeçar(); // Then the user should see the "Seus dados" form
    preCadastroPage.fillForm('123456 34524', 'test@qa.com'); // And fill out the "name" with numbers  and "email" properly.
    preCadastroPage.submitForm(); // And click on the "Continuar" button
    preCadastroPage.NameEmailAlertMsg('Nome Completo', 'Insira apenas letras.'); // Then the user should see the alert-msg "Insira apenas letras."
    preCadastroPage.fillForm('@#$ &*%', 'test@qa.com'); // And fill out the "name" with especial characters  and "email" properly.
    preCadastroPage.submitForm(); // And click on the "Continuar" button
    preCadastroPage.NameEmailAlertMsg('Nome Completo', 'Insira apenas letras.'); // Then the user should see the alert-msg "Insira apenas letras."
  });
  it('"Name" field: Should display a validation message when typed only the first name', () => {
    preCadastroPage.goPreCadastroComeçar(); // Then the user should see the "Seus dados" form
    preCadastroPage.fillForm('Test', 'teste@teste.com'); // And fill out the "name" with only the first name and "email" properly.
    preCadastroPage.submitForm(); // And click on the "Continuar" button
    preCadastroPage.NameEmailAlertMsg(
      'Nome Completo',
      'Informe seu nome completo.'
    ); // Then the user should see the alert-msg "Informe seu nome completo."
  });
  it('"E-mail" field: Should display a validation message when typed invalid data', () => {
    preCadastroPage.goPreCadastroComeçar(); // Then the user should see the "Seus dados" form
    preCadastroPage.fillForm('Test QA', 'www.testeteste.com'); // And fill out the "name" and "email" with invalid data
    preCadastroPage.submitForm(); // And click on the "Continuar" button
    preCadastroPage.NameEmailAlertMsg(
      'E-mail',
      'O e-mail inserido é inválido.'
    ); // Then the user should see the alert-msg "O e-mail inserido é inválido."
  });
});
