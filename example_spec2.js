describe('HTML tags page', () => { 

    var headers;

    beforeAll(()=> {
        browser.get('https://dassdevarajan.github.io/html-tags');
    })

    it('should display headers', () => {
        console.log('...displaying headers...');
        expect(element(by.tagName('h1')).getText()).toEqual('Header H1');
        expect(element(by.tagName('h2')).getText()).toEqual('Header H2');
        expect(element(by.tagName('h3')).getText()).toEqual('Header H3');
        expect(element(by.tagName('h4')).getText()).toEqual('Header H4');
        expect(element(by.tagName('h5')).getText()).toEqual('Header H5');
        expect(element(by.tagName('h6')).getText()).toEqual('Header H6');
    })

    it ('should display paragraphs', () => {
        console.log('...displaying paragraphs...');
        expect(element(by.id('para1')).getText()).toEqual('First paragraph');
        expect(element(by.id('para2')).getText()).toEqual('Second paragraph');
    })

    it('should format text', () => {
        console.log('...formatting text...');
        expect(element(by.tagName('b')).getText()).toEqual('Bold text');
    })

    it('should display link', () => {
        console.log('...display link...');
        expect(element(by.tagName('a')).getText()).toEqual('Sample Link');
        expect(element(by.tagName('a')).getAttribute('href')).toBe('http://www.google.com/'); // End with "/"
        expect(element(by.linkText('Sample Link')).getAttribute('href')).toBe('http://www.google.com/');
    })

    it('should display unordered list', () => {
        console.log('...display unordered list...');
        expect(element.all(by.css('ul.fruits li')).count()).toEqual(4);
        expect(element.all(by.css('ul.fruits li')).get(0).getText()).toEqual('Apple');
        expect(element.all(by.css('ul.fruits li')).get(1).getText()).toEqual('Orange');
        expect(element.all(by.css('ul.fruits li')).get(2).getText()).toEqual('Banana');
        expect(element.all(by.css('ul.fruits li')).get(3).getText()).toEqual('Strawberry');
    })

    it('should display ordered list', () => {
        console.log('...display ordered list...');
        expect(element.all(by.css('ol.address li')).count()).toEqual(4);
        expect(element.all(by.css('ol.address li')).get(0).getText()).toEqual('Name');
        expect(element.all(by.css('ol.address li')).get(1).getText()).toEqual('City');
        expect(element.all(by.css('ol.address li')).get(2).getText()).toEqual('State');
        expect(element.all(by.css('ol.address li')).get(3).getText()).toEqual('Country');
    })

    it('should display table', () => {
        console.log('...display table...');
        var headerArr = element.all(by.css('table.employee-details th'));
        expect(headerArr.count()).toEqual(3);
        expect(headerArr.get(0).getText()).toBe('Firstname');
        expect(headerArr.get(1).getText()).toBe('Lastname');
        expect(headerArr.get(2).getText()).toBe('Age');
        var cellArr = element.all(by.css('table.employee-details td')); // Assemble collection array using protractor expressions
        expect(cellArr.count()).toEqual(9);
        expect(cellArr.get(0).getText()).toBe('John');
        expect(cellArr.get(1).getText()).toBe('Doe');
        expect(cellArr.get(2).getText()).toBe('25');
        expect(cellArr.get(3).getText()).toBe('Nancy');
        expect(cellArr.get(4).getText()).toBe('Williams');
        expect(cellArr.get(5).getText()).toBe('20');
        expect(cellArr.get(6).getText()).toBe('Richard');
        expect(cellArr.get(7).getText()).toBe('Smith');
        expect(cellArr.get(8).getText()).toBe('30');
    })

  
    it('should display form header', () => {
        console.log('...display form header...');
        expect(element(by.css('div.container h3')).getText()).toBe('Employee Entry Form');
        var inputArr = element.all(by.css('#form1 input'));
        inputArr.get(0).sendKeys('John');
        inputArr.get(1).sendKeys('Doe');
        inputArr.get(2).sendKeys('1000 Main Ave.');
        element.all(by.tagName('option')).get(0).click();
        element.all(by.name('gender')).get(0).click();
        element(by.css('#form1 textarea')).sendKeys('Hello! ;-)');
        element(by.id('submit')).click();

        // browser.sleep(10000); // To allow tester to visually confirm test values in browser
    })

    it('should display page details', () => {
        browser.getTitle().then((title) => {
            console.log('Title: ' + title);
        })

        browser.getCurrentUrl().then((url) => {
            console.log('URL: ' + url);
        })

        browser.getPageSource().then((source) => {
            console.log('Source: ', source);
        })
    })
})