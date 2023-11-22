/// <reference types="cypress" />

Cypress.Commands.add('login', (email, password) => {
  cy.intercept('POST', 'http://localhost:8080/login', { fixture: 'users.json' }).as('getUser');
  cy.session(
    [email, password],
    () => {
      cy.visit('http://localhost:3000');

      cy.get('[data-testid="email_input"]').find('input').type(email);
      cy.get('[data-testid="password_input"]').find('input').type(password);

      cy.get('[data-testid="logIn_button"]').click().wait('@getUser');

      cy.url().should('eq', 'http://localhost:3000/');
    },
    {
      cacheAcrossSpecs: true,
    },
  );
});
