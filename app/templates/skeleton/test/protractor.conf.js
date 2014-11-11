exports.config = {

    allScriptsTimeout: 11000,

    // The address of a running selenium server. If specified, Protractor will
    // connect to an already running instance of selenium. This usually looks like
    // seleniumAddress: 'http://localhost:4444/wd/hub'
    seleniumAddress: null,

    // ----- What tests to run -----
    // Spec patterns are relative to the location of this config.
    specs: [
        'scenarios/*.js'
    ],

    // ----- Capabilities to be passed to the webdriver instance ----
    // For a full list of available capabilities, see
    // https://code.google.com/p/selenium/wiki/DesiredCapabilities
    // and
    // https://code.google.com/p/selenium/source/browse/javascript/webdriver/capabilities.js
    capabilities: {
        'browserName': 'chrome'
    },

    directConnect: true,

    chromeDriver: '../node_modules/chromedriver/lib/chromedriver/chromedriver',

    baseUrl: 'http://localhost:9000/app/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    // If false, the grunt process stops when the test fails.
    keepAlive: true,

    // If true, protractor will not use colors in its output.
    noColor: false,

    rootElement: 'html'

};
