module.exports = {
	plugins: ["sort-keys-fix"],
	rules: {
		"computed-property-spacing": ["error", "never"],
		"key-spacing": [
			"error",
			{
				afterColon: true,
				beforeColon: false
			}
		],
		"no-new-object": "error",
		"no-whitespace-before-property": "error",
		"object-curly-newline": [
			"error",
			{
				ExportDeclaration: {
					minProperties: 1,
					multiline: true
				},
				ImportDeclaration: {
					minProperties: 1,
					multiline: true
				},
				ObjectExpression: {
					minProperties: 1,
					multiline: true
				},
				ObjectPattern: {
					minProperties: 1,
					multiline: true
				}
			}
		],
		"object-curly-spacing": ["error", "always"],
		"object-property-newline": ["error"],
		"prefer-object-spread": "error",
		"quote-props": [
			"error",
			"as-needed",
			{
				keywords: false,
				numbers: false,
				unnecessary: true
			}
		],
		"sort-keys": [
			"error",
			"asc",
			{
				natural: true
			}
		],
		"sort-keys-fix/sort-keys-fix": [
			"error",
			"asc",
			{
				natural: true
			}
		]
	}
};
