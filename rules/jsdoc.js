export default {
	"jsdoc/check-access": ["warn"],
	"jsdoc/check-alignment": ["warn", "always"],
	"jsdoc/check-examples": [
		"off",
		{
			matchingFileName: "jsdoc-example.js"
		}
	],
	"jsdoc/check-indentation": [
		"warn",
		{
			excludeTags: ["description", "example"]
		}
	],
	"jsdoc/check-param-names": ["warn"],
	"jsdoc/check-property-names": ["warn"],
	"jsdoc/check-syntax": ["warn"],
	"jsdoc/check-tag-names": ["warn"],
	"jsdoc/check-types": ["warn"],
	"jsdoc/check-values": ["warn"],
	"jsdoc/empty-tags": ["warn"],
	"jsdoc/implements-on-classes": ["warn"],
	"jsdoc/match-description": ["warn"],
	"jsdoc/tag-lines": ["warn", "any", { startLines: 1 }],
	"jsdoc/no-bad-blocks": ["warn"],
	"jsdoc/no-defaults": ["warn"],
	"jsdoc/no-undefined-types": ["warn"],
	"jsdoc/require-description": [
		"warn",
		{
			contexts: [
				"Program",
				"ArrowFunctionExpression",
				"FunctionDeclaration",
				"FunctionExpression",
				"VariableDeclaration"
			]
		}
	],
	"jsdoc/require-description-complete-sentence": ["warn"],
	"jsdoc/require-example": ["off"],
	"jsdoc/require-file-overview": ["off"],
	"jsdoc/require-hyphen-before-param-description": ["warn"],
	"jsdoc/require-jsdoc": [
		"warn",
		{
			contexts: [
				"ArrowFunctionExpression",
				"ClassDeclaration",
				"ClassExpression",
				"FunctionDeclaration",
				"FunctionExpression"
			],
			publicOnly: true,
			require: {
				ArrowFunctionExpression: true,
				ClassDeclaration: true,
				ClassExpression: true,
				FunctionDeclaration: true,
				FunctionExpression: true,
				MethodDefinition: true
			}
		}
	],
	"jsdoc/require-param": ["warn"],
	"jsdoc/require-param-description": ["warn"],
	"jsdoc/require-param-name": ["warn"],
	"jsdoc/require-param-type": ["warn"],
	"jsdoc/require-property": ["warn"],
	"jsdoc/require-property-description": ["warn"],
	"jsdoc/require-property-name": ["warn"],
	"jsdoc/require-property-type": ["warn"],
	"jsdoc/require-returns": ["warn"],
	"jsdoc/require-returns-check": ["warn"],
	"jsdoc/require-returns-description": ["warn"],
	"jsdoc/require-returns-type": ["warn"],
	"jsdoc/valid-types": ["warn"]
};
