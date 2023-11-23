describe('Tickets page', () => {
  beforeEach(() => {
    cy.login('useremail@gmail.com', 'userPasswordA1');
  });
  it('Should render main Tickets sections', () => {
    cy.visit('http://localhost:3000/tickets');

    cy.get('[data-testid="sort_select"]').should('exist');
    cy.get('[data-testid="sort_filter"]').should('exist');
    cy.get('[data-testid="add_button"]').should('exist');
    cy.get('[data-testid="custom_select"]').should('exist');
  });
  it('Should check Sort functionality', () => {
    cy.visit('http://localhost:3000/tickets');

    cy.get('[data-testid="sort_select"]').click();

    cy.get('[data-testid="item_ticket-asc"]').click();

    cy.url()
      .should('eq', 'http://localhost:3000/tickets?_page=1&_limit=8&_sort=ticket&_order=asc')
      .wait(1000);

    cy.get('[data-testid="sort_select"]').click();
    cy.get('[data-testid="item_ticket-desc"]').click();

    cy.url().should(
      'eq',
      'http://localhost:3000/tickets?_page=1&_limit=8&_sort=ticket&_order=desc',
    );
  });
  it('Should check Filter functionality', () => {
    cy.visit('http://localhost:3000/tickets');

    cy.get('[data-testid="sort_filter"]').click().get('[data-testid="item_High"]').click();

    cy.url()
      .should('eq', 'http://localhost:3000/tickets?_page=1&_limit=8&priority=High')
      .wait(1000);

    cy.get('[data-testid="sort_filter"]').click().get('[data-testid="item_Low"]').click();

    cy.url()
      .should('eq', 'http://localhost:3000/tickets?_page=1&_limit=8&priority=High&priority=Low')
      .wait(1000);

    cy.get('[data-testid="sort_filter"]').click().get('[data-testid="item_High"]').click();

    cy.url().should('eq', 'http://localhost:3000/tickets?_page=1&_limit=8&priority=Low').wait(1000);

    cy.get('[data-testid="sort_filter"]').click().get('[data-testid="item_Low"]').click();
    cy.url().should('eq', 'http://localhost:3000/tickets?_page=1&_limit=8');
  });
  it('Should add new Ticket with correct values', () => {
    cy.addTicket();
    cy.get('[data-testid="heading_A"]').should('exist');
    cy.get('[data-testid="heading_Customer"]').should('exist');
    cy.get('[data-testid="heading_November 25, 2023"]').should('exist');
    cy.get('[data-testid="tag"]').first().should('exist').should('have.text', 'High');
    cy.deleteTicket().wait(1000);
  });
  it('Should edit a Ticket', () => {
    cy.addTicket().wait(1000);
    cy.get('[data-testid="custom_select"]').first().click();
    cy.get('[data-testid="edit_button"]').click();

    cy.get('input[placeholder="Name"]').clear().type('EditCustomer');
    cy.get('[data-testid="save_button"]').click().wait(2000);

    cy.get('[data-testid="heading_EditCustomer"]').should('exist');

    cy.deleteTicket().wait(1000);
  });
  it('Should change pagination size', () => {
    cy.visit('http://localhost:3000/tickets');
    cy.get('[aria-labelledby=":r5: :r4:"]').click();
    cy.get('.MuiPopover-root li').contains('10').click();

    cy.url().should('eq', 'http://localhost:3000/tickets?_page=1&_limit=10');
  });
  it('Should move to next page and previous pages', () => {
    cy.visit('http://localhost:3000/tickets');

    cy.get('[aria-label="Go to next page"]').click();
    cy.url().should('eq', 'http://localhost:3000/tickets?_page=2&_limit=8').wait(1000);

    cy.get('[aria-label="Go to previous page"]').click();
    cy.url().should('eq', 'http://localhost:3000/tickets?_page=1&_limit=8');
  });
  it('Should return Not Found image if no tickets found', () => {
    cy.intercept('GET', 'http://localhost:8080/tickets?_page=1&_limit=8', {}).as('getTickets');
    cy.visit('http://localhost:3000/tickets').wait('@getTickets');
    cy.get('[data-testid="not_found_image"]').should('exist');
  });
});
