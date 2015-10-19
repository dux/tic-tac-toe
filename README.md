# Tic tac toe demo

## Server side

Sinatra

OR mapper -> DataMaper, cleaner to get it working in Sinatra then AR


## client side of the demo

### JS

http://mithril.js.org/

Frontend with Mithril. It does very well
* two-way data binding
* routing
* controler-view rendering

Simple and extremly efective.


### Pre-processors

No usage of any pre-processors as SASS or CoffeeScript or TypeScript. 

That is the reason JS in public/js


## Install

    bundle install

    puma -p 3000 (or whatever that reads config.ru)


## Testing

### Continuous Integration - CI

Travis

https://travis-ci.org/dux/tic-tac-toe

[![Build Status](https://travis-ci.org/dux/tic-tac-toe.svg?branch=master)](https://travis-ci.org/dux/tic-tac-toe)

### ruby

    rspec spec

### javascript

    node-jasmine spec // not implemented


## Security

There is no security whatsoever
* GET insted of POST
* no checks for data consistency


## Resources used

* http://www.sinatrarb.com/
* http://mithril.js.org/
* http://datamapper.org/
* http://rspec.info/
* https://github.com/mhevery/jasmine-node
* https://travis-ci.org/