const { getTests } = require('./get.test.action')


module.exports = {
    '/': {
        get: {
            action: getTests,
            level: 'member',
        },

    },
}