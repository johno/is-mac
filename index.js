var macRegex = require('mac-regex');

module.exports = function(mac) {
  if(typeof url !== 'string') {
    throw new TypeError('is-mac expects a string');
  }

  return macRegex.test(mac);
};
