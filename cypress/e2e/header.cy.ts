describe('header', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('header should be rendered', () => {
    cy.get('#header');
  });

  it('home button should scroll to the top of page', () => {
    cy.scrollTo('bottom')
      .window()
      .its('scrollY')
      .should('not.equal', 0);

    cy.get('#home-button')
      .click()
      .window()
      .its('scrollY')
      .should('equal', 0);
  });

  it('theme button should toggle themes', () => {
    cy.get('.theme-toggle')
      .click();

    cy.get('body')
      .should('have.attr', 'theme', 'light')

    cy.get('.theme-toggle')
      .click();

    cy.get('body')
      .should('have.attr', 'theme', 'dark')
  });
})