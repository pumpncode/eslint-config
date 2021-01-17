module.exports = {
	extends: ["./index.cjs"],
	overrides: [
		{
			files: ["**/**.cjs"],
			rules: {
				"import/no-commonjs": "off",
				"import/no-unused-modules": "off"
			}
		}
	],
	rules: {}
};
