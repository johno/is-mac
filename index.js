var macRegex = require('mac-regex')

module.exports = function (mac) {
  if (typeof mac !== 'string') {
    throw new TypeError('is-mac expects a string')
  }

  return macRegex({ exact: true }).test(mac)
}
