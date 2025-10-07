describe('siteLinkedin',() => {
    it('testLinkedin',() => {
        cy.visit('https://www.linkedin.com');
        cy.get('.nav__button-secondary').click();
 })
})