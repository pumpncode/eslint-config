const operatorsRules = {
	"@stylistic/dot-location": ["error", "property"],
	"@stylistic/multiline-ternary": ["error", "always-multiline"],
	"@stylistic/no-mixed-operators": "error",
	"@stylistic/operator-linebreak": [
		"error",
		"after",
		{
			overrides: {
				":": "before",
				"?": "before"
			}
		}
	],
	"@stylistic/space-infix-ops": ["error", { int32Hint: false }],
	"@stylistic/space-unary-ops": [
		"error",
		{
			nonwords: false,
			overrides: {},
			words: true
		}
	]
};

export default operatorsRules;
