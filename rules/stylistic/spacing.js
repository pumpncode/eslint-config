const spacingRules = {
	"@stylistic/arrow-spacing": [
		"error",
		{
			before: true,
			after: true
		}
	],
	"@stylistic/block-spacing": ["error", "always"],
	"@stylistic/computed-property-spacing": ["error", "never"],
	"@stylistic/function-call-spacing": ["error", "never"],
	"@stylistic/generator-star-spacing": [
		"error",
		{
			before: false,
			after: true
		}
	],
	"@stylistic/key-spacing": [
		"error",
		{
			beforeColon: false,
			afterColon: true,
			mode: "strict"
		}
	],
	"@stylistic/keyword-spacing": [
		"error",
		{
			before: true,
			after: true
		}
	],
	"@stylistic/rest-spread-spacing": ["error", "never"],
	"@stylistic/space-before-blocks": ["error", "always"],
	"@stylistic/switch-colon-spacing": [
		"error",
		{
			before: false,
			after: true
		}
	],
	"@stylistic/template-tag-spacing": ["error", "never"],
	"@stylistic/yield-star-spacing": [
		"error",
		{
			before: false,
			after: true
		}
	]
};

export default spacingRules;
