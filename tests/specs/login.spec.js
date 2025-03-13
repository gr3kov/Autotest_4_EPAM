const LoginPage = require("../po/pages/loginPage.js");
const DashboardPage = require("../po/pages/dashboardPage.js");

describe("Login Tests", () => {
    beforeEach(async () => {
        await LoginPage.open();
    });

    it("UC-1: Login with empty credentials", async () => {
        await LoginPage.clearInputs();
        await LoginPage.login("", "");
        const message = await LoginPage.getErrorMessage();
        expect(message).toContain("Username is required");
    });

    it("UC-2: Login with only username", async () => {
        await LoginPage.login("standard_user", "");
        const message = await LoginPage.getErrorMessage();
        expect(message).toContain("Password is required");
    });

    it("UC-2: Login with only password", async () => {
        await LoginPage.login("", "secret_sauce");
        const message = await LoginPage.getErrorMessage();
        expect(message).toContain("Username is required");
    });

    /*it("UC-3: Successful login", async () => {
        await LoginPage.login("standard_user", "secret_sauce");
        const title = await DashboardPage.getTitleText();
        expect(title).toBe("Swag Labs");
    });*/
    it("UC-3: Successful login", async () => {
        await LoginPage.login("standard_user", "secret_sauce");
        await browser.waitUntil(async () => (await browser.getTitle()) === "Swag Labs", {
            timeout: 5000,
            timeoutMsg: "Ожидался заголовок 'Swag Labs' в течение 5 секунд"
        });
        await expect(DashboardPage.uniqueElement).toBeDisplayed();
    });

    
});
