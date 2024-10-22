const jsxRules = {
	"@stylistic/jsx-child-element-spacing": "error",
	"@stylistic/jsx-closing-tag-location": ["error", "line-aligned"],
	"@stylistic/jsx-equals-spacing": ["error", "never"],
	"@stylistic/jsx-max-props-per-line": [
		"error",
		{
			maximum: 1,
			when: "multiline"
		}
	],
	"@stylistic/jsx-one-expression-per-line": ["error", { allow: "single-line" }],
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
