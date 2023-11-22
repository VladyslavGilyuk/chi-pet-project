describe('SignUp form', () => {
  it('Should correctly render form', () => {
    cy.visit('http://localhost:3000/SignUp');
    cy.get('[data-testid="signUp_form"]').should('exist');
    cy.get('[data-testid="register_button"]').should('exist');
    cy.get('label').contains('Confirm Password').should('exist');
    cy.get('[data-testid="passwordConfirmation_input"]').should('exist');
    cy.get('[data-testid="passwordConfirmation_input"]')
      .find('input')
      .should('have.attr', 'placeholder', 'Password');
  });
  it('Should change text in inputs', () => {
    cy.visit('http://localhost:3000/SignUp');

    cy.get('[data-testid="email_input"]').find('input').should('have.value', '');
    cy.get('[data-testid="password_input"]').find('input').should('have.value', '');

    cy.get('[data-testid="email_input"]').find('input').type('useremail@gmail.com');
    cy.get('[data-testid="email_input"]').find('input').should('have.value', 'useremail@gmail.com');

    cy.get('[data-testid="password_input"]').find('input').type('111111');
    cy.get('[data-testid="password_input"]').find('input').should('have.value', '111111');
  });
  it('Should show error if user is already registered', () => {
    cy.visit('http://localhost:3000/SignUp');

    cy.get('[data-testid="email_input"]').find('input').type('useremail@gmail.com');
    cy.get('[data-testid="firstName_input"]').find('input').type('userName');
    cy.get('[data-testid="lastName_input"]').find('input').type('userLastName');
    cy.get('[data-testid="password_input"]').find('input').type('useremail@gmail.comA1');
    cy.get('[data-testid="passwordConfirmation_input"]')
      .find('input')
      .type('useremail@gmail.comA1');

    cy.get('[data-testid="register_button"]').click();

    cy.get('.Toastify__toast-body').should('contain', 'Sign up error');
  });
  it('Should register new user and navigate to Overview page when all fields are correctly completed', () => {
    cy.intercept('POST', 'http://localhost:8080/register', { fixture: 'users.json' }).as('getUser');
    cy.visit('http://localhost:3000/SignUp');

    cy.get('[data-testid="email_input"]').find('input').type('useremail2@gmail.com');
    cy.get('[data-testid="firstName_input"]').find('input').type('userName2');
    cy.get('[data-testid="lastName_input"]').find('input').type('userLastName2');
    cy.get('[data-testid="password_input"]').find('input').type('useremail2@gmail.comA1');
    cy.get('[data-testid="passwordConfirmation_input"]')
      .find('input')
      .type('useremail2@gmail.comA1');

    cy.get('[data-testid="register_button"]').click().wait('@getUser');

    cy.url().should('eq', 'http://localhost:3000/');
  });
});
