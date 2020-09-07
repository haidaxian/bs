'use strict'

var config = {
    NODE_ENV: '"production"'
}
var type = process.argv.slice(2)[0];
if (type === 'test') {
    config['PLATFORM'] = '"test"'
} else if (type === 'pro') {
    config['PLATFORM'] = '"pro"'
} else if (type === 'pre') {
    config['PLATFORM'] = '"pre"'
}

module.exports = config
