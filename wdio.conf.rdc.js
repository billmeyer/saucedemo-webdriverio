const rdcOptions = {
    protocol: 'https',
    host: 'app.testobject.com',
    port: 443,
    path: '/api/appium/wd/hub',
    capabilities: [{
        testobject_api_key: process.env.TESTOBJECT_API_KEY,
        testobject_app_id: process.env.TESTOBJECT_APP_ID,
        testobject_device: process.env.TESTOBJECT_DEVICE,
        testobject_appium_version: process.env.TESTOBJECT_APPIUM_VERSION,
        automationName: 'UiAutomator2',
        platformName: 'Android',
        browserName: 'Chrome'
    }]
};

exports.config = {
    ...rdcOptions,
    runner: 'local',
    region: 'us',
    specs: [ './test/specs/**/*.js' ],
    exclude: [ ],
    maxInstances: 10,
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: { ui: 'bdd', timeout: 60000 },
};
