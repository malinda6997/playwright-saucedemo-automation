const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/loginPage");
const { Inventory } = require("../pages/inventory");
const constants = require("../constants");

let loginPage;
let inventory;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  inventory = new Inventory(page);
  await loginPage.open();
});

test('Cart badge update when adding products ', async ({ page }) => {

  await inventory.addProductToCart(constants.text.sauceLabsBackpack);
  await inventory.addProductToCart(constants.text.sauceLabsBikeLight);
  const cartCount = await inventory.getCarCount();

  expect (cartCount).toBe(2);


    
})