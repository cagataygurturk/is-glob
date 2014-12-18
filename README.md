# is-glob [![NPM version](https://badge.fury.io/js/is-glob.svg)](http://badge.fury.io/js/is-glob)

> Returns `true` if the given string looks like a glob pattern.

## Install with [npm](npmjs.org)

```bash
npm i is-glob --save
```

## Usage

```js
var isGlob = require('is-glob');

isGlob('*.js');
//=> 'true'
isGlob('**/abc.js');
//=> 'true'
isGlob('abc/*.js');
//=> 'true'
isGlob('abc/(aaa|bbb).js');
//=> 'true'
isGlob('abc.js');
//=> 'false'
isGlob('abc/def/ghi.js');
//=> 'false'
```

## Run tests

Install dev dependencies:

```bash
node i -d && mocha
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/is-glob/issues)

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on December 18, 2014._