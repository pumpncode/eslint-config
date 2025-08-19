import { minItemsForArrayNewline } from "./_common/_exports.js";

const maxIgnoredChainDepth = 3;

const lineBreaksRules = {
	"@stylistic/array-element-newline": [
		"error",
		{
			minItems: minItemsForArrayNewline,
			multiline: true
		}
	],
	"@stylistic/eol-last": ["error", "always"],
	"@stylistic/function-call-argument-newline": ["error", "consistent"],
	"@stylistic/implicit-arrow-linebreak": ["error", "beside"],
	"@stylistic/jsx-first-prop-new-line": ["error", "multiline"],
	"@stylistic/jsx-function-call-newline": ["error", "multiline"],
	"@stylistic/jsx-newline": "error",
	"@stylistic/linebreak-style": ["error", "unix"],
	"@stylistic/lines-between-class-members": ["error", "always"],
	"@stylistic/newline-per-chained-call": [
		"error",
		{
			ignoreChainWithDepth: maxIgnoredChainDepth
		}
	],
	"@stylistic/object-property-newline": [
		"error",
		{
			allowAllPropertiesOnSameLine: false
		}
	],
	"@stylistic/padding-line-between-statements": [
		"error",
		{
			prev: "*",
			next: "return",
			blankLine: "always"
		},
		{
			prev: ["const", "let", "var"],
			next: "*",
			blankLine: "always"
		},
		{
			prev: ["const", "let", "var"],
			next: ["const", "let", "var"],
			blankLine: "any"
		},
		{
			prev: [
				"return",
				"break",
				"block",
				"block-like"
			],
			next: ["case", "default"],
			blankLine: "always"
		}
	]
};

export default lineBreaksRules;
