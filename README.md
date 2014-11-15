#generator-ng-appgen

>Yeomen/Angular app generator for enterprise applications with best folder structure and end to end development workflow support.

This generator follows the angular best practice guidelines for code organization and code generation strategy which are really helpful for huge enterprise grade applications. Thanks to @[Chris Gross](https://github.com/cgross), ng-appgen is built on top of his [generator-cg-angular](https://github.com/cgross/generator-cg-angular).

Features
---------

* Provides a directory structure geared towards large Angular projects.
    * Each controller, service, filter, and directive, template are placed in their own file within respective category folder.
    * All files related to a conceptual unit(module) are placed together.  For example, the home module will contain all the required controllers, services, filters, templates, directives, LESS etc. in the same directory under folder home.
    * All the application related artifacts will be available inside **app** folder.
    * All the specs(unit tests) and scenarios(e2e tests) are placed inside top level **test** folder.
    * Single **assets** folder for all your static resources.
    * Out of the box **data** folder for containing JSON files in development phase. *NOTE:* data folder won't be part of production binary.
* Provides a ready-made Grunt build that produces an extremely optimized distribution.
   * Build uses [grunt-ng-annotate](https://github.com/olov/ng-annotate) so you don't have to use the Angular injection syntax for safe minification (i.e. you dont need `$inject` or `(['$scope','$http',...`.
   * `grunt run` task allows you to run a simple development server with watch/livereload enabled.  Additionally, JSHint and the appropriate unit tests are run for the changed files.
* Integrates Bower for package management
* Includes Yeoman subgenerators for directives, services, templates, controllers, filters, and modules.
* Integrates LESS and includes Bootstrap via the source LESS files allowing you to reuse Bootstrap vars/mixins/etc.
* Easily Testable - Each sub-generator creates a skeleton unit test.  Unit tests can be run via `grunt test` and they run automatically during the grunt watch that is active during `grunt run`.
* End to End testing - Protractor has been integrated and can be run via `grunt e2e`
* Out of the box home, help and common modules with basic test coverage.

Getting Started
-------------

Prerequisites: Node, Grunt, Yeoman, and Bower.  Once Node is installed, do:

    npm install -g grunt-cli yo bower

Next, install ng-appgen generator:

    npm install -g generator-ng-appgen

To create a project:

    mkdir testapp
    cd testapp
    yo ng-appgen
NOTE: It will ask few questions like application name, router to use but you can just hit Enter as all prompts comes with default selection. Initially it will run `npm install` and `bower install` for downloadig all required dependent libraries for you.

Boom! See your application in action:
    

    grunt test - it will run unit test cases through karma
    grunt run - it will open your chrome and run the application
    grunt e2e - open new terminal and execute this to run e2e tests

Directory Structure
-------------

All subgenerators prompt the user to specify where to save the new files.  Thus you can create any directory structure you desire, including nesting.  The generator will create a handful of files in the root of your project and application related files in **app** folder like `index.html`, `app.js`, and `app.less` etc.  You determine how the rest of the project will be structured.

This is the default application structure which you will get by running `yo ng-appgen` command with app name as `testapp`.

    /testapp ............................... application root folder
        /app ............................... container for all application artefacts
    	    index.html ..................... main HTML file
            app.less ....................... main app-wide styles
            app.js ......................... angular module initialization and route setup
    		/assets ........................ all static resources goes here
    		    /imgs ...................... place for all images
    			    favicon.png ............ image file
    			/css ....................... place for css files(if required)
    			    style.css .............. blank css file
    			/fonts ..................... place for all fonts
    			    /bootstrap ............. bootstrap fonts
    				    font files ......... individual font files
    				/font-awesome .......... font-awesome fonts
    				    font files ......... individual font files
    		/home .......................... home module main folder
    		    /controllers ............... home module controllers folder
    			    home-controller.js ..... controller file
    			/services .................. home module services folder
    			    home-service.js ........ service file
    			/templates ................. home module templates folder
    			    home-template.html ..... html file
    				home-template.less ..... less file
    			home.js .................... home module main file
    			home.less .................. home module main less file
    		/help .......................... help module main folder
    		    /controllers ............... help module controllers folder
    			    help-controller.js ..... controller file
    			/services .................. help module services folder
    			    help-service.js ........ service file
    			/templates ................. help module templates folder
    			    help-template.html ..... html file
    				help-template.less ..... less file
    			home.js .................... help module main file
    			home.less .................. help module main less file
    		/common ........................ common module main folder
    		    /controllers ............... common module controllers folder
    			    common-controller.js ... controller file
    			/services .................. common module services folder
    			    common-service.js ...... service file
    			common.js .................. common module main file
    			common.less ................ common module main less file
        /test .............................. container for all test artefacts
    		karma.conf.js .................. karma configuration file
    		protractor.conf.js ............. protractor configuration file
    		/scenarios ..................... place for all e2e tests called scenario
    			app-scenario.js ............ e2e test scenario file
    		/specs ......................... place for all unit tests called spec
    			/home ...................... home module test folder
    				/controllers ........... home module controller test folder
    					home-controller-spec.js .... home controller spec file
    				/services ...................... home module services test folder
    					home-service-spec.js ....... home service spec file
    			/help .............................. help module test folder
    				/controllers ................... help module controller test folder
    					help-controller-spec.js .... help controller spec file
    				/services ...................... help module services test folder
    					help-service-spec.js ....... help service spec file
    			/common ............................ common module test folder
    				/controllers ................... common module controller test folder
    					common-controller-spec.js .. common controller spec file
    				/services ...................... common module services test folder
    					common-service-spec.js ..... common service spec file
    	/data ...................................... keep all your JSON files during development
        /dist ...................................... distributable version of app built using grunt
        /bower_component ........................... 3rd party libraries managed by bower
        /node_modules .............................. npm managed libraries used by grunt    
        Gruntfile.js ............................... grunt configuration file
        package.json ............................... npm configuration file
    	bower.json ................................. bower configuration file
    	README.md .................................. readme file
    	.bowerrc ................................... bower location configuration file
    	.editorconfig .............................. default editor settings
    	.gitignore ................................. gitignore file
    	.npmignore ................................. npm ignore file
    	.jshintrc .................................. jshint configuration file
    	.yo-rc.json ................................ yeomen configuration file

NOTE: Folders are strated with `'/'` in above structure.

Grunt Tasks
-------------

Now that the project is created, you have 4 simple Grunt commands available:

    grunt run   - This will run a development server with watch & livereload enabled.
    grunt test  - Run local unit tests.
    grunt e2e   - Run protractor end to end(e2e) tests.
    grunt build - Places a fully optimized (minified, concatenated, and more) in /dist

When `grunt run` is running, any changed javascript files will be linted using JSHint as well as have their appropriate unit tests executed.  Only the unit tests that correspond to the changed file will be run.  This allows for an efficient test driven workflow.

Code Generators
-------------

Modules allow you to more explicitly separate parts of your application.  Use the `yo ng-appgen:module my-module` command and specify a new subdirectory to place the module into.  Once you've created a module, running other subgenerators will now prompt you to select the module in which to place the new component.

There are a set of subgenerators to initialize empty Angular components.  Each of these generators will:

* Create one or more skeleton files (javascript, LESS, html, spec etc) for the component type.
* Update index.html and add the necessary `script` tags.
* Update app.less and add the @import as needed.
* For templates, update the app.js, adding the necessary route call if a route was entered in the generator prompts.

There are generators for `directive`, `template`, `service`, `filter`, `module`, `controller` and `modal`.

Running a generator:

    yo ng-appgen:directive my-directive
    yo ng-appgen:template my-template
    yo ng-appgen:service my-service
    yo ng-appgen:controller my-controller
    yo ng-appgen:filter my-filter
    yo ng-appgen:module my-module
    yo ng-appgen:modal my-modal

The name paramater passed (i.e. 'my-directive') will be used as the file names.  The generators will derive appropriate class names from this parameter (ex. 'my-directive' will convert to a class name of 'MyDirective').  Each sub-generator will ask for the folder(module) in which to create the new skeleton files. It will always prompt with default selection which is best for the application structure, we suggest not to change it. Just hit Enter.  

The modal subgenerator is a convenient shortcut to create templates that work as modals for Bootstrap v3.1 and Angular-UI-Bootstrap v0.10 (both come preconfigured with this generator).  If you choose not to use either of these libraries, simply don't use the modal subgenerator.

Preconfigured Libraries
-------------

The new app will have a handful of preconfigured libraries included.  This includes Angular 1.3.2, Bootstrap 3.3, AngularUI Bootstrap, AngularUI Utils, FontAwesome 4.2, JQuery 2.1, Underscore 1.7, LESS 1.7, Restangular 1, Moment 2.5 and angular-loading-bar.  You may of course add to or remove any of these libraries.  But the work to integrate them into the app and into the build process has already been done for you.

Build Process
-------------

The project will include a ready-made Grunt build that will:

* Build all the LESS files into one minified CSS file.
* Uses [grunt-angular-templates](https://github.com/ericclemmons/grunt-angular-templates) to turn all your templates into Javascript.
* Uses [grunt-ng-annotate](https://github.com/olov/ng-annotate) to preprocess all Angular injectable methods and make them minification safe.  Thus you don't have to use the array syntax.
* Concatenates and minifies all Javascript into one file.
* Replaces all appropriate script references in `index.html` with the minified CSS and JS files.
* (Optionally) Minifies any images in `assets/imgs`.
* Minifies the `index.html`.
* Copies any extra files necessary for a distributable build (ex.  Font-Awesome font files, etc).

The resulting build loads only a few highly compressed files.

The build process uses [grunt-dom-munger](https://github.com/cgross/grunt-dom-munger) to pull script references from the `index.html`.  This means that **your index.html is the single source of truth about what makes up your app**.  Adding a new library, new controller, new directive, etc does not require that you update the build file.  Also the order of the scripts in your `index.html` will be maintained when they're concatenated.

Importantly, grunt-dom-munger uses CSS attribute selectors to manage the parsing of the script and link tags.  Its very easy to exclude certain scripts or stylesheets from the concatenated files. This is often the case if you're using a CDN. This can also be used to prevent certain development scripts from being included in the final build.

* To prevent a script or stylesheet from being included in concatenation, put a `data-concat="false"` attribute on the link or script tag.  This is currently applied for the `livereload.js` and `less.js` script tags.

* To prevent a script or link tag from being removed from the finalized `index.html`, use a `data-remove="false"` attribute.


Release History
-------------

* 15/11/2014 - v1.0.1 - Few fixes including 'grunt build' issue and few optimizations on tests.
* 01/11/2014 - v1.0.0 - Initial release of template as Yeoman generator.


