module.exports = {
    'rules': {
        // Enforce return after callback
        'callback-return': [2, [
            'callback',
            'cb',
            'next',
            'done'
        ]],

        // Enforce require() on the top-level module scope
        'global-require': 0,

        // Ensure error callbacks are handled.
        // Error param matches any string that contains 'err' or 'Err'
        'handle-callback-err': [2, '^.*(e|E)rr' ],

        // Disallow Mixed Requires
        'no-mixed-requires': [2, {
            'grouping': false,
            'allowCall': false
        }],

        // Disallow new require
        'no-new-require': 2,

        // Disallow string concatenation when using _dirname and _filename
        'no-path-concat': 2,

        // Allow process.env
        'no-process-env': 0,

        // Disallow process.exit()
        'no-process-exit': 2,

        // Do not disallow Node.js modules
        'no-restricted-modules': 0,

        // Disallow synchronous methods
        'no-sync': 2
    }
};
