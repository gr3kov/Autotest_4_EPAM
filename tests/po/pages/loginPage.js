const Page = require("./page.js");

class LoginPage extends Page {
    get usernameInput() { return $("#user-name"); }
    get passwordInput() { return $("#password"); }
    get loginButton() { return $("#login-button"); }
    get errorMessage() { return $(".error-message-container"); }

    async open() {
        await super.open("https://www.saucedemo.com/");
    }

    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async clearInputs() {
        await this.usernameInput.clearValue();
        await this.passwordInput.clearValue();
    }

    async getErrorMessage() {
        return await this.errorMessage.getText();
    }
}

module.exports = new LoginPage();
