# Is Mac

[![Build Status](https://travis-ci.org/johnotander/is-mac.svg?branch=master)](https://travis-ci.org/johnotander/is-mac)

Check whether a string is a valid MAC address. This uses `test` rather than `match` to ensure
it's as fast as possible: <http://jsperf.com/regexp-test-vs-match-m5>.

## Installation

```
npm i --save is-mac
```

## Usage

```javascript
var isMac = require('is-mac');

isMac('invalid-mac') // => false
isMac('aa-bb-cc-dd-ee-ff') // => true
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com) ([@4lpine](https://twitter.com/4lpine)).
