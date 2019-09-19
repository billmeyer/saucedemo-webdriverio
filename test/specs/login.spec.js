const loginPage = require('../pages/login.page');
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('Login', () => {
    beforeEach(() => {
        loginPage.open();
    });

    it('should be able to login with the standard user', () => {
        loginPage.loginWithStandardUser();

        // https://devhints.io/chai
        expect(browser.getUrl()).to.include('/inventory.html');
        assert.include(browser.getUrl(), '/inventory.html');
    });

    it('pageLoad and speedIndex has exceeded the baseline metrics', () => {
        const output = browser.execute('sauce:performance', {
            name: title,
            metrics: ['speedIndex', 'load'],
        });
        const { result, details } = output;
        return assert.equal(
            result, 'pass',
            `Regression detected for metrics 
                ${JSON.stringify(details, null, 4)}`,
        );
    });
});