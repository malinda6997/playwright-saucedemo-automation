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

  await page.getByPlaceholder("Username").fill(users.standardUser.username);
  await page.getByPlaceholder("Password").fill(users.standardUser.password);
  await page.getByRole("button", {name:"Login"}).click();

  await expect(page).toHaveURL(constants.urls.inventory);
  await expect(page.locator('title')).toHaveText(constants.text.productTitle);

}); 
