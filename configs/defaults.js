var checkModuleAvailability = require('../helpers/checkModuleAvailability');

checkModuleAvailability('eslint-plugin-bdd');

module.exports = {
    'plugins': [
        'bdd'
    ],
    'rules': {
        // Do not enforce getter/setter pairs in objects
        'accessor-pairs': 0,

        // Disallow spaces inside of brackets
        'array-bracket-spacing': [2, 'never'],

        // Enforce return statements in callbacks of array’s methods
        'array-callback-return': 2,

        // Catch excluded tests
        // e.g. xdescribe, xit
        'bdd/exclude': 2,

        // Catch focus tests
        // e.g. ddescribe, iit
        'bdd/focus': 2,

        // Treat var as Block Scoped
        'block-scoped-var': 2,

        // Enforce spaces inside of single line blocks
        'block-spacing': [2, 'always'],

        // Use the 'true bracy style'
        'brace-style': [2, '1tbs'],

        // Require camelcase
        'camelcase': 2,

        // Disallow Dangling Commas
        'comma-dangle': 2,

        // Enforces spacing around commas
        'comma-spacing': [2, {
            'after': true,
            'before': false
        }],

        // Enforce comma at the end of the line in comma-separated lists
        'comma-style': [2, 'last'],

        // Limit cyclomatic complexity
        'complexity': [2, 8],

        // Disallow spaces inside of computed properties
        'computed-property-spacing': [2, 'never'],

        // Do not require return statements to either always or never specify values
        'consistent-return': 0,

        // Do not require consistent this
        'consistent-this': 0,

        // Allow brace-less single-line if, else, etc.
        'curly': [2, 'multi-line', 'consistent'],

        // Do not require Default Case in Switch Statements
        'default-case': 0,

        // Do not specify disallowed identifiers
        'id-blacklist': 0,

        // Do not enforce minimum and maximum identifier lengths
        'id-length': 0,

        // Do not require identifiers to match a specified regular expressions
        'id-match': 0,

        // Enforce newline before a dot in a member expression
        'dot-location': [2, 'property'],

        // Require Dot Notation
        'dot-notation': [2, { 'allowKeywords': true }],

        // Require file to end with single newline
        'eol-last': [2, 'unix'],

        // Require === and !==
        'eqeqeq': [2, 'always'],

        // Do not require or disallow named function expressions
        'func-names': 0,

        // Enforce function declarations instead of expressions
        'func-style': [2, 'declaration', { 'allowArrowFunctions': false }],

        // Do not require Guarding for-in
        'guard-for-in': 0,

        // Blacklist certain identifiers (variable names, function names, object properties )
        // e.g. the following would throw an error:
        // 'id-blacklist': ['data']
        // const data = {...};
        'id-blacklist': 0,

        // Validates indentation
        'indent': [2, 4, {
            'MemberExpression': 1,
            'outerIIFEBody': 1,
            'SwitchCase': 1,
            'VariableDeclarator': 1
        }],

        // Enforce variable initializations
        'init-declarations': [2, 'always'],

        // Require spaces following keywords (e.g. if, else, for, ...)
        'keyword-spacing': [2, {
            'after': true,
            'before': true
        }],

        // Enforce property spacing
        'key-spacing': [2, {
            'afterColon': true,
            'beforeColon': false,
            'mode': 'strict'
        }],

        // Enforce consistent linebreak style
        'linebreak-style': [2, 'unix'],

        // Require empty lines around comments
        'lines-around-comment': [2, {
            'beforeBlockComment': true,
            'afterBlockComment': false,
            'beforeLineComment': false,
            'afterLineComment': false,
            'allowBlockStart': false,
            'allowBlockEnd': false,
            'allowObjectStart': false,
            'allowObjectEnd': false,
            'allowArrayStart': false,
            'allowArrayEnd': false
        }],

        // Maximum depth blocks can be nested
        'max-depth': [1, 3],

        // Maximum line-length
        'max-len': [2, 110, 4, {
            'ignoreComments': false,
            'ignoreTrailingComments': false,
            'ignoreUrls': true,
            'ignorePattern': '^(import\\s.+from\\s.+;)|(\/\/ eslint-disable-line)'
        }],

        // Do not enforce a maximum file line-length
        'max-lines': 0,

        // Do not enforce a maximum depth that callbacks can be nested
        'max-nested-callbacks': 0,

        // Do not enforce a maximum number of parameters in function definitions
        'max-params': 0,

        // Limit maximum number of statements
        'max-statements': [2, 15, { 'ignoreTopLevelFunctions': false }],

        // Specify the maximum number of statements allowed per line
        'max-statements-per-line': 2,

        // Do not enforce newlines between operands of ternary expressions
        'multiline-ternary': 0,

        // Require constructor function names to begin with a capital letter
        'new-cap': [2, {
            'newIsCap': true,
            'capIsNew': false,
            'properties': true
        }],

        // Require parentheses when invoking a constructor with no arguments
        'new-parens': 2,

        // Do not require or disallow an empty line after var declarations
        'newline-after-var': 0,

        // Require newline before return statement
        'newline-before-return': 2,

        // Newline per 3 chained methods
        'newline-per-chained-call': [2, { 'ignoreChainWithDepth': 3 }],

        // Disallow use of alert
        'no-alert': 2,

        // Disallow Array constructorsisallow Array constructors
        'no-array-constructor': 2,

        // Disallow bitwise operators
        'no-bitwise': [2, { 'int32Hint': false }],

        // Disallow Use of caller/callee
        'no-caller': 2,

        // Disallow lexical declarations in case/default clauses
        'no-case-declarations': 2,

        // Disallow Shadowing of Variables Inside of catch
        'no-catch-shadow': 2,

        // Disallow assignment operators in conditional statements
        'no-cond-assign': [2, 'always'],

        // Disallow use of console
        'no-console': 2,

        // Disallow constant expressions in conditions
        'no-constant-condition': [2, { 'checkLoops': true }],

        // Disallow continue statements
        'no-continue': 2,

        // Disallow control characters in regular expressions
        'no-control-regex': 2,

        // Disallow the use of debugger
        'no-debugger': 2,

        // Disallow deleting variables
        'no-delete-var': 2,

        // Disallow Regexs That Look Like Division
        'no-div-regex': 2,

        // Disallow duplicate arguments in function definitions
        'no-dupe-args': 2,

        // Disallow duplicate keys in object literals
        'no-dupe-keys': 2,

        // Disallow duplicate case labels in switch statements
        'no-duplicate-case': 2,

        // Disallow return before else
        'no-else-return': 2,

        // Disallow empty block statements
        'no-empty': 2,

        // Disallow empty character classes in regular expressions
        'no-empty-character-class': 2,

        // Disallow empty functions, expect arrow functions
        'no-empty-function': [2, { 'allow': ['arrowFunctions'] }],

        // Disallow empty destructuring patterns
        'no-empty-pattern': 2,

        // Disallow null comparisons
        // e.g. if (foo == null) ...
        'no-eq-null': 2,

        // Disallow eval()
        'no-eval': 2,

        // Disallow reassigning exceptions in catch clauses
        'no-ex-assign': 2,

        // Disallow Extending of Native Objects
        'no-extend-native': 2,

        // Disallow unnecessary function binding
        'no-extra-bind': 2,

        // Disallow unnecessary boolean casts
        'no-extra-boolean-cast': 2,

        // Disallow unnecessary labels
        'no-extra-label': 2,

        // Disallow unnecessary parentheses
        'no-extra-parens': 0,

        // Disallow unnecessary semicolons
        'no-extra-semi': 2,

        // Disallow Case Statement Fallthrough
        'no-fallthrough': 2,

        // Disallow floating decimals
        // e.g. var num = .5;
        'no-floating-decimal': 2,

        // Disallow reassigning function declarations
        'no-func-assign': 2,

        // Disallow the type conversion with shorter notations
        'no-implicit-coercion': 2,

        // Disallow var and named functions in global scope
        'no-implicit-globals': 2,

        // Disallow Implied eval()
        'no-implied-eval': 2,

        // Allow inline comments after code
        'no-inline-comments': 0,

        // Disallow function or var declarations in nested blocks
        'no-inner-declarations': 2,

        // Disallow invalid regular expression strings in RegExp constructors
        'no-invalid-regexp': 2,

        // Disallow this keywords outside of classes or class-like objects
        'no-invalid-this': 2,

        // Disallow irregular whitespace
        'no-irregular-whitespace': [2, { 'skipStrings': false }],

        // Disallow Iterator
        'no-iterator': 2,

        // Disallow Labels That Are Variables Names
        'no-label-var': 2,

        // Disallow labeled statements
        'no-labels': 2,

        // Disallow Unnecessary Nested Blocks
        'no-lone-blocks': 2,

        // Disallow if statements as the only statement in else blocks
        'no-lonely-if': 2,

        // Disallow functions in loops
        'no-loop-func': 2,

        // Allow magic numbers
        'no-magic-numbers': 0,

        // Disallow mixes of different operators
        'no-mixed-operators': [2, {
            "groups": [
                ["+", "-", "*", "/", "%", "**"],
                ["&", "|", "^", "~", "<<", ">>", ">>>"],
                ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                ["&&", "||"],
                ["in", "instanceof"]
            ],
            "allowSamePrecedence": true
        }],

        // Allow mixed spaces and tabs for indentation
        // because it gets already reported by 'no-tabs' rule
        'no-mixed-spaces-and-tabs': 0,

        // Disallows multiple blank lines
        'no-multiple-empty-lines': [2, {
            'max': 1,
            'maxEOF': 0,
            'maxBOF': 0
        }],

        // Disallow multiple spaces
        'no-multi-spaces': 2,

        // Disallow Multiline Strings
        'no-multi-str': 2,

        // Disallow Reassignment of Native Objects
        'no-native-reassign': 2,

        // Disallow use of negated expressions in conditions
        'no-negated-condition': 2,

        // Disallow negating the left operand in in expressions
        'no-negated-in-lhs': 2,

        // Nesting ternary expressions makes code unclear
        'no-nested-ternary': 2,

        // Disallow new For Side Effects
        'no-new': 2,

        // Disallow Function Constructor
        'no-new-func': 2,

        // Disallow Object constructors
        'no-new-object': 2,

        // Disallow Primitive Wrapper Instances
        'no-new-wrappers': 2,

        // Disallow calling global object properties as functions
        'no-obj-calls': 2,

        // Disallow octal escape sequences in string literals
        'no-octal-escape': 2,

        // Disallow octal literals
        'no-octal': 2,

        // Disallow Reassignment of Function Parameters
        'no-param-reassign': 0,

        // Allow the unary operators ++ and --
        'no-plusplus': 0,

        // Disallow Use of __proto__
        'no-proto': 2,

        // Disallow use of Object.prototypes builtins directly
        'no-prototype-builtins': 2,

        // Disallow Redeclaring Variables
        'no-redeclare': [2, { 'builtinGlobals': false }],

        // Disallow multiple spaces in regular expression literals
        'no-regex-spaces': 2,

        // Do not disallow specific global variables
        'no-restricted-globals': 0,

        // Do not specify restricted syntax
        'no-restricted-syntax': 0,

        // Disallow Assignment in return Statement
        'no-return-assign': 0,

        // Disallow Script URLs
        'no-script-url': 2,

        // Disallow self assignment
        'no-self-assign': 2,

        // Comparing a variable against itself is usually an error,
        // either an typo or refactoring error
        'no-self-compare': 2,

        // Disallow Use of the Comma Operator
        'no-sequences': 2,

        // Allow Shadowing
        'no-shadow': 0,

        // Disallow Shadowing of Restricted Names
        'no-shadow-restricted-names': 2,

        // Allow spacing between function identifiers and their applications
        // because it gets already reported by 'space-before-function-paren' rule
        'no-spaced-func': 0,

        // Disallow sparse arrays
        'no-sparse-arrays': 2,

        // Disallow tabs in file
        'no-tabs': 2,

        // Allow ternary operators
        'no-ternary': 0,

        // It is considered good practice to only throw the errorobject itself
        // or an object using the error object as base objects for user-defined exceptions
        'no-throw-literal': 2,

        // Disallow trailing spaces at the end of lines
        'no-trailing-spaces': [2, { 'skipBlankLines': false }],

        // Disallow Undeclared Variables
        'no-undef': [2, { 'typeof': true }],

        // Disallow Initializing to undefined
        'no-undef-init': 2,

        // Allow Use of undefined Variable
        'no-undefined': 0,

        // Allow dangling underscores in identifiers
        'no-underscore-dangle': 0,

        // Avoid unexpected multiline expressions
        'no-unexpected-multiline': 2,

        // Disallow unmodified conditions of loops
        'no-unmodified-loop-condition': 2,

        // Disallow boolean literals in conditional expressions
        // e.g. bad: var a = x ? true : false;
        'no-unneeded-ternary': [2, { 'defaultAssignment': false }],

        // Disallow unreachable code after return, throw, continue, and break statements
        'no-unreachable': 2,

        // Disallow control flow statements in finally blocks
        'no-unsafe-finally': 2,

        // Disallow Unused Expressions
        'no-unused-expressions': [2, {
            'allowShortCircuit': false,
            'allowTernary': true
        }],

        // Disallow unused labels
        'no-unused-labels': 2,

        // Disallow unused variables
        'no-unused-vars': [2, {
            'vars': 'all',
            'args': 'after-used'
        }],

        // Disallow early use of variables but allow function declarations
        'no-use-before-define': [2, {
            'classes': true,
            'functions': false
        }],

        // Disallow unnecessary .call() and .apply()
        'no-useless-call': 2,

        // Disallow unncessary concatenation of strings
        'no-useless-concat': 2,

        // Disallow unnecessary constructor
        'no-useless-constructor': 2,

        // Disallow unnecessary escape usage
        'no-useless-escape': 2,

        // Disallow use of void operator
        'no-void': 2,

        // Often code is marked during development process for later work on it or with additional thoughts.
        // These comments are a warning signal, that there is something not production ready in your code.
        'no-warning-comments': [2, {
            'terms': ['todo', 'fixme'],
            'location': 'start'
        }],

        // Disallow whitespace before properties
        'no-whitespace-before-property': 2,

        // Disallow with statements
        'no-with': 2,

        // Do not enforce consistent line breaks inside braces
        'object-curly-newline': 0,

        // Enforce a space inside of curly braces in objects
        'object-curly-spacing': [2, 'always'],

        // Enforce placing object properties on separate lines
        // if they do not fit on one line
        'object-property-newline': [2, { 'allowMultiplePropertiesPerLine': true }],

        // Exactly one declarator per declaration per function (var) or block (let or const)
        'one-var': [2, 'never'],

        // Do not require or disallow an newline around variable declarations
        // because it gets already reported by 'one-var' rule
        'one-var-declaration-per-line': 0,

        // Enforce Operator Assignment Shorthand
        'operator-assignment': [2, 'always'],

        // Placing operators at the beginning of the line makes the code more readable
        'operator-linebreak': [2, 'before'],

        // Never write padded blocks (start and end with blank lines)
        'padded-blocks': [2, {
            'blocks': 'never',
            'switches': 'never',
            'classes': 'always'
        }],

        // Enforce quote style
        'quotes': [2, 'single', {
            'avoidEscape': false,
            'allowTemplateLiterals': true
        }],

        // Use literals for object property names (strings only as needed)
        'quote-props': [2, "as-needed", {
            'keywords': false,
            'unnecessary': true,
            'numbers': false
        }],

        // Require Radix Parameter
        'radix': [2, 'always'],

        // Do not require JSDoc comment
        'require-jsdoc': 0,

        // Enforce semicolons
        'semi': [2, 'always'],

        // Enforce spacing before and after semicolons
        'semi-spacing': [2, {
            'before': false,
            'after': true
        }],

        // Do not enforce Variable Sorting
        'sort-vars': 0,

        // Require space before the opening brace of blocks
        'space-before-blocks': [2, 'always'],

        // Disallow spaces before function parenthesis
        'space-before-function-paren': [2, 'never'],

        // Require a whitespace at the beginning of a commment
        'spaced-comment': [2, 'always'],

        // Disallow spaces inside of parentheses
        'space-in-parens': [2, 'never'],

        // Require Spaces Around Infix Operators
        'space-infix-ops': [2, { 'int32Hint': false }],

        // Require or disallow spaces before/after unary operators
        'space-unary-ops': [2, {
            'words': true,
            'nonwords': false
        }],

        // Require strict mode directives
        'strict': [2, 'global'],

        // Disallow usage of spacing in template strings
        'template-curly-spacing': 2,

        // Disallow the Unicode Byte Order Mark
        'unicode-bom': [2, 'never'],

        // Require calls to isNaN() when checking for NaN
        'use-isnan': 2,

        // Validates JSDoc comments are syntactically correct
        'valid-jsdoc': [2, {
            'prefer': {
                'arg': 'param',
                'argument': 'param',
                'return': 'returns'
            },
            'preferType': {
                'array': 'Array',
                'bool': 'boolean',
                'Bool': 'boolean',
                'Boolean': 'boolean',
                'buffer': 'Buffer',
                'function': 'Function',
                'int': 'number',
                'Int': 'number',
                'integer': 'number',
                'Integer': 'number',
                'Number': 'number',
                'object': 'Object',
                'String': 'string'
            },
            'requireParamDescription': false,
            'requireReturnDescription': false
        }],

        // Enforce comparing typeof expressions against valid strings
        'valid-typeof': 2,

        // Require Variable Declarations to be at the top of their scope
        'vars-on-top': 0,

        // Require IIFEs to be Wrapped
        'wrap-iife': [2, 'outside'],

        // Require Regex Literals to be Wrapped
        'wrap-regex': 2,

        // Disallow Yoda Conditions
        'yoda': [2, 'never']
    }
};
