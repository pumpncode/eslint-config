// @flow

module.exports = {
	env: {
		browser: true,
		es2020: true
	},
	extends: [
		"./rules/best-practices.js",
		"./rules/errors.js",
		"./rules/es6.js",
		"./rules/imports.js",
		"./rules/node.js",
		"./rules/strict.js",
		"./rules/style.js",
		"./rules/variables.js"
	]
};
