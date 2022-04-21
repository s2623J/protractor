describe('Angular Demo Project', () => { 

    var headers;

    beforeAll(()=> {
        browser.get('https://dassdevarajan.github.io/demo-app');
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
            element(by.id('add-menu')).click();
            expect(element(by.tagName('h3')).getText()).toBe('Product Entry Form');
            element(by.id('name')).sendKeys(addValuesArr[0]);
            element(by.id('desc')).sendKeys(addValuesArr[1]);
            element(by.name('category')).click();
            element.all(by.tagName('option')).get(0).click();
            element(by.id('quantity')).sendKeys(addValuesArr[2]);
            element(by.id('unitprice')).sendKeys(addValuesArr[3]);
            element(by.id('supname')).sendKeys(addValuesArr[4]);
            element(by.id('submit')).click();
            expect(element(by.css('.alert-success')).getText()).toBe(addValuesArr[5]);

            // browser.sleep(10000); // To allow tester to visually confirm test values in browser
        })

        it('should navigate back to list page', () => {
            console.log('...Navigate back to list page...');
            element(by.id('list-menu')).click();
            expect(element(by.tagName('h3')).getText()).toBe('Product List');
        })

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
})