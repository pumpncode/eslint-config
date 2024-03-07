const jsxRules = {
	"@stylistic/jsx-child-element-spacing": "error",
	"@stylistic/jsx-closing-tag-location": "error",
	"@stylistic/jsx-equals-spacing": ["error", "never"],
	"@stylistic/jsx-max-props-per-line": [
		"error",
		{
			maximum: 1,
			when: "multiline"
		}
	],
	// TODO [@stylistic/eslint-plugin@>1.6.3]: change to "non-jsx" when @stylistic/eslint-plugin releases
	"@stylistic/jsx-one-expression-per-line": ["off"],
	"@stylistic/jsx-pascal-case": ["error", { allowNamespace: true }],
	"@stylistic/jsx-props-no-multi-spaces": "error",
	"@stylistic/jsx-self-closing-comp": "error",
	"@stylistic/jsx-sort-props": [
		"off",
		{
			callbacksLast: true,
			shorthandFirst: true
		}
	],
	"@stylistic/jsx-tag-spacing": [
		"error",
		{
			beforeClosing: "allow",
			beforeSelfClosing: "always",
			afterOpening: "never",
			closingSlash: "never"
		}
	]
};

export default jsxRules;
