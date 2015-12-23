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

        // Prevent missing displayName in a React component definition
        'react/display-name': [2, { 'acceptTranspilerName': true }],

        // Enforce boolean attributes notation in JSX
        // e.g. <Icon spin />
        'react/jsx-boolean-value': [2, 'never'],

        // Validate closing bracket location in JSX
        'react/jsx-closing-bracket-location': [2, { 'location': 'after-props' }],

        // Disallow spaces inside of curly braces in JSX attributes
        'react/jsx-curly-spacing': [2, 'never'],

        // Enforce event handler naming conventions in JSX
        'react/jsx-handler-names': 2,

        // Validate props indentation in JSX
        'react/jsx-indent-props': 2,

        // Detect missing key prop
        'react/jsx-key': 2,

        // Limit maximum of props on a single line in JSX
        'react/jsx-max-props-per-line': [2, { 'maximum': 2 }],

        // No .bind() or Arrow Functions in JSX Props
        'react/jsx-no-bind': 2,

        // Prevent duplicate properties in JSX
        'react/jsx-no-duplicate-props': [2, { 'ignoreCase': true }],

        // Disallow undeclared variables in JSX
        'react/jsx-no-undef': 2,

        // Enforce PasalCase for user-defined JSX components
        'react/jsx-pascal-case': 2,

        // Enforce propTypes declarations alphabetical sorting
        'react/jsx-sort-prop-types': 2,

        // Prevent React to be incorrectly marked as unused
        'react/jsx-uses-react': 2,

        // Prevent variables used in JSX to be incorrectly marked as unused
        'react/jsx-uses-vars': 2,

        // Prevent usage of deprecated methods
        'react/no-deprecated': 2,

        // Prevent usage of setState in componentDidMount
        'react/no-did-mount-set-state': 2,

        // Prevent usage of setState in componentDidUpdate
        'react/no-did-update-set-state': 2,

        // Prevent direct mutation of this.state
        'react/no-direct-mutation-state': 2,

        // Prevent usage of isMounted
        'react/no-is-mounted': 2,

        // Prevent multiple component definition per file
        'react/no-multi-comp': 2,

        // Prevent usage of unknown DOM property
        'react/no-unknown-property': 2,

        // Enforce ES6 class for components
        'react/prefer-es6-class': [2, 'always'],

        // Prevent missing props validation in a React component definition
        'react/prop-types': 2,

        // Prevent missing React when using JSX
        'react/react-in-jsx-scope': 2,

        // Restrict file extensions that may be required
        'react/require-extension': [1, { 'extensions': ['.js', '.jsx'] }],

        // Prevent extra closing tags for components without children
        'react/self-closing-comp': 2,

        // Enforce component methods order
        'react/sort-comp': [2, {
            order: [
                'displayName',
                'propTypes',
                'defaultProps',
                'contextTypes',
                'fetchData',
                'statics',
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

        // Prevent missing parentheses around multilines JSX
        'react/wrap-multilines': 2
    }
};
