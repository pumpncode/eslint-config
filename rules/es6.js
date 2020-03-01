module.exports = {
	env: {
		es6: true
	},
	parser: "babel-eslint",
	parserOptions: {
		ecmaFeatures: {
			generators: false,
			objectLiteralDuplicateProperties: false
		},
		ecmaVersion: 6,
		sourceType: "module"
	},
	rules: {
		"arrow-body-style": [
			"error",
			"as-needed",
			{
				requireReturnForObjectLiteral: false
			}
		],
		"arrow-parens": ["error", "always"],
		"arrow-spacing": [
			"error",
			{
				after: true,
				before: true
			}
		],
		"constructor-super": "error",
		"generator-star-spacing": [
			"error",
			{
				after: true,
				before: false
			}
		],
		"no-class-assign": "error",
		"no-confusing-arrow": [
			"error",
			{
				allowParens: true
			}
		],
		"no-const-assign": "error",
		"no-dupe-class-members": "error",
		"no-duplicate-imports": "off",
		"no-new-symbol": "error",
		"no-restricted-exports": "off",
		"no-restricted-imports": [
			"off",
			{
				paths: [],
				patterns: []
			}
		],
		"no-this-before-super": "error",
		"no-useless-computed-key": "error",
		"no-useless-constructor": "error",
		"no-useless-rename": [
			"error",
			{
				ignoreDestructuring: false,
				ignoreExport: false,
				ignoreImport: false
			}
		],
		"no-var": "error",
		"object-shorthand": [
			"error",
			"always",
			{
				avoidQuotes: true,
				ignoreConstructors: false
			}
		],
		"prefer-arrow-callback": [
			"error",
			{
				allowNamedFunctions: false,
				allowUnboundThis: true
			}
		],
		"prefer-const": [
			"error",
			{
				destructuring: "any",
				ignoreReadBeforeAssign: true
			}
		],
		"prefer-destructuring": [
			"error",
			{
				AssignmentExpression: {
					array: true,
					object: true
				},
				VariableDeclarator: {
					array: false,
					object: true
				}
			},
			{
				enforceForRenamedProperties: false
			}
		],
		"prefer-numeric-literals": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"require-yield": "error",
		"rest-spread-spacing": ["error", "never"],
		"sort-imports": [
			"error",
			{
				ignoreCase: true,
				ignoreDeclarationSort: true,
				ignoreMemberSort: true,
				memberSyntaxSortOrder: [
					"none",
					"all",
					"multiple",
					"single"
				]
			}
		],
		"symbol-description": "error",
		"template-curly-spacing": "error",
		"yield-star-spacing": ["error", "after"]
	}
};
