module.exports = {
    'parser': 'babel-eslint',
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
        'arrow-parens': 2,

        // Verify calls of super() in constructors
        'constructor-super': 2,

        // Disallow arrow functions where a condition is expected
        'no-arrow-condition': 2,

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
