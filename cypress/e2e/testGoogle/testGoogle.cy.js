describe('siteGoogle',() => {
    it('GoogleSearch',() => {
        cy.visit('https://www.google.com');
        cy.get('#L2AGLb').click(); //accept cookies
        cy.wait(5000)
        const textToType = cy.get('#APjFqb'); //Conversion to a constant
        textToType.type('has passed 5seconds');
        textToType.should('have.value', 'has passed 5seconds'); //assertion
        cy.screenshot(); //take a screenshot
    })
});



//  describe ('testCuGoogle',() => {  /// o suita de teste sau un grup de teste
//     //testul 1
//     it('GoogleSearch',() =>{   /// un test sau putem avea mai multe teste intr-o suita 
//         cy.visit('https://www.ftugui.com');
//         // cy.get('#L2AGLb').click(); //acceptam cookies
//         cy.wait(10000)
//        cy.screenshot(); //facem un screenshot
//     })
//     //testul 2 este la fel si tot asa 
   
//  })