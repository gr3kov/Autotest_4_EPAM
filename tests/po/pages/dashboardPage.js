/*const Page = require("./page.js");

class DashboardPage extends Page {
    get pageTitle() { return $(".title"); }

    async getTitleText() {
        //return await this.pageTitle.getText();
        return await browser.getTitle();
    }
}

module.exports = new DashboardPage();
*/

class DashboardPage {
    // Локатор уникального элемента на странице после входа
    get uniqueElement() { return $('#shopping_cart_container'); }

    // Метод для получения заголовка страницы
    async getTitleText() {
        return await browser.getTitle();
    }

    // Метод для проверки отображения уникального элемента
    async isUniqueElementDisplayed() {
        return await this.uniqueElement.isDisplayed();
    }
}

module.exports = new DashboardPage();
