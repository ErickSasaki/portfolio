describe('header', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad(window) {
        Object.defineProperty(window.navigator, 'language', {
          value: 'en',
        });
      }
    });
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

  it('translate button should translate to specific language', () => {
    cy.contains('Hi, I\'m');

    cy.get('#dropdown-wrapper')
      .click();

    cy.contains('portuguese')
      .click();

    cy.contains('Olá, sou');

    cy.get('#dropdown-wrapper')
      .click();

    cy.contains('inglês')
      .click();

    cy.contains('Hi, I\'m');
  });
})