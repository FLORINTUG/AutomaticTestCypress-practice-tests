
describe("Test Application - practice on E-commerce App", () => {
  beforeEach(() => {

    cy.visit("https://www.saucedemo.com/");
  })
/// Login test with the standard user (check if you are logged in afterwards)

/// the final assertions check if we are logged in using the URL on the correct page


  it("Should be able to login with valid credentials", () => {
    
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    cy.url().should("include", "/inventory.html");
  })


/// Login test with wrong username or password (check if you get an error message)

/// The assertion at the end checks if the error message is displayed


  it("Should not login with invalid credentials", () => {

    cy.get("#user-name").type("florin_user");
    cy.get("#password").type("123f");
    cy.get("#login-button").click();
    cy.contains(
      '[data-test="error"]',
      "Epic sadface: Username and password do not match any user in this service"
    ).should("be.visible");
  })


///     Test to check if the side menu can be opened and closed


  it("Side bar menu Test toggle - Should open and close the side menu", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.url().should("include", "/inventory.html"); 
    cy.get("#react-burger-menu-btn").click();   
    cy.get(".bm-menu").should("be.visible"); // Open the burger menu - verify if it's visible
    cy.get("#react-burger-cross-btn").click(); 
    cy.get(".bm-menu").should("not.be.visible"); // Close the burger menu - verify if it's not visible
  }) 

//Logout test (you must be logged in before you can log out )



  it("Before logout need to be logged in", () => { 
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.url().should("include", "/inventory.html");           // Verify URL if login was successful
     cy.get(".shopping_cart_link").should("be.visible");       // Verify if shopping cart is visible after login  
    cy.get("#react-burger-menu-btn").click();                   // Open the burger menu 
    cy.get("#logout_sidebar_link").click();           // Click on logout 
    cy.get("#login-button").should("exist");             // Verify if login button is visible after logout
  })

})

