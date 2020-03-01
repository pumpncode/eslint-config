module.exports = {
	plugis: ["jsdoc"],
	rules: {
		"jsdoc/check-access": "warn",
		"jsdoc/check-alignment": "warn",
		"jsdoc/check-examples": [
			"warn",
			{
				captionRequired: true,
				configFile: "./.example.eslintrc"
			}
		],
		"jsdoc/check-indentation": "warn",
		"jsdoc/check-param-names": "warn",
		"jsdoc/check-property-names": "warn",
		"jsdoc/check-syntax": "warn",
		"jsdoc/check-tag-names": "warn",
		"jsdoc/check-types": "warn",
		"jsdoc/check-values": "warn",
		"jsdoc/empty-tags": "warn",
		"jsdoc/implements-on-classes": "warn",
		"jsdoc/match-description": "warn",
		"jsdoc/newline-after-description": "warn",
		"jsdoc/no-bad-blocks": "warn",
		"jsdoc/no-defaults": "warn",
		"jsdoc/no-undefined-types": "warn",
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
		"jsdoc/require-description-complete-sentence": "warn",
		"jsdoc/require-example": "warn",
		"jsdoc/require-file-overview": "off",
		"jsdoc/require-hyphen-before-param-description": "warn",
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
		"jsdoc/require-param": "warn",
		"jsdoc/require-param-description": "warn",
		"jsdoc/require-param-name": "warn",
		"jsdoc/require-param-type": "warn",
		"jsdoc/require-property": "warn",
		"jsdoc/require-property-description": "warn",
		"jsdoc/require-property-name": "warn",
		"jsdoc/require-property-type": "warn",
		"jsdoc/require-returns": "warn",
		"jsdoc/require-returns-check": "warn",
		"jsdoc/require-returns-description": "warn",
		"jsdoc/require-returns-type": "warn",
		"jsdoc/valid-types": "warn"
	}
};
