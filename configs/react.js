var checkModuleAvailability = require('../helpers/checkModuleAvailability');

checkModuleAvailability('eslint-plugin-react');

module.exports = {
    'ecmaFeatures': {
        'jsx': true
    },
    'plugins': [
        'react'
    ],
    'rules': {
        // Enforce quote style for JSX attributes
        'jsx-quotes': [2, 'prefer-double'],

        // Prevent missing displayName in a react component definition
        'react/display-name': [2, { 'ignoreTranspilerName': false }],

        // Forbid certain props on Components
        // Waiting for rule getting released:
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/lib/rules/forbid-prop-types.js
        // 'react/forbid-component-props': [2, { 'forbid': ['className', 'style'] }],

        // Forbid vague propTypes
        'react/forbid-prop-types': [2, { 'forbid': ['any', 'array', 'object'] }],

        // Enforce boolean attributes notation in JSX
        // e.g. <Icon spin />
        'react/jsx-boolean-value': [2, 'never'],

        // Validate closing bracket location in JSX
        'react/jsx-closing-bracket-location': [2, 'after-props'],

        // Disallow spaces inside of curly braces in JSX attributes
        'react/jsx-curly-spacing': [2, 'never'],

        // Disallow spaces around equal signs in JSX attributes
        'react/jsx-equals-spacing': [2, 'never'],

        // Restrict file extensions that may contain JSX
        'react/jsx-filename-extension': [2, { 'extensions': ['js', 'jsx'] }],

        // Configure the position of the first property
        'react/jsx-first-prop-new-line': [2, 'multiline'],

        // Enforce event handler naming conventions in JSX
        'react/jsx-handler-names': [2, {
            'eventHandlerPrefix': 'handle',
            'eventHandlerPropPrefix': 'on'
        }],

        // Validate JSX indentation
        'react/jsx-indent': [2, 4],

        // Validate props indentation in JSX
        'react/jsx-indent-props': [2, 4],

        // Detect missing key prop
        'react/jsx-key': 2,

        // Limit maximum of props on a single line in JSX
        'react/jsx-max-props-per-line': [2, { 'maximum': 2 }],

        // No .bind() or arrow functions in JSX props
        'react/jsx-no-bind': [2, {
            'ignoreRefs': false,
            'allowArrowFunctions': false,
            'allowBind': false
        }],

        // Prevent comments from being inserted as text nodes
        'react/jsx-no-comment-textnodes': 2,

        // Prevent duplicate properties in JSX
        'react/jsx-no-duplicate-props': [2, { 'ignoreCase': true }],

        // Prevent usage of unwrapped JSX strings
        'react/jsx-no-literals': 2,

        // Prevent usage of unsafe target='_blank'
        'react/jsx-no-target-blank': 2,

        // Disallow undeclared variables in JSX
        'react/jsx-no-undef': 2,

        // Enforce pascalcase for user-defined JSX components
        'react/jsx-pascal-case': [2, { 'allowAllCaps': false }],

        // Enforce props alphabetical sorting
        'react/jsx-sort-props': [2, {
            'callbacksLast': false,
            'shorthandFirst': false,
            'shorthandLast': false,
            'ignoreCase': true
        }],

        // Enforce spacing before closing bracket of self-closing JSX elements
        'react/jsx-space-before-closing': [2, 'always'],

        // Prevent react to be incorrectly marked as unused
        'react/jsx-uses-react': 2,

        // Prevent variables used in JSX to be incorrectly marked as unused
        'react/jsx-uses-vars': 2,

        // Prevent missing parentheses around multilines JSX
        'react/jsx-wrap-multilines': 2,

        // Allow usage of dangerous JSX properties
        'react/no-danger': 0,

        // Prevent usage of deprecated methods
        'react/no-deprecated': 2,

        // Prevent usage of setState in componentDidMount
        'react/no-did-mount-set-state': [2, 'disallow-in-func'],

        // Prevent usage of setState in componentDidUpdate
        'react/no-did-update-set-state': [2, 'disallow-in-func'],

        // Prevent direct mutation of this.state
        'react/no-direct-mutation-state': 2,

        // Prevent usage of findDOMNode
        'react/no-find-dom-node': 2,

        // Prevent usage of isMounted
        'react/no-is-mounted': 2,

        // Prevent multiple component definition per file
        'react/no-multi-comp': [2, { 'ignoreStateless': false }],

        // Prevent usage of the return value of React.render
        'react/no-render-return-value': 2,

        // Allow usage of setState
        'react/no-set-state': 0,

        // Prevent using string references
        'react/no-string-refs': 2,

        // Prevent usage of unknown DOM property
        'react/no-unknown-property': 2,

        // Enforce ES6 class for components
        'react/prefer-es6-class': [2, 'always'],

        // Do not enforce stateless React Components to be written as a pure function
        'react/prefer-stateless-function': 0,

        // Prevent missing props validation in a react component definition
        'react/prop-types': 2,

        // Prevent missing react when using JSX
        'react/react-in-jsx-scope': 2,

        // Restrict file extensions that may be required
        'react/require-extension': [1, { 'extensions': ['.js', '.jsx'] }],

        // Enforce React components to have a shouldComponentUpdate method
        'react/require-optimization': 2,

        // Enforce ES5 or ES6 class for returning value in render function
        'react/require-render-return': 2,

        // Prevent extra closing tags for components without children
        'react/self-closing-comp': [2, {
            'component': true,
            'html': true
        }],

        // Enforce component methods order
        'react/sort-comp': [2, {
            order: [
                'displayName',
                'propTypes',
                'defaultProps',
                'contextTypes',
                'fetchData',
                'statics',
                'state',
                'constructor',
                'componentWillMount',
                'componentDidMount',
                'componentWillReceiveProps',
                'shouldComponentUpdate',
                'componentWillUpdate',
                'componentDidUpdate',
                'componentWillUnmount',
                'render',
                '/^render.+$/',
                '/^handle.+$/',
                'everything-else'
            ]
        }],

        // Enforce propTypes declarations alphabetical sorting
        'react/sort-prop-types': [2, {
            'ignoreCase': true,
            'callbacksLast': false,
            'requiredFirst': false
        }]
    }
};
