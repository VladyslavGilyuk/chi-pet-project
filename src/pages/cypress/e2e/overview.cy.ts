describe('Overview page', () => {
  beforeEach(() => {
    cy.login('useremail@gmail.com', 'userPasswordA1');
  });
  it('Should render all main Overview sections', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="infoCards"]').should('exist');
    cy.get('[data-testid="chart"]').should('exist');
    cy.get('[data-testid="side_data"]').should('exist');
    cy.get('[data-testid="tasksInfoBox"]').should('exist');
    cy.get('[data-testid="unresolvedTicketsBox"]').should('exist');
  });
  it('Should have the correct colors for linear gradients', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="colorToday"]').should('exist');
    cy.get('[data-testid="colorToday"] stop[offset="5%"]').should(
      'have.attr',
      'stop-color',
      '#3751FF',
    );
    cy.get('[data-testid="colorToday"] stop[offset="95%"]').should(
      'have.attr',
      'stop-color',
      '#3751FF',
    );

    cy.get('[data-testid="colorYesterday"]').should('exist');
    cy.get('[data-testid="colorYesterday"] stop[offset="5%"]').should(
      'have.attr',
      'stop-color',
      '#C5C7CD',
    );
    cy.get('[data-testid="colorYesterday"] stop[offset="95%"]').should(
      'have.attr',
      'stop-color',
      '#C5C7CD',
    );
  });
  it('Should show Tooltip on hover', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="chart"]').trigger('mouseover');

    cy.get('.recharts-tooltip-wrapper').should('be.visible');
  });
  it('Should open and close Unresolved Tickets Modal', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="unresolved_tickets_modal"]').should('not.exist');
    cy.get('[data-testid="heading-button"]').click();
    cy.get('[data-testid="unresolved_tickets_modal"]').should('exist');
    cy.get('[data-testid="close_unresolved_tickets_modal"]').click();
    cy.get('[data-testid="unresolved_tickets_modal"]').should('not.exist');
  });
  it('Should open and close Tasks Modal', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="tasks_modal"]').should('not.exist');
    cy.get('[data-testid="open_tasks_modal"]').click();
    cy.get('[data-testid="tasks_modal"]').should('exist');
    cy.get('[data-testid="close_tasks_modal"]').click();
    cy.get('[data-testid="tasks_modal"]').should('not.exist');
  });
  it('Should add a new task', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="add_task_button"]').click();

    cy.get('[data-testid="tasks_input"]').find('input').type('Test task');
    cy.get('[data-testid="custom-select"]').click();
    cy.get('[data-testid="item_New"]').click();

    cy.get('[data-testid="create_task_button"]').click();
    cy.get('[data-testid="close_task_button"]').click();

    cy.get('[data-testid="label"]').first().should('have.text', 'Test task');
    cy.get('[data-testid="tag"]').first().should('have.text', 'New');
    cy.get('input[type="checkbox"]').first().should('not.be.checked');
  });
  it('Should check and uncheck the chexbox', () => {
    cy.visit('http://localhost:3000');
    cy.get('input[type="checkbox"]').first().should('not.be.checked');

    cy.get('input[type="checkbox"]').first().click();
    cy.get('input[type="checkbox"]').first().should('be.checked');

    cy.get('input[type="checkbox"]').first().click();
    cy.get('input[type="checkbox"]').first().should('not.be.checked');
  });
  it('Should open Tasks Modal and check and uncheck the chexbox', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="open_tasks_modal"]').click();

    cy.get('[data-testid="tasks_modal"] input[type="checkbox"]').first().click();
    cy.get('[data-testid="tasks_modal"] input[type="checkbox"]').first().should('be.checked');

    cy.get('[data-testid="tasks_modal"] input[type="checkbox"]').first().click();
    cy.get('[data-testid="tasks_modal"] input[type="checkbox"]').first().should('not.be.checked');
  });
});
export {};
