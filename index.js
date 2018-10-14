const macRegex = require('mac-regex')

const availableDelimiters = [':', '-']

const hasMixedDelimiters = (mac, delimiters) => {
  return delimiters.some((delimiter) => mac.includes(delimiter) && mac.split(delimiter).length !== 6)
}

module.exports = (mac) => {
  if (typeof mac !== 'string') {
    throw new TypeError('is-mac expected a string')
  }

  if (hasMixedDelimiters(mac, availableDelimiters)) {
    return false
  }

  return macRegex({ exact: true }).test(mac)
}
