var macRegex = require('mac-regex')

var availableDelimiters = [':', '-']

var hasMixedDelimiters = function (mac, delimiters) {
  for (var i = 0; i < delimiters.length; i++) {
    if (mac.includes(delimiters[i]) && mac.split(delimiters[i]).length !== 6) {
      return true
    }
  }

  return false
}

module.exports = function (mac) {
  if (typeof mac !== 'string') {
    throw new TypeError('is-mac expected a string')
  }

  if (hasMixedDelimiters(mac, availableDelimiters)) {
    return false
  }

  return macRegex({ exact: true }).test(mac)
}
