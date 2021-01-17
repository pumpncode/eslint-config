module.exports = {
	rules: {
		"implicit-arrow-linebreak": ["error", "beside"],
		indent: [
			"error",
			"tab",
			{
				ArrayExpression: 1,
				CallExpression: {
					arguments: 1
				},
				FunctionDeclaration: {
					body: 1,
					parameters: 1
				},
				FunctionExpression: {
					body: 1,
					parameters: 1
				},
				ImportDeclaration: 1,
				ObjectExpression: 1,
				SwitchCase: 1,
				VariableDeclarator: 1,
				flatTernaryExpressions: false,
				ignoreComments: false,
				ignoredNodes: [
					"JSXElement",
					"JSXElement > *",
					"JSXAttribute",
					"JSXIdentifier",
					"JSXNamespacedName",
					"JSXMemberExpression",
					"JSXSpreadAttribute",
					"JSXExpressionContainer",
					"JSXOpeningElement",
					"JSXClosingElement",
					"JSXFragment",
					"JSXOpeningFragment",
					"JSXClosingFragment",
					"JSXText",
					"JSXEmptyExpression",
					"JSXSpreadChild"
				],
				outerIIFEBody: 1
			}
		],
		"keyword-spacing": [
			"error",
			{
				after: true,
				before: true,
				overrides: {
					case: {
						after: true
					},
					return: {
						after: true
					},
					throw: {
						after: true
					}
				}
			}
		],
		"linebreak-style": ["error", "unix"],
		"lines-between-class-members": [
			"error",
			"always",
			{
				exceptAfterSingleLine: false
			}
		],
		"newline-per-chained-call": "error",
		"no-multiple-empty-lines": [
			"error",
			{
				max: 1,
				maxBOF: 0,
				maxEOF: 0
			}
		],
		"no-tabs": "off",
		"operator-linebreak": [
			"error",
			"after",
			{
				overrides: {
					":": "before",
					"?": "before",
					"|>": "before"
				}
			}
		],
		"padded-blocks": [
			"error",
			{
				blocks: "never",
				classes: "never",
				switches: "never"
			},
			{
				allowSingleLineBlocks: true
			}
		],
		"padding-line-between-statements": [
			"error",
			{
				blankLine: "always",
				next: "let",
				prev: "const"
			},
			{
				blankLine: "always",
				next: "const",
				prev: "let"
			},
			...[
				"return",
				"export",
				"while",
				"do",
				"for",
				"if",
				"switch"
			].map((statement) => ({
				blankLine: "always",
				next: statement,
				prev: "*"
			})),
			...[
				"while",
				"do",
				"for",
				"if",
				"switch"
			].map((statement) => ({
				blankLine: "always",
				next: "*",
				prev: statement
			}))
		],
		"switch-colon-spacing": [
			"error",
			{
				after: true,
				before: false
			}
		],
		"template-tag-spacing": ["error", "never"]
	}
};
