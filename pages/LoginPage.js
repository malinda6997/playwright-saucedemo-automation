const users = require("../data/users");

class LoginPage {
  constructor(page) {
    this.page = page;
    this.baseURL = process.env.BASE_URL;

    //login page locators
    this.usernameInput = page.getByPlaceholder("Username");
    this.passwordInput = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  async open() {
    console.log(`Opening URL: ${this.baseURL}`);
    await this.page.goto(this.baseURL);
    console.log("Page opened successfully");
  }

  async login() {
    await this.usernameInput.fill(users.standardUser.username);
    await this.passwordInput.fill(users.standardUser.password);
    await this.loginButton.click();
  }
}
module.exports = { LoginPage };
