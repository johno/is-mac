var macRegex = require('mac-regex')

module.exports = function (mac) {
  if (typeof mac !== 'string') {
    throw new TypeError('is-mac expected a string')
  }

  return macRegex({ exact: true }).test(mac)
}
