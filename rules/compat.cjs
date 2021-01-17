module.exports = {
	plugins: ["compat"],
	rules: {
		"compat/compat": "error"
	},
	settings: {
		polyfills: [
			"Array",
			"Number",
			"Object",
			"Promise",
			"Set",
			"fetch"
		]
	}
};
