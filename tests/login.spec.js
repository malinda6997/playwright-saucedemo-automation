const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pages/loginPage');
const users = require('../data/users');
const constants = require('../constants');

let loginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.open();
})

test('Login User Test', async ({ page }) => { 

  await loginPage.login();
  await expect(page).toHaveURL(constants.urls.inventory);
  await expect(page).toHaveTitle(constants.text.productTitle);

}); 
 