module.exports = {
    'parser': 'babel-eslint',
    'env': {
        'es6': true
    },
    'ecmaFeatures': {
        'modules': true,
    },
    'plugins': [
        'classes'
    ],
    'rules': {
        // Require parens in arrow function arguments
        'arrow-parens': 2,

        // space between method name and parens
        'classes/space': 2,

        // Class name should start with upper case.
        // Method name should start with lower case.
        'classes/name': [2, 'class', 'method'],

        // Verify calls of super() in constructors
        'constructor-super': 2,

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
