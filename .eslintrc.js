// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        // 'plugin:vue/essential',
        'plugin:vue/strongly-recommended',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    globals: {
        "AMap": true
    },
    // add your custom rules here
    rules: {
        "quotes": [1, "single"],
        "vue/html-self-closing": ["off"],
        "vue/max-attributes-per-line": ["off"],
        "vue/name-property-casing": ["off"],
        'vue/html-indent': 0,
        'generator-star-spacing': 'off',
        'indent': 0,
        'prefer-promise-reject-errors': 0,
        'space-unary-ops': 0,
        'no-unused-expressions': 0,
        'no-unused-vars': 'off',
        'no-useless-return': 0,
        'standard/no-callback-literal': 0,
        'import/first': 0,
        'import/export': 0,
        'no-mixed-operators': 0,
        'semi': [0, 'never'],
        'no-tabs': 0,
        'space-before-function-paren': 0,
        'padded-blocks': 0,
        'one-var': 0,
        'no-multi-spaces': ["error", {ignoreEOLComments: true}],
        'camelcase': 0,
        'no-magic-numbers': [0, {ignoreArrayIndexes: true}],
        'wrap-iife': 0, // [2, 'any']
        'space-in-parens': [2, 'never'],
        'block-spacing': [2, 'always'],
        'brace-style': [2, '1tbs', {'allowSingleLine': true}],
        'comma-spacing': [2, {'before': false, 'after': true}],
        'no-multiple-empty-lines': [2, {'max': 1, 'maxEOF': 2, 'maxBOF': 2}],
        'arrow-parens': 0,
        'lines-around-comment': [2, {
            'beforeBlockComment': false,
            'afterBlockComment': false,
            'beforeLineComment': false,
            'afterLineComment': false
        }],
        'no-async-promise-executor': 0,
        'no-await-in-loop': 0,
        'no-console': 0,
        'no-constant-condition': 0,
        'no-control-regex': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-extra-parens': 0,
        'no-misleading-character-class': 0,
        'no-sparse-arrays': 0,
        'array-callback-return': 0,
        'complexity': 0,
        'eqeqeq': 0,
        'guard-for-in': 0,
        'max-classes-per-file': 0,
        'no-alert': 0,
        'no-caller': 0,
        'no-eval': 1,
        'no-redeclare': [2, {builtinGlobals: true}],
        'no-shadow': 0,
        'no-use-before-define': 0,
        'space-before-function-parentheses': 0,
        'new-cap': 0,
    }
}
