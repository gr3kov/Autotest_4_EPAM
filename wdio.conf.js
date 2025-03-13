exports.config = {
    runner: 'local',
    specs: ['./tests/specs/login.spec.js'],
    maxInstances: 2,
    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--headless', '--disable-gpu']
            }
        },
        {
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: ['-headless']
            }
        }
    ],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [],
    
    //services: [['chromedriver']],  // Вместо selenium-standalone
    framework: 'mocha',
    reporters: ['spec', ['allure', { outputDir: 'allure-results' }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    before: function () {
        require('@babel/register');
    }
};
