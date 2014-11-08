module.exports = function(config){

  config.set({

   /**
    * From where to look for files, starting with the location of this file.
    */
    basePath : './',

    /**
     * This is the list of file patterns to load into the browser during testing.
     */
    files : [
      '../bower_components/angular/angular.js',
      '../bower_components/angular-route/angular-route.js',
      '../bower_components/angular-mocks/angular-mocks.js',
      '../tests/**/**/*.js'
    ],

    /**
     * Exclude karma and protractor conf files
     */
    exclude: [
        '../tests/karma-conf.js',
        '../tests/protractor-conf.js'
    ],

    /**
     * Automatically runs tests when you save any test file
     */
    autoWatch : true,

    /**
     * Frameworks to use for unit testing
     */
    frameworks: ['jasmine'],

    /**
     * Browser to use for running unit tests
     * values: Chrome, Firefox, Opera, Safari, PhantomJS etc.
     */
    browsers : ['Chrome'],

    /**
     * Plugins required to run karma
     */
    plugins : [
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-jasmine',
        'karma-junit-reporter',
        'karma-phantomjs-launcher'
    ],

    /**
     * How to report, by default.
     */
    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    /**
     * On which port should the browser connect, on which port is the test runner
     * operating, and what is the URL path for the browser to use.
     */
      port: 9000,
      runnerPort: 9001,
      urlRoot: '/app'

  });
};
