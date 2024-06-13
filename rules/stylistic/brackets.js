import { minItemsForArrayNewline } from "./_common/_exports.js";

const minPropertiesForObjectNewline = 3;
const wrapMultilinesDefault = "parens-new-line";

const bracketsRules = {
	"@stylistic/array-bracket-newline": [
		"error",
		{
			minItems: minItemsForArrayNewline,
			multiline: true
		}
	],
	"@stylistic/array-bracket-spacing": ["error", "never"],
	"@stylistic/arrow-parens": ["error", "always"],
	"@stylistic/brace-style": ["error", "stroustrup"],
	"@stylistic/function-paren-newline": ["error", "multiline-arguments"],
	"@stylistic/jsx-closing-bracket-location": "error",
	"@stylistic/jsx-curly-brace-presence": [
		"error",
		{
			children: "never",
			propElementValues: "always",
			props: "never"
		}
	],
	"@stylistic/jsx-curly-newline": [
		"error",
		{
			multiline: "consistent",
			singleline: "forbid"
		}
	],
	"@stylistic/jsx-curly-spacing": [
		"error",
		{
			attributes: true,
			children: true,
			when: "never"
		}
	],
	"@stylistic/jsx-wrap-multilines": [
		"error",
		{
			arrow: wrapMultilinesDefault,
			assignment: wrapMultilinesDefault,
			condition: wrapMultilinesDefault,
			declaration: wrapMultilinesDefault,
			logical: wrapMultilinesDefault,
			prop: wrapMultilinesDefault,
			propertyValue: wrapMultilinesDefault,
			return: wrapMultilinesDefault
		}
	],
	"@stylistic/new-parens": ["error", "always"],
	"@stylistic/object-curly-newline": [
		"error",
		{
			minProperties: minPropertiesForObjectNewline,
			consistent: true,
			multiline: true
		}
	],
	"@stylistic/object-curly-spacing": ["error", "always"],
	"@stylistic/space-before-function-paren": [
		"error",
		{
			anonymous: "always",
			asyncArrow: "always",
			named: "never"
		}
	],
	"@stylistic/space-in-parens": ["error", "never"],
	"@stylistic/template-curly-spacing": ["error", "never"],
	"@stylistic/wrap-iife": ["error", "inside"],
	"@stylistic/wrap-regex": "off"
};

export default bracketsRules;
