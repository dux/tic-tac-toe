# Tic tac toe demo

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


## OR backend DB mapper

DataMaper, easier to get it working in Sinatra then AR


## Install

    bundle install

    puma -p 3000 (or whatewer that reads config.ru)


## Testing

### ruby

    rspec spec

### javascript

    node-jasmine spec

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