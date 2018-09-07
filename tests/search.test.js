module.exports = {
    'Validate that the search field autosuggestion feature displays matching keywords': function (browser) {
        browser
            .url('https://google.com/')
            .waitForElementVisible('body', 1000)
            .waitForElementVisible('input.gsfi', 1000)
            .setValue('input.gsfi', 'quality assurance')
            .waitForElementVisible('ul[role=listbox]', 1000)
            .assert.containsText('ul[role=listbox]', 'quality assurance');
        },
        
        'Validate that the Search result displays relevant search result and a correct page title': function (browser) {
            browser
            .url('https://google.com/')
            .waitForElementVisible('body', 1000)
            .waitForElementVisible('input.gsfi', 1000)
            .setValue('input.gsfi', 'quality assurance')
            .keys(browser.Keys.ENTER, function(done) {
                browser.pause(3000)
                .assert.title('quality assurance - Google Search')
                .assert.containsText('div#main', 'quality assurance');
            })
            .end();
    }
};

// I would have used a Page Object Model design pattern to design the test to avoid code duplication.
