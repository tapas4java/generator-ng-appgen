'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require('path');
var fs = require('fs');
var cgUtils = require('../utils.js');
var _ = require('underscore');
var chalk = require('chalk');
var fs = require('fs');

_.str = require('underscore.string');
_.mixin(_.str.exports());

var TemplateGenerator = module.exports = function TemplateGenerator(args, options, config) {

    yeoman.generators.NamedBase.apply(this, arguments);

};

util.inherits(TemplateGenerator, yeoman.generators.NamedBase);

TemplateGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    var prompts = [
        {
            name: 'route',
            message: 'Enter your route url (i.e. /mytemplate/:id).  If you don\'t want a route added for you, leave this empty.'
        }
    ];

    this.prompt(prompts, function (props) {
        this.route = props.route;
        cgUtils.askForModuleAndDir('template', this, false, cb);
    }.bind(this));
};

TemplateGenerator.prototype.files = function files() {

    //this.ctrlname = _.camelize(_.classify(this.name)) + 'Controller';
    this.templateName =  _.camelize(_.classify(this.name));

    cgUtils.processTemplates(this.name, this.dir, 'template', this, null, null, this.module);

    if (this.route && this.route.length > 0){
        var templateUrl = this.dir + this.name + '.html';
        cgUtils.injectRoute(this.module.file, this.config.get('uirouter'), this.name, this.route, templateUrl, this);
    }

};
