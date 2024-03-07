const disallowRules = {
	"@stylistic/no-confusing-arrow": "error",
	"@stylistic/no-extra-parens": ["error", "functions"],
	"@stylistic/no-floating-decimal": "error",
	"@stylistic/no-mixed-spaces-and-tabs": "error",
	"@stylistic/no-multi-spaces": [
		"error",
		{
			exceptions: { Property: false }
		}
	],
	"@stylistic/no-multiple-empty-lines": [
		"error",
		{
			max: 1,
			maxBOF: 0,
			maxEOF: 1
		}
	],
	"@stylistic/no-tabs": "off",
	"@stylistic/no-trailing-spaces": [
		"error",
		{
			ignoreComments: false,
			skipBlankLines: false
		}
	],
	"@stylistic/no-whitespace-before-property": "error"
};

export default disallowRules;
