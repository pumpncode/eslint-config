const maxDepth = 10;
const maxNestedCallbacks = 10;
const maxParams = 6;

module.exports = {
	extends: [
		"./style/array.cjs",
		"./style/function.cjs",
		"./style/object.cjs",
		"./style/whitespace.cjs"
	],
	rules: {
		"block-spacing": ["error", "always"],
		"brace-style": ["error", "stroustrup"],
		camelcase: [
			"error",
			{
				ignoreDestructuring: false,
				properties: "never"
			}
		],
		"comma-dangle": ["error", "never"],
		"comma-spacing": [
			"error",
			{
				after: true,
				before: false
			}
		],
		"comma-style": [
			"error",
			"last",
			{
				exceptions: {
					ArrayExpression: false,
					ArrayPattern: false,
					ArrowFunctionExpression: false,
					CallExpression: false,
					FunctionDeclaration: false,
					FunctionExpression: false,
					ImportDeclaration: false,
					NewExpression: false,
					ObjectExpression: false,
					ObjectPattern: false,
					VariableDeclaration: false
				}
			}
		],
		"consistent-this": "off",
		"eol-last": ["error", "always"],
		"id-blacklist": "off",
		"id-length": [
			"error",
			{
				exceptions: [
					"x",
					"y",
					"z",
					"_"
				],
				max: 35,
				min: 2
			}
		],
		"id-match": "off",
		"jsx-quotes": ["error", "prefer-double"],
		"max-depth": ["error", maxDepth],
		"max-len": [
			"warn",
			{
				code: 100,
				comments: 100,
				ignoreRegExpLiterals: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreUrls: true,
				tabWidth: 4
			}
		],
		"max-lines": [
			"error",
			{
				max: 300,
				skipBlankLines: true,
				skipComments: true
			}
		],
		"max-nested-callbacks": ["error", maxNestedCallbacks],
		"max-params": ["error", maxParams],
		"max-statements": [
			"error",
			{
				max: 15
			}
		],
		"max-statements-per-line": [
			"error",
			{
				max: 1
			}
		],
		"multiline-ternary": ["error", "always-multiline"],
		"new-cap": [
			"error",
			{
				capIsNew: false,
				capIsNewExceptions: [
					"Immutable.Map",
					"Immutable.Set",
					"Immutable.List"
				],
				newIsCap: true,
				newIsCapExceptions: []
			}
		],
		"new-parens": "error",
		"no-bitwise": "off",
		"no-continue": "error",
		"no-lonely-if": "error",
		"no-mixed-operators": [
			"error",
			{
				allowSamePrecedence: false,
				groups: [
					["%", "**"],
					["%", "+"],
					["%", "-"],
					["%", "*"],
					["%", "/"],
					["/", "*"],
					[
						"&",
						"|",
						"<<",
						">>",
						">>>"
					],
					[
						"==",
						"!=",
						"===",
						"!=="
					],
					["&&", "||"]
				]
			}
		],
		"no-mixed-spaces-and-tabs": "error",
		"no-multi-assign": "error",
		"no-negated-condition": "error",
		"no-nested-ternary": "error",
		"no-plusplus": [
			"error",
			{
				allowForLoopAfterthoughts: true
			}
		],
		"no-restricted-syntax": [
			"error",
			{
				message: "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
				selector: "WithStatement"
			}
		],
		"no-ternary": "off",
		"no-trailing-spaces": [
			"error",
			{
				ignoreComments: false,
				skipBlankLines: false
			}
		],
		"no-underscore-dangle": [
			"error",
			{
				allow: [],
				allowAfterSuper: false,
				allowAfterThis: false,
				enforceInMethodNames: true
			}
		],
		"no-unneeded-ternary": [
			"error",
			{
				defaultAssignment: false
			}
		],
		"nonblock-statement-body-position": [
			"error",
			"beside",
			{
				overrides: {}
			}
		],
		"one-var": ["error", "never"],
		"one-var-declaration-per-line": ["error", "always"],
		"operator-assignment": ["error", "always"],
		"prefer-exponentiation-operator": "error",
		quotes: ["error", "double"],
		"require-jsdoc": "off",
		semi: ["error", "always"],
		"semi-spacing": [
			"error",
			{
				after: true,
				before: false
			}
		],
		"semi-style": ["error", "last"],
		"sort-vars": "error",
		"space-before-blocks": "error",
		"space-in-parens": ["error", "never"],
		"space-infix-ops": "error",
		"space-unary-ops": [
			"error",
			{
				nonwords: false,
				overrides: {},
				words: true
			}
		],
		"unicode-bom": ["error", "never"],
		"wrap-regex": "error"
	}
};
