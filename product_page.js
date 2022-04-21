class product_page {
    constructor() {
        this.openMyApp = function () {
            browser.get('https://dassdevarajan.github.io/demo-app');
        };
        this.clickAddProduct = function () {
            element(by.id('add-menu')).click();
        }
        this.getProductEntryFormHeader = function () {
            return element(by.tagName('h3')).getText(); // Must return a value
        }
        this.addNewProduct = function (addValuesArr) {
            element(by.id('name')).sendKeys(addValuesArr[0]);
            element(by.id('desc')).sendKeys(addValuesArr[1]);
            element(by.name('category')).click();
            element.all(by.tagName('option')).get(0).click();
            element(by.id('quantity')).sendKeys(addValuesArr[2]);
            element(by.id('unitprice')).sendKeys(addValuesArr[3]);
            element(by.id('supname')).sendKeys(addValuesArr[4]);
            element(by.id('submit')).click();
        }
        this.getAlertMessage = function () {
            return element(by.css('.alert-success')).getText();
        }
    }
}

module.exports = new product_page();