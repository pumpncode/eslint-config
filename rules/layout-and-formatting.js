const minItemsForArrayNewline = 3;
const maxLineLength = 100;
const tabWidth = 4;
const maxIgnoredChainDepth = 3;
const minPropertiesForObjectNewline = 3;

export default {
	"array-bracket-newline": [
		"error",
		{
			multiline: true,
			minItems: minItemsForArrayNewline
		}
	],
	"array-bracket-spacing": ["error", "never"],
	"array-element-newline": [
		"error",
		{
			multiline: true,
			minItems: minItemsForArrayNewline
		}
	],
	"arrow-parens": ["error", "always"],
	"arrow-spacing": [
		"error",
		{
			before: true,
			after: true
		}
	],
	"block-spacing": ["error", "always"],
	"brace-style": ["error", "stroustrup"],
	"comma-dangle": ["error", "never"],
	"comma-spacing": [
		"error",
		{
			before: false,
			after: true
		}
	],
	"comma-style": ["error", "last"],
	"computed-property-spacing": ["error", "never"],
	"dot-location": ["error", "property"],
	"eol-last": ["error", "always"],
	"func-call-spacing": ["error", "never"],
	"function-call-argument-newline": ["error", "consistent"],
	"function-paren-newline": ["error", "multiline-arguments"],
	"generator-star-spacing": [
		"error",
		{
			before: false,
			after: true
		}
	],
	"implicit-arrow-linebreak": ["error", "beside"],
	indent: [
		"error",
		"tab",
		{ SwitchCase: 1 }
	],
	"jsx-quotes": ["error", "prefer-double"],
	"key-spacing": [
		"error",
		{
			beforeColon: false,
			afterColon: true,
			mode: "strict"
		}
	],
	"keyword-spacing": [
		"error",
		{
			before: true,
			after: true
		}
	],
	"line-comment-position": ["error", { position: "above" }],
	"linebreak-style": ["off"],
	"lines-around-comment": [
		"error",
		{
			afterBlockComment: false,
			afterLineComment: false,
			allowArrayEnd: false,
			allowArrayStart: false,
			allowBlockEnd: false,
			allowBlockStart: false,
			allowClassEnd: false,
			allowClassStart: false,
			allowObjectEnd: false,
			allowObjectStart: false,
			beforeBlockComment: true,
			beforeLineComment: false
		}
	],
	"lines-between-class-members": ["error", "always"],
	"max-len": [
		"error",
		{
			code: maxLineLength,
			tabWidth,
			ignoreComments: false,
			ignoreTrailingComments: false,
			ignoreUrls: true,
			ignoreStrings: false,
			ignoreTemplateLiterals: true,
			ignoreRegExpLiterals: true
		}
	],
	"max-statements-per-line": ["error", { max: 1 }],
	"multiline-ternary": ["error", "always-multiline"],
	"new-parens": ["error", "always"],
	"newline-per-chained-call": [
		"error",
		{
			ignoreChainWithDepth: maxIgnoredChainDepth
		}
	],
	"no-extra-parens": ["error", "functions"],
	"no-multi-spaces": ["error", { exceptions: { Property: false } }],
	"no-multiple-empty-lines": [
		"error",
		{
			max: 1,
			maxEOF: 1,
			maxBOF: 0
		}
	],
	"no-tabs": ["off"],
	"no-trailing-spaces": [
		"error",
		{
			skipBlankLines: false,
			ignoreComments: false
		}
	],
	"no-whitespace-before-property": ["error"],
	"nonblock-statement-body-position": ["error", "beside"],
	"object-curly-newline": [
		"error",
		{
			multiline: true,
			minProperties: minPropertiesForObjectNewline,
			consistent: true
		}
	],
	"object-curly-spacing": ["error", "always"],
	"object-property-newline": [
		"error",
		{
			allowAllPropertiesOnSameLine: false
		}
	],
	"operator-linebreak": [
		"error",
		"after",
		{
			overrides: {
				"?": "before",
				":": "before"
			}
		}
	],
	"padded-blocks": [
		"error",
		{
			blocks: "never",
			classes: "always",
			switches: "never"
		}
	],
	"padding-line-between-statements": [
		"error",
		{
			blankLine: "always",
			prev: "*",
			next: "return"
		},
		{
			blankLine: "always",
			prev: [
				"const",
				"let",
				"var"
			],
			next: "*"
		},
		{
			blankLine: "any",
			prev: [
				"const",
				"let",
				"var"
			],
			next: [
				"const",
				"let",
				"var"
			]
		},
		{
			blankLine: "always",
			prev: [
				"return",
				"break",
				"block",
				"block-like"
			],
			next: ["case", "default"]
		}
	],
	quotes: ["error", "double"],
	"rest-spread-spacing": ["error", "never"],
	semi: ["error", "always"],
	"semi-spacing": [
		"error",
		{
			before: false,
			after: true

		}
	],
	"semi-style": ["error", "last"],
	"space-before-blocks": ["error", "always"],
	"space-before-function-paren": [
		"error",
		{
			anonymous: "always",
			named: "never",
			asyncArrow: "always"
		}
	],
	"space-in-parens": ["error", "never"],
	"space-infix-ops": ["error", { int32Hint: false }],
	"space-unary-ops": [
		"error",
		{
			words: true,
			nonwords: false,
			overrides: {}
		}
	],
	"switch-colon-spacing": [
		"error",
		{
			before: false,
			after: true
		}
	],
	"template-curly-spacing": ["error", "never"],
	"template-tag-spacing": ["error", "never"],
	"unicode-bom": ["error", "never"],
	"wrap-iife": ["error", "inside"],
	"wrap-regex": ["off"],
	"yield-star-spacing": [
		"error",
		{
			before: false,
			after: true
		}
	]
};
