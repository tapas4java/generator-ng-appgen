module.exports = function(config){

    config.set({

        /**
         * From where to look for files, starting with the location of this file.
         */
        basePath : '../',

        /**
         * This is the list of file patterns to load into the browser during testing.
         */
        files : [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
			'bower_components/underscore/underscore.js',
			'bower_components/angular-ui-router/release/angular-ui-router.js',
			'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
			'bower_components/angular-ui-utils/ui-utils.js',
			'bower_components/angular-animate/angular-animate.js',
			'bower_components/restangular/dist/restangular.js',
			'app/*/*.js',
			'app/**/**/*.js',
            'test/specs/**/**/*-spec.js'
        ],

        /**
         * Exclude karma and protractor conf files
         */
        exclude: [
            'test/karma-conf.js',
            'test/protractor-conf.js'
        ],

        /**
         * Automatically runs tests when you save any test file
         */
        autoWatch : true,

        /**
         * Default reporter
         */
        reporters : ['mocha'],

        /**
         * Frameworks to use for unit testing
         */
        frameworks : ['jasmine'],

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
            'karma-mocha-reporter',
            'karma-phantomjs-launcher'
        ],

        /**
         * On which port should the browser connect, on which port is the test runner
         * operating, and what is the URL path for the browser to use.
         */
        port : 9000,
        runnerPort : 9001,
        urlRoot : '/app'

    });

};
