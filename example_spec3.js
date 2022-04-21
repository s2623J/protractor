var product_page = require('./product_page.js');

describe('Angular Demo Project', () => { 

    var headers;

    beforeAll(() => {
            // browser.get('https://dassdevarajan.github.io/demo-app');
            product_page.openMyApp();
        })

    it('should display headers', () => {
        console.log('...Displaying headers...');
        expect(element(by.tagName('h1')).getText()).toBe('Angular Demo Project');
        expect(element(by.tagName('h2')).getText()).toBe('Online Product Catalog');
        expect(element(by.tagName('h3')).getText()).toBe('Product List');
    })

    describe('Entry Form', () => {
        var addValuesArr = ['Joe Blow', 'Testing', 11, 100, 'test', 'Product is successfully added!'];

        it('should add product', () => {
            console.log('...Adding Product...');
            // element(by.id('add-menu')).click();
            product_page.clickAddProduct();
            // expect(element(by.tagName('h3')).getText()).toBe('Product Entry Form');
            expect(product_page.getProductEntryFormHeader()).toBe('Product Entry Form');
            product_page.addNewProduct(addValuesArr);
            // element(by.id('name')).sendKeys(addValuesArr[0]);
            // element(by.id('desc')).sendKeys(addValuesArr[1]);
            // element(by.name('category')).click();
            // element.all(by.tagName('option')).get(0).click();
            // element(by.id('quantity')).sendKeys(addValuesArr[2]);
            // element(by.id('unitprice')).sendKeys(addValuesArr[3]);
            // element(by.id('supname')).sendKeys(addValuesArr[4]);
            // element(by.id('submit')).click();
            // expect(element(by.css('.alert-success')).getText()).toBe(addValuesArr[5]);
            expect(product_page.getAlertMessage()).toBe(addValuesArr[5]);
            // browser.sleep(10000); // To allow tester to visually confirm test values in browser
        })

        it('should navigate back to list page', () => {
            console.log('...Navigate back to list page...');
            element(by.id('list-menu')).click();
            expect(element(by.tagName('h3')).getText()).toBe('Product List');
        })

        describe('Product List', () => {
            it('should list new item on page', () => {
                console.log('...List new item on page...');
                expect(element(by.tagName('h3')).getText()).toBe('Product List');
                let row = element.all(by.tagName('tr')).last();
                let cellsArr = row.all(by.tagName('td'));
                expect(cellsArr.get(0).getText()).toBe(addValuesArr[0]);
                expect(cellsArr.get(1).getText()).toBe('Appliances');
                expect(cellsArr.get(2).getText()).toEqual((addValuesArr[2].toString()));
                expect(cellsArr.get(3).getText()).toEqual(addValuesArr[3].toString());
                expect(cellsArr.get(4).getText()).toBe(addValuesArr[4]);
            })
        })

        describe('Product View', () => {
            it('should display product details', () => {
                console.log('...Displaying product details...');
                let row = element.all(by.tagName('tr')).last();
                row.all(by.id('view')).click(); // Adding "all" to this makes it work (even when only 1 element is expected)
                expect(element(by.tagName('h3')).getText()).toBe('Product View');
                let listArr = element.all(by.css('table.table.table-hover td'));
                expect(listArr.get(0).getText()).toBe(addValuesArr[0]);
                expect(listArr.get(1).getText()).toBe(addValuesArr[1]);
                expect(listArr.get(2).getText()).toBe('Appliances');
                expect(listArr.get(3).getText()).toBe(addValuesArr[2].toString());
                expect(listArr.get(4).getText()).toBe(addValuesArr[3].toString());
                expect(listArr.get(5).getText()).toBe(addValuesArr[4]);
                expect(listArr.get(6).getText()).toBe('true');
            })

            it('should navigate back to list page', () => {
                element(by.id('list-menu')).click();
                expect(element(by.tagName('h3')).getText()).toBe('Product List');
            })
        })

        describe('Edit View', () => {
            it('should navigate to Edit List page', () => {
                console.log('...Displaying Edit Page...');
                element.all(by.id('edit')).last().click();
                expect(element(by.tagName('h3')).getText()).toBe('Product Edit Form');
            })

            it('should change quantity', () => {
                element(by.id('quantity')).clear(); // Counter inputs require clearing before changing
                element(by.id('quantity')).sendKeys(300);
                // browser.sleep(10000); // To allow tester to visually confirm test values in browser
                element(by.id('submit')).click();
                expect(element(by.css('div.alert.alert-success')).getText())
                    .toBe('Product is successfully updated!');
                element(by.id('list-menu')).click();
                expect(element(by.tagName('h3')).getText()).toBe('Product List');
                let row = element.all(by.tagName('tr')).last();
                expect(row.all(by.tagName('td')).get(2).getText()).toBe('300');
            })
        })

        describe('Delete Operation', () => {
            it('should be able to delete individual items', () => {
                console.log('...delete operation...');
                let row = element.all(by.tagName('tr')).last();
                row.all(by.tagName('td')).get(7).click();
                expect(row.all(by.tagName('td')).get(0).getText()).not.toBe(addValuesArr[0]);
            })
        })
    })
})