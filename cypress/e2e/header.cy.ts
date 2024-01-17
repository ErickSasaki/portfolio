describe('header', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('header should be rendered', () => {
    cy.get('#header')
      .should('be.visible')
  });

  it('home button should navigate to introduction', () => {
    cy.get('#home-button')
      .click();

    cy.get('#introduction');
    cy.url().should('include', '/#introduction');
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