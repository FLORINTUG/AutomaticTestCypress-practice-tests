 describe ('testFtugui',() => {  /// a test suite or a group of tests
    //test 1
    it('goToFtugui',() =>{   /// can be multiple tests in a suite
        cy.visit('https://www.ftugui.com');
        // cy.get('#L2AGLb').click(); //accepte cookies
        cy.wait(10000)
       cy.screenshot(); //take screenshot
    })
    //test 2 
   
 })