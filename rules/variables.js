// @flow
const confusingBrowserGlobals = require("confusing-browser-globals");

module.exports = {
	rules: {
		"init-declarations": ["error", "always"],
		"no-delete-var": "error",
		"no-label-var": "error",
		"no-restricted-globals": [
			"error",
			"isFinite",
			"isNaN"
		].concat(confusingBrowserGlobals),
		"no-shadow": "error",
		"no-shadow-restricted-names": "error",
		"no-undef": "error",
		"no-undef-init": "error",
		"no-undefined": "off",
		"no-unused-vars": [
			"error",
			{
				args: "after-used",
				ignoreRestSiblings: true,
				vars: "all"
			}
		],
		"no-use-before-define": [
			"error",
			{
				classes: true,
				functions: true,
				variables: true
			}
		]
	}
};
