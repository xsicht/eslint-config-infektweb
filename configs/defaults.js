var checkModuleAvailability = require('../helpers/checkModuleAvailability');

checkModuleAvailability('eslint-plugin-bdd');

module.exports = {
    'plugins': [
        'bdd'
    ],
    'rules': {
        // Disallow spaces inside of brackets
        'array-bracket-spacing': [2, 'never'],

        // Catch excluded tests
        // e.g. xdescribe, xit
        'bdd/exclude': 2,

        // Catch focus tests
        // e.g. ddescribe, iit
        'bdd/focus': 2,

        // Enforce spaces inside of single line blocks
        'block-spacing': [2, 'always'],

        // Use the 'true bracy style'
        'brace-style': [2, '1tbs'],

        // Require camelcase
        'camelcase': 2,

        // Enforces spacing around commas
        'comma-spacing': [2, { 'before': false, 'after': true }],

        // Limit cyclomatic complexity
        'complexity': [1, 8],

        // Disallow spaces inside of computed properties
        'computed-property-spacing': [2, 'never'],

        // Allow brace-less single-line if, else, etc.
        'curly': [2, 'multi-line'],

        // Enforce newline before a dot in a member expression
        'dot-location': [2, 'property'],

        // Require file to end with single newline
        'eol-last': [2],

        // Enforce function declarations instead of expressions
        'func-style': [2, 'declaration'],

        // Blacklist certain identifiers (variable names, function names, object properties )
        // e.g. the following would throw an error:
        // 'id-blacklist': ['data']
        // const data = {...};
        'id-blacklist': 0,

        // Validates indentation
        'indent': [2, 4, { 'SwitchCase': 1 }],

        // Enforce variable initializations
        'init-declarations': 2,

        // Require spaces following keywords (e.g. if, else, for, ...)
        'keyword-spacing': 2,

        // Enforce property spacing
        'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],

        // Maximum depth blocks can be nested
        'max-depth': [1, 3],

        // Maximum line-length
        'max-len': [2, 110, 4, { 'ignoreUrls': true, 'ignorePattern': '^(import\\s.+from\\s.+;)|(\/\/ eslint-disable-line)' }],

        // Limit maximum number of statements
        'max-statements':[2, 15],

        // Specify the maximum number of statements allowed per line
        'max-statements-per-line': 2,

        // Require newline before return statement
        'newline-before-return': 2,

        // Newline per 3 chained methods
        'newline-per-chained-call': [2, {'ignoreChainWithDepth': 3}],

        // Disallow use of alert
        'no-alert': 2,

        // Disallow lexical declarations in case/default clauses
        'no-case-declarations': 2,

        // Disallow use of console
        'no-console': 2,

        // Disallow empty functions, expect arrow functions
        'no-empty-function': [2, { 'allow': ['arrowFunctions'] }],

        // Disallow null comparisons
        // e.g. if (foo == null) ...
        'no-eq-null': 2,

        // Disallow unnecessary labels
        'no-extra-label': 2,

        // Disallow floating decimals
        // e.g. var num = .5;
        'no-floating-decimal': 2,

        // Disallow the type conversion with shorter notations
        'no-implicit-coercion': 2,

        // Disallow var and named functions in global scope
        'no-implicit-globals': 2,

        // Disallow this keywords outside of classes or class-like objects
        'no-invalid-this': 2,

        // Disallow labeled statements
        'no-labels': 2,

        // Disallow functions in loops
        'no-loop-func': 2,

        // Allow magic numbers
        'no-magic-numbers': 0,

        // Disallows multiple blank lines
        'no-multiple-empty-lines': [2, {'max': 1}],

        // Disallow multiple spaces
        'no-multi-spaces': 2,

        // Disallow use of negated expressions in conditions
        'no-negated-condition': 2,

        // Nesting ternary expressions makes code unclear
        'no-nested-ternary': 2,

        // Disallow self assignment
        'no-self-assign': 2,

        // Comparing a variable against itself is usually an error,
        // either an typo or refactoring error
        'no-self-compare': 2,

        // It is considered good practice to only throw the errorobject itself
        // or an object using the error object as base objects for user-defined exceptions
        'no-throw-literal': 2,

        // Disallow trailing spaces at the end of lines
        'no-trailing-spaces': 2,

        // Avoid unexpected multiline expressions
        'no-unexpected-multiline': 2,

        // Disallow unmodified conditions of loops
        'no-unmodified-loop-condition': 2,

        // Disallow boolean literals in conditional expressions
        // e.g. bad: var a = x ? true : false;
        'no-unneeded-ternary': 2,

        // Disallow unused labels
        'no-unused-labels': 2,

        // Disallow unused variables
        'no-unused-vars': 2,

        // Disallow unnecessary .call() and .apply()
        'no-useless-call': 2,

        // Disallow unncessary concatenation of strings
        'no-useless-concat': 2,

        // Disallow unnecessary constructor
        'no-useless-constructor': 2,

        // Disallow unnecessary escape usage
        'no-useless-escape': 2,

        // Disallow early use of variables but allow function declarations
        'no-use-before-define': [2, 'nofunc'],

        // Disallow use of void operator
        'no-void': 2,

        // Often code is marked during development process for later work on it or with additional thoughts.
        // These comments are a warning signal, that there is something not production ready in your code.
        'no-warning-comments': [2, { 'terms': ['todo', 'fixme'], 'location': 'start' }],

        // Disallow whitespace before properties
        'no-whitespace-before-property': 2,

        // Enforces a space inside of curly braces in objects
        'object-curly-spacing': [2, 'always'],

        // Exactly one declarator per declaration per function (var) or block (let or const)
        'one-var': [2, 'never'],

        // Require or disallow an newline around variable declarations
        'one-var-declaration-per-line': 0,

        // Placing operators at the beginning of the line makes the code more readable
        'operator-linebreak': [2, 'before'],

        // Never write padded blocks (start and end with blank lines)
        'padded-blocks': [
            2,
            {
                'blocks': 'never',
                'switches': 'never',
                'classes': 'always'
            }
        ],

        // Enforce quote style
        'quotes': [2, 'single'],

        // Use literals for object property names (strings only as needed)
        'quote-props': [2, 'as-needed'],

        // Enforce semicolons
        'semi': 2,

        // Require space before the opening brace of blocks
        'space-before-blocks': 2,

        // Disallow spaces before function parenthesis
        'space-before-function-paren': [2, 'never'],

        // Require a whitespace at the beginning of a commment
        'spaced-comment': [2, 'always'],

        // Disallow spaces inside of parentheses
        'space-in-parens': [2, 'never'],

        // Disallow usage of spacing in template strings
        'template-curly-spacing': 2,

        // Validates JSDoc comments are syntactically correct
        'valid-jsdoc': [2, {
            'requireParamDescription': false,
            'requireReturnDescription': false
        }]
    }
};
