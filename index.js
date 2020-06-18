module.exports = {
	env: {
		browser: true,
		es2020: true
	},
	extends: [
		"./rules/best-practices.js",
		"./rules/compat.js",
		"./rules/errors.js",
		"./rules/es6.js",
		"./rules/imports.js",
		"./rules/jsdoc.js",
		"./rules/node.js",
		"./rules/strict.js",
		"./rules/style.js",
		"./rules/variables.js"
	],
	ignorePatterns: ["dist/**", "node_modules/**"]
};
