describe('introduction', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('image and introduction should be rendered', () => {
        cy.get('#introduction')
            .should('be.visible');
        cy.get('.avatar')
            .should('be.visible');
    });

    it('clicking in github icon should open my github in another tab', () => {
        cy.get('#github-icon')
            .parent()
            .should('have.attr', 'target', 'blank')
            .should('have.attr', 'href', 'https://github.com/ErickSasaki')
    });

    it('clicking in linkedin icon should open my linkedin in another tab', () => {
        cy.get('#linkedin-icon')
            .parent()
            .should('have.attr', 'target', 'blank')
            .should('have.attr', 'href', 'https://www.linkedin.com/in/erick-batista-da-silva-developer/')
    });
})