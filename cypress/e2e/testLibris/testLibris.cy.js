describe('siteLibris',() => {
    it('LibrisSearch',() => {
        cy.visit('https://www.libris.ro'); //go to visite site
        cy.get('.consent-mode-modal-btn-accept-ct').click(); // accept cookies
        cy.wait(20000); // wait for 20 seconds for close newsletter popup
        cy.get('.modal-content > .close').click(); // close newsletter popup
        cy.get('#autoComplete').type('Dan Brown{enter}');  
        cy.get('.ordoneaza-section-left').should('contain.text', 'Dan Brown'); // verify if the text is correct
    })
    
});
