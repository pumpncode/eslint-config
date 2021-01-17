module.exports = {
	env: {
		browser: true,
		es2020: true
	},
	extends: [
		"./rules/best-practices.cjs",
		"./rules/compat.cjs",
		"./rules/errors.cjs",
		"./rules/es6.cjs",
		"./rules/imports.cjs",
		"./rules/jsdoc.cjs",
		"./rules/node.cjs",
		"./rules/strict.cjs",
		"./rules/style.cjs",
		"./rules/variables.cjs"
	],
	ignorePatterns: ["dist/**", "node_modules/**"]
};
