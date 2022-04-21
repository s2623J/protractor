describe('Google Main Page', () => {
    beforeAll(() => {
        browser.ignoreSynchronization = true; // Only for testing with non-Angular web pages
        browser.get('https://google.com');
    })

    it('should search', () => {
        element(by.name('q')).sendKeys('best email system');
        browser.sleep(5000);
        element(by.name('q')).sendKeys(protractor.Key.ENTER) // Induce Enter keypress
            .then((results) => {
                console.log('Results: ' + results);
            })
        browser.sleep(5000);
    })
})