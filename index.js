module.exports = {
	parser: "babel-eslint",
	parserOptions: {
		sourceType: "module"
	},
	extends: [
		"airbnb-base"
	],
	env: {
		browser: true,
		node: true
	},
	rules: {
		"no-tabs": "off",
		quotes: [
			"error",
			"double"
		],
		indent: [
			"error",
			"tab",
			{
				SwitchCase: 1
			}
		],
		"comma-dangle": "off",
		"linebreak-style": "off",
		"import/extensions": [
			"error",
			"ignorePackages"
		],
		"import/newline-after-import": "error",
		"import/order": [
			"error",
			{
				groups: [
					"builtin",
					"external",
					"parent",
					"sibling",
					"index"
				],
				"newlines-between": "always"
			}
		],
		"import/max-dependencies": [
			"error",
			{
				max: 20
			}
		],
		"import/named": "error",
		"import/no-unresolved": [
			"error",
			{
				ignore: [
					"flag_icon_css"
				]
			}
		],
		"import/no-extraneous-dependencies": [
			"error",
			{
				devDependencies: true
			}
		],
		"import/prefer-default-export": "off",
		"max-statements-per-line": [
			"error",
			{
				max: 1
			}
		],
		"space-before-function-paren": [
			"error",
			"never"
		],
		"brace-style": [
			"error",
			"stroustrup"
		],
		"no-plusplus": [
			"error",
			{
				allowForLoopAfterthoughts: true
			}
		],
		"no-await-in-loop": "off",
		"func-names": [
			"error",
			"never"
		],
		"no-param-reassign": [
			"error",
			{
				props: false
			}
		],
		"prefer-destructuring": "off",
		"object-shorthand": [
			"error",
			"always"
		],
		"function-paren-newline": [
			"error",
			"consistent"
		],
		complexity: [
			"error",
			30
		],
		"max-params": [
			"error",
			6
		],
		"max-depth": [
			"off",
			4
		],
		curly: [
			"error",
			"all"
		],
		"object-curly-newline": [
			"error",
			{
				ObjectExpression: {
					multiline: true,
					minProperties: 1
				},
				ObjectPattern: {
					multiline: true,
					minProperties: 1
				}
			}
		],
		"object-property-newline": [
			"error",
			{
				allowMultiplePropertiesPerLine: false
			}
		],
		"require-jsdoc": [
			"error",
			{
				require: {
					FunctionDeclaration: true,
					MethodDefinition: true,
					ClassDeclaration: true,
					ArrowFunctionExpression: true
				}
			}
		],
		"valid-jsdoc": [
			"error",
			{
				prefer: {
					arg: "param",
					argument: "param",
					return: "returns"
				},
				preferType: {
					Boolean: "boolean",
					Number: "number",
					String: "String",
					Object: "object",
					Array: "Array",
					Image: "image",
					Function: "func"
				},
				requireReturn: false,
				requireReturnType: true,
				matchDescription: "(.*?)",
				requireParamDescription: true,
				requireReturnDescription: true
			}
		],
		"no-cond-assign": [
			"error",
			"except-parens"
		],
		strict: "off",
		"max-len": [
			"warn",
			{
				code: 100,
				comments: 80,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
				ignoreUrls: true,
				tabWidth: 4
			}
		],
		"max-nested-callbacks": [
			"error",
			10
		],
		"newline-per-chained-call": [
			"error",
			{
				ignoreChainWithDepth: 3
			}
		],
		"space-before-blocks": [
			"error",
			"always"
		],
		"wrap-regex": [
			"error"
		],
		"array-element-newline": [
			"error",
			"always"
		],
		"array-bracket-newline": [
			"error",
			{
				minItems: 1
			}
		],
		"no-multi-assign": "off",
		"no-loop-func": "off",
		"no-multiple-empty-lines": [
			"error",
			{
				max: 1,
				maxEOF: 0,
				maxBOF: 0
			}
		],
		"class-methods-use-this": [
			"error",
			{
				exceptMethods: [
					"render",
					"checkDocuments"
				]
			}
		],
		"jsx-a11y/href-no-hash": "off",
		"no-alert": "off",
		"no-new": "off",
		"sort-vars": "error",
		"sort-imports": "off",
		"no-console": [
			"error",
			{
				allow: [
					"warn",
					"error",
					"info"
				]
			}
		],
		"operator-linebreak": [
			"error",
			"after"
		],
		"compat/compat": "error",
		"flowtype/boolean-style": [
			"error",
			"boolean"
		],
		"flowtype/define-flow-type": "warn",
		"flowtype/delimiter-dangle": [
			"error",
			"never"
		],
		"flowtype/generic-spacing": [
			"error",
			"never"
		],
		"flowtype/no-primitive-constructor-types": "error",
		"flowtype/no-weak-types": "error",
		"flowtype/object-type-delimiter": [
			"error",
			"comma"
		],
		"flowtype/semi": [
			"error",
			"always"
		],
		"flowtype/space-after-type-colon": [
			"error",
			"always"
		],
		"flowtype/space-before-generic-bracket": [
			"error",
			"never"
		],
		"flowtype/space-before-type-colon": [
			"error",
			"never"
		],
		"flowtype/union-intersection-spacing": [
			"error",
			"always"
		],
		"flowtype/require-exact-type": ["error", "always"],
		"flowtype/require-indexer-name": ["error", "always"],
		"flowtype/require-parameter-type": ["error"],
		"flowtype/require-return-type": ["error", "always"],
		"flowtype/require-types-at-top": ["error", "always"],
		"flowtype/require-valid-file-annotation": ["error", "always", {
			annotationStyle: "line"
		}],
		"flowtype/use-flow-type": "error",
		"flowtype/valid-syntax": "error"
	},
	plugins: [
		"flowtype",
		"import",
		"compat"
	],
	settings: {
		polyfills: [
			"fetch",
			"Object.assign"
		]
	},
	overrides: [
		{
		  	files: ["flow-typed/**/**.js"],
		  	rules: {
				camelcase: "off",
				"flowtype/require-types-at-top": "off"
		  	}
		}
	]
}