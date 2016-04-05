var checkModuleAvailability = require('../helpers/checkModuleAvailability');

checkModuleAvailability('babel-eslint');
checkModuleAvailability('eslint-plugin-babel');

module.exports = {
    'parser': 'babel-eslint',
    'plugins': [
        'babel'
    ],
    'env': {
        'es6': true
    },
    'ecmaFeatures': {
        'modules': true,
    },
    'rules': {
        // Use the short syntax for arrow functions where it's readable
        // (no convention)
        'arrow-body-style': 0,

        // Require parens in arrow function arguments
        'arrow-parens': 0,
        'babel/arrow-parens': 2, // Handles async functions correctly

        // Require space before/after arrow function's arrow
        'arrow-spacing': 2,

        // Verify calls of super() in constructors
        'constructor-super': 2,

        // Disallow arrow functions where they could be confused with comparisons
        'no-confusing-arrow': 2,

        // Disallow use of constant expressions in conditions
        'no-constant-condition': 2,

        // Disallow empty destructuring patterns
        'no-empty-pattern': 2,

        // Disallow duplicate name in class members
        'no-dupe-class-members': 2,

        // Disallow use of this/super before calling super() in constructors
        'no-this-before-super': 2,

        // Require let or const instead of var
        'no-var': 2,

        // Suggest using arrow functions as callbacks
        'prefer-arrow-callback': 2,

        // Suggest to use const declaration for variables
        // that are never modified after declared.
        'prefer-const': 2,

        // Suggest using Reflect methods where applicable
        'prefer-reflect': 2,

        // Suggest using the spread operator instead of .apply()
        'prefer-spread': 2,

        // Disallow generator functions that do not have yield
        'require-yield': 2
    }
};
