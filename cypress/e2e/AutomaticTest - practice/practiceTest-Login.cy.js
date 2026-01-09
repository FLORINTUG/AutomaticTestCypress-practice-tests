describe("Only Positiv scenarios - Test Application - practice on E-commerce App", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
  });
  /// Login test with the standard user (check if you are logged in afterwards)

  /// the final assertions check if we are logged in using the URL on the correct page

  it("Should be able to login with valid credentials", () => {
    cy.url().should("include", "/inventory.html"); // Verify URL if login was successful
  });


  ///     Test to check if the side menu can be opened and closed

  it("Side bar menu Test toggle - Should open and close the side menu", () => {
    cy.get("#react-burger-menu-btn").click();
    cy.get(".bm-menu").should("be.visible"); // Open the burger menu - verify if it's visible
    cy.get("#react-burger-cross-btn").click();
    cy.get(".bm-menu").should("not.be.visible"); // Close the burger menu - verify if it's not visible
  });

  //Logout test (you must be logged in before you can log out )
  /// The final assertion checks if the login button is visible again after logging out

  it("Before logout need to be logged in", () => {
    cy.url().should("include", "/inventory.html"); // Verify URL if login was successful
    cy.get(".shopping_cart_link").should("be.visible"); // Verify if shopping cart is visible after login
    cy.get("#react-burger-menu-btn").click(); // Open the burger menu
    cy.get("#logout_sidebar_link").click(); // Click on logout
    cy.get("#login-button").should("exist"); // Verify if login button is visible after logout
  });

  // Test to add an item to the cart and check if it is added successfully

  it("Test cart - add and check items in the cart", () => {
    cy.url().should("include", "/inventory.html"); // Verify URL if login was successful
    cy.get("[data-test=inventory-item-name]").contains("Sauce Labs Backpack"); // Click on the item
    cy.get("#add-to-cart-sauce-labs-backpack").click(); // Click on the icon add to cart
    cy.get(".shopping_cart_link").click(); // Click on the cart icon and cehck if the item is in the cart
    cy.url().should("include", "/cart.html"); //Go tot  Verify if we are in the cart page (URL) and the item is there
  });

  // Test to remove an item from the cart and check if it is removed successfully

  it("Remove item from the cart and check if it is removed", () => {
    cy.url().should("include", "/inventory.html"); // Verify URL if login was successful
    cy.get("[data-test=inventory-item-name]").contains(
      "Sauce Labs Fleece Jacket"
    ); // Click on the item
    cy.get("#add-to-cart-sauce-labs-fleece-jacket").click(); // Click on the icon add to cart
    cy.get(".shopping_cart_link").click(); // Click on the cart icon and cehck if the item is in the cart
    cy.get("#remove-sauce-labs-fleece-jacket").click(); // Remove item from the cart
    cy.get("cart_item").should("not.exist"); // Verify if the item is removed from the cart with success
    cy.get(".shopping_cart_badge").should("not.exist"); // Verify if the cart badge is not visible anymore for double check
  });

  // Test to check if you can return to main Products page from a product details page

  it("Should be able to return to main page from Products page", () => {
    cy.get("[data-test=inventory-item-name]")
      .contains("Sauce Labs Bike Light")
      .click();
    cy.get("#back-to-products").click();
    cy.get("#inventory_container").should("be.exist");
  });

  // Test to check if you can order a product
  //(add a product to the cart and then follow all the checkout steps until placing the order)

  it("should be able to order a product successfully", () => {
    cy.url().should("include", "/inventory.html"); // Verify URL if login was successful
    cy.get("[data-test=inventory-item-name]").contains("Sauce Labs Backpack"); // Click on the item
    cy.get("#add-to-cart-sauce-labs-backpack").click(); // Click on the icon add to cart
    cy.get(".shopping_cart_link").click(); // Click on the cart icon and cehck if the item is in the cart
    cy.url().should("include", "/cart.html"); //Go tot  Verify if we are in the cart page (URL) and the item is there
    cy.get("#checkout").click();
    cy.url().should("include", "/checkout-step-one.html"); // first step to checkout
    cy.get("#first-name").type("John");
    cy.get("#last-name").type("DOE");
    cy.get("#postal-code").type("123456");
    cy.get("#continue").click();
    cy.url().should("include", "/checkout-step-two.html"); // second step of checkout
    cy.get(".summary_info").should("be.exist"); // verify if the summary info is visible final assertion before finishing the order
    cy.get("#finish").click();
    cy.url().should("include", "/checkout-complete.html"); // final assertion to verify if the order was placed successfully
  });

});

// // Login test with wrong username or password (check if you get an error message)

  /// The assertion at the end checks if the error message is displayed
describe("Login Test - negative scenarios", () => {
  
    it("Should not login with invalid user-name", () => {
       cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("invalid_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.contains(
      '[data-test="error"]',
      "Epic sadface: Username and password do not match any user in this service"
    ).should("be.visible");
  });


});
