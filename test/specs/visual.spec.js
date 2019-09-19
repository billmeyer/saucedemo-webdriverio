const assert = require('assert');

describe('Login', () => {
    it('should display username, password, and login button properly', () => {
        browser.url('https://www.saucedemo.com');
        browser.execute('/*@screener.init*/', 'Login WebdriverIO Example');
        browser.execute('/*@screener.snapshot*/', 'Login Page');

        // @screener.end will return screener results
        // Note: @screener.end will close your test session, so it must be called just before the end of your test
        const {value} = browser.execute('/*@screener.end*/');
        assert.ifError(value.message);
    });
});