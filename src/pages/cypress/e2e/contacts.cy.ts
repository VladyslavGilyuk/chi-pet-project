describe('Contacts page', () => {
  beforeEach(() => {
    cy.login('useremail@gmail.com', 'userPasswordA1');
  });
  it('Should render main Contacts sections', () => {
    cy.visit('http://localhost:3000/contacts');

    cy.get('[data-testid="sort_select"]').should('exist');
    cy.get('[data-testid="sort_filter"]').should('not.exist');
    cy.get('[data-testid="add_button"]').should('exist');
    cy.get('[data-testid="custom_select"]').should('exist');
  });
  it('Should add new Contact with correct values', () => {
    cy.addContact();
    cy.get('[data-testid="heading_A LastName"]').should('exist');
    cy.get('[data-testid="heading_lastname@gmail.com"]').should('exist');
    cy.get('[data-testid="address_The 5th Avenue, NY"]').should('exist');
    cy.deleteCreatedItem().wait(1000);
    cy.get('[data-testid="heading_A LastName"]').should('not.exist');
  });
  it('Should edit a Contact', () => {
    cy.addContact().wait(1000);
    cy.get('[data-testid="custom_select"]').first().click();
    cy.get('[data-testid="edit_button"]').click();

    cy.get('input[placeholder="Email"]').clear().type('editedlastname@gmail.com');
    cy.get('[data-testid="save_button"]').click().wait(2000);

    cy.get('[data-testid="heading_editedlastname@gmail.com"]').should('exist');

    cy.deleteCreatedItem().wait(1000);
    cy.get('[data-testid="heading_A LastName"]').should('not.exist');
  });
  it('Should check Sort functionality', () => {
    cy.addContact();

    cy.get('[data-testid="sort_select"]').click();

    cy.get('[data-testid="item_firstName-desc"]').click();

    cy.url()
      .should('eq', 'http://localhost:3000/contacts?_page=1&_limit=8&_sort=firstName&_order=desc')
      .wait(1000);
    cy.get('[data-testid="heading_A LastName"]').should('not.exist');
    cy.get('[data-testid="sort_select"]').click();
    cy.get('[data-testid="item_firstName-asc"]').click();

    cy.url().should(
      'eq',
      'http://localhost:3000/contacts?_page=1&_limit=8&_sort=firstName&_order=asc',
    );
    cy.get('[data-testid="heading_A LastName"]').should('exist');

    cy.deleteCreatedItem().wait(1000);
    cy.get('[data-testid="heading_A LastName"]').should('not.exist');
  });
  it('Should change pagination size', () => {
    cy.visit('http://localhost:3000/contacts');

    cy.get('.MuiTablePagination-select').click();
    cy.get('.MuiPopover-root li').contains('10').click();

    cy.url().should('eq', 'http://localhost:3000/contacts?_page=1&_limit=10');
  });
  it('Should move to next page and previous pages', () => {
    cy.visit('http://localhost:3000/contacts');

    cy.get('[aria-label="Go to next page"]').click();
    cy.url().should('eq', 'http://localhost:3000/contacts?_page=2&_limit=8').wait(1000);

    cy.get('[aria-label="Go to previous page"]').click();
    cy.url().should('eq', 'http://localhost:3000/contacts?_page=1&_limit=8');
  });
  it('Should return Not Found image if no contacts found', () => {
    cy.intercept('GET', 'http://localhost:8080/contacts?_page=1&_limit=8', {}).as('getContacts');
    cy.visit('http://localhost:3000/contacts').wait('@getContacts');
    cy.get('[data-testid="not_found_image"]').should('exist');
  });
});
export {};
