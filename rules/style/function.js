module.exports = {
	rules: {
		"func-call-spacing": ["error", "never"],
		"func-name-matching": [
			"off",
			"always",
			{
				considerPropertyDescriptor: true,
				includeCommonJSModuleExports: false
			}
		],
		"func-names": ["error", "never"],
		"func-style": ["error", "expression"],
		"function-call-argument-newline": ["error", "consistent"],
		"function-paren-newline": ["error", "consistent"],
		"max-lines-per-function": [
			"error",
			{
				IIFEs: true,
				max: 50,
				skipBlankLines: true,
				skipComments: true
			}
		],
		"space-before-function-paren": ["error", "never"]
	}
};
