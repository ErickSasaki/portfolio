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

        cy.get('.language-dropdown')
            .click();

        cy.contains('portuguese')
            .click();

        cy.contains('Olá, sou');

        cy.get('.language-dropdown')
            .click();

        cy.contains('inglês')
            .click();

        cy.contains('Hi, I\'m');
    });

    it('should render navigation on big screens and not show mobile menu', () => {
        cy.get('.nav-content')
            .should('be.visible');

        cy.get('.mobile-menu')
            .should('not.be.visible');
    });

    it('introduction link should navigate to introduction', () => {
        cy.contains('Introduction')
            .click();

        cy.get('#introduction');
        cy.url().should('include', '/#introduction');
    });

    it('skills link should navigate to skills', () => {
        cy.contains('Skills')
            .click();

        cy.get('#skills');
        cy.url().should('include', '/#skills');
    });

    context('Small Screens', () => {
        beforeEach(() => {
            cy.viewport('iphone-6');
        });

        it('should hide navigation on small screens and show mobile menu', () => {
            cy.viewport('iphone-6+');
    
            cy.get('.nav-content')
                .should('not.be.visible');
    
            cy.get('.mobile-menu')
                .should('be.visible');
        });
    
        it('mobile introduction link should navigate to introduction', () => {
            cy.viewport('iphone-6+');
    
            cy.get('.mobile-menu')
                .click();
    
            cy.get('.dropdown-options')
                .contains('Introduction')
                .click();
    
            cy.get('#introduction');
            cy.url().should('include', '/#introduction');
        });
    
        it('mobile skills link should navigate to skills', () => {
            cy.viewport('iphone-6+');
    
            cy.get('.mobile-menu')
                .click();
    
            cy.get('.dropdown-options')
                .contains('Skills')
                .click();
    
            cy.get('#skills');
            cy.url().should('include', '/#skills');
        });
    });
});
