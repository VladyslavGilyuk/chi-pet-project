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

Cypress.Commands.add('addTicket', () => {
  cy.visit('http://localhost:3000/tickets?_page=1&_limit=8&_sort=ticket&_order=asc').wait(2000);

  cy.get('[data-testid="add_button"]').click();
  cy.get('input[placeholder="Add description"]').type('A');
  cy.get('input[placeholder="Name"]').type('Customer');

  cy.get('input[placeholder="MM/DD/YYYY hh:mm aa"]')
    .type('11/25/2023 12:00 AM')
    .get('[data-testid="custom-select"]')
    .click()
    .get('[data-testid="item_High"]')
    .click();

  cy.get('[data-testid="save_button"]').click();
});

Cypress.Commands.add('addContact', () => {
  cy.visit('http://localhost:3000/contacts?_page=1&_limit=8&_sort=firstName&_order=asc').wait(2000);

  cy.get('[data-testid="add_button"]').click();

  cy.get('input[placeholder="First Name"]').type('A');
  cy.get('input[placeholder="Last Name"]').type('LastName');
  cy.get('input[placeholder="Email"]').type('lastname@gmail.com');
  cy.get('input[placeholder="Address"]').type('The 5th Avenue, NY');

  cy.get('[data-testid="save_button"]').click();
});

Cypress.Commands.add('deleteCreatedItem', () => {
  cy.get('[data-testid="custom_select"]').first().click();
  cy.get('[data-testid="delete_button"]').click();
});
export {};
