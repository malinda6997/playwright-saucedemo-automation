class LoginPage {

    constructor(page) {
        this.page = page;
        this.baseURL = process.env.BASE_URL;
    }

    async open() {
        console.log(`Opening URL: ${this.baseURL}`);
        await this.page.goto(this.baseURL);
        console.log('Page opened successfully');
    }
} 
module.exports = {LoginPage};