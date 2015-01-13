/*!
 * is-glob <https://github.com/jonschlinkert/is-glob>
 *
 * Copyright (c) 2014-2015 Jon Schlinkert.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var isGlob = require('./');

describe('isGlob', function () {
  it('should return `true` if it is a glob pattern:', function () {
    isGlob('*.js').should.be.true;
    isGlob('**/abc.js').should.be.true;
    isGlob('abc/*.js').should.be.true;
  });

  it('should return `true` if the path has brace characters:', function () {
    isGlob('abc/{a,b}.js').should.be.true;
    isGlob('abc/{a..z}.js').should.be.true;
    isGlob('abc/{a..z..2}.js').should.be.true;
  });

  it('should return `true` if the path has regex characters:', function () {
    isGlob('abc/(aaa|bbb).js').should.be.true;
    isGlob('abc/?.js').should.be.true;
    isGlob('?.js').should.be.true;
    isGlob('[foo].js').should.be.true;
    isGlob('[!foo].js').should.be.true;
    isGlob('a/b/c/[a-z].js').should.be.true;
  });

  it('should return `false` if it is not a string:', function () {
    isGlob().should.be.false;
    isGlob(null).should.be.false;
    isGlob(['**/*.js']).should.be.false;
    isGlob(['foo.js']).should.be.false;
  });

  it('should return `false` if it is not a glob pattern:', function () {
    isGlob('.').should.be.false;
    isGlob('aa').should.be.false;
    isGlob('abc.js').should.be.false;
    isGlob('abc/def/ghi.js').should.be.false;
  });
});

