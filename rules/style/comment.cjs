module.exports = {
	rules: {
		"capitalized-comments": [
			"off",
			"never",
			{
				block: {
					ignoreConsecutiveComments: true,
					ignoreInlineComments: true,
					ignorePattern: ".*"
				},
				line: {
					ignoreConsecutiveComments: true,
					ignoreInlineComments: true,
					ignorePattern: ".*"
				}
			}
		],
		"line-comment-position": [
			"error",
			{
				position: "above"
			}
		],
		"lines-around-comment": "off",
		"multiline-comment-style": ["error", "starred-block"],
		"no-inline-comments": "error",
		"spaced-comment": [
			"error",
			"always",
			{
				block: {
					balanced: true,
					exceptions: ["-", "+"],
					markers: [
						"=",
						"!",
						":",
						"::"
					]
				},
				line: {
					exceptions: ["-", "+"],
					markers: ["=", "!"]
				}
			}
		]
	}
};
