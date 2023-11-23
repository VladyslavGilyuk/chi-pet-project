describe('SignIn form', () => {
  it('Should correctly render form', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="signIn_form"]').should('exist');
    cy.get('[data-testid="logIn_button"]').should('exist');
    cy.get('[data-testid="signUp_button"]').should('exist');
    cy.get('label').contains('Email').should('exist');
    cy.get('label').contains('Password').should('exist');
    cy.get('[data-testid="email_input"]').should('exist');
    cy.get('[data-testid="password_input"]').should('exist');
    cy.get('[data-testid="email_input"]')
      .find('input')
      .should('have.attr', 'placeholder', 'Email address');
    cy.get('[data-testid="password_input"]')
      .find('input')
      .should('have.attr', 'placeholder', 'Password');
  });
  it('Should change text in inputs', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="email_input"]').find('input').should('have.value', '');
    cy.get('[data-testid="password_input"]').find('input').should('have.value', '');

    cy.get('[data-testid="email_input"]').find('input').type('useremail@gmail.com');
    cy.get('[data-testid="email_input"]').find('input').should('have.value', 'useremail@gmail.com');

    cy.get('[data-testid="password_input"]').find('input').type('111111');
    cy.get('[data-testid="password_input"]').find('input').should('have.value', '111111');
  });
  it('Should navigate to SignUp page when Sign Up button is clicked', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="signUp_button"]').click();

    cy.url().should('eq', 'http://localhost:3000/SignUp');
  });
  it('Should show hidden text in password', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="password_input"]').find('input').should('have.attr', 'type', 'password');

    cy.get('[data-testid="adornment_button"]').click();

    cy.get('[data-testid="password_input"]').find('input').should('have.attr', 'type', 'text');
  });
  it('Should show error for unregistered user', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="email_input"]').find('input').type('unregisteredUser@gmail.com');
    cy.get('[data-testid="password_input"]').find('input').type('111111');

    cy.get('[data-testid="logIn_button"]').click();
    cy.get('.Toastify__toast-body').should('contain', 'Invalid email or password');
  });
  it('Should sign in registered user', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="email_input"]').find('input').type('useremail@gmail.com');

    cy.get('[data-testid="password_input"]').find('input').type('useremail@gmail.comA1');

    cy.get('[data-testid="logIn_button"]').click();

    cy.url().should('eq', 'http://localhost:3000/');
  });
});
