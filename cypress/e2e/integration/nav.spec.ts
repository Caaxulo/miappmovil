describe('Navigation Tests', () => {
    it('should navigate to the about page', () => {
        cy.visit('http://localhost:8100');

        cy.get ('ion-button').contains('Iniciar sesión').click();
    });

});