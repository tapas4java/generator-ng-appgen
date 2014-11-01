'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require('path');
var cgUtils = require('../utils.js');
var chalk = require('chalk');
var _ = require('underscore');
var fs = require('fs');

_.str = require('underscore.string');
_.mixin(_.str.exports());

var ControllerGenerator = module.exports = function ControllerGenerator(args, options, config) {

	yeoman.generators.NamedBase.apply(this, arguments);

};

util.inherits(ControllerGenerator, yeoman.generators.NamedBase);

ControllerGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    cgUtils.askForModuleAndDir('controller', this, false, cb);
};

ControllerGenerator.prototype.files = function files() {

    cgUtils.processTemplates(this.name, this.dir, 'controller', this, null, null, this.module);

};
