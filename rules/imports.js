module.exports = {
	env: {
		es6: true
	},
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module"
	},
	plugins: ["import"],
	rules: {
		"import/default": "error",
		"import/dynamic-import-chunkname": [
			"off",
			{
				importFunctions: [],
				webpackChunknameFormat: "[0-9a-zA-Z-_/.]+"
			}
		],
		"import/export": "error",
		"import/exports-last": "error",
		"import/extensions": ["error", "ignorePackages"],
		"import/first": "error",
		"import/group-exports": "off",
		"import/max-dependencies": [
			"error",
			{
				max: 10
			}
		],
		"import/named": "error",
		"import/namespace": "error",
		"import/newline-after-import": "error",
		"import/no-absolute-path": "error",
		"import/no-amd": "error",
		"import/no-anonymous-default-export": [
			"off",
			{
				allowAnonymousClass: false,
				allowAnonymousFunction: false,
				allowArray: false,
				allowArrowFunction: false,
				allowLiteral: false,
				allowObject: false
			}
		],
		"import/no-commonjs": "error",
		"import/no-cycle": [
			"error",
			{
				maxDepth: Infinity
			}
		],
		"import/no-default-export": "off",
		"import/no-deprecated": "error",
		"import/no-duplicates": "error",
		"import/no-dynamic-require": "error",
		"import/no-extraneous-dependencies": [
			"error",
			{
				devDependencies: [
					"test/**",
					"tests/**",
					"spec/**",
					"**/__tests__/**",
					"**/__mocks__/**",
					"test.{js,jsx}",
					"test-*.{js,jsx}",
					"**/*{.,_}{test,spec}.{js,jsx}",
					"**/jest.config.js",
					"**/jest.setup.js",
					"**/vue.config.js",
					"**/webpack.config.js",
					"**/webpack.config.*.js",
					"**/rollup.config.js",
					"**/rollup.config.*.js",
					"**/gulpfile.js",
					"**/gulpfile.*.js",
					"**/Gruntfile{,.js}",
					"**/protractor.conf.js",
					"**/protractor.conf.*.js",
					"**/karma.conf.js"
				],
				optionalDependencies: false
			}
		],
		"import/no-internal-modules": [
			"off",
			{
				allow: []
			}
		],
		"import/no-mutable-exports": "error",
		"import/no-named-as-default": "error",
		"import/no-named-as-default-member": "error",
		"import/no-named-default": "error",
		"import/no-named-export": "off",
		"import/no-namespace": "error",
		"import/no-nodejs-modules": "off",
		"import/no-relative-parent-imports": "off",
		"import/no-restricted-paths": "off",
		"import/no-self-import": "error",
		"import/no-unassigned-import": "error",
		"import/no-unresolved": [
			"error",
			{
				caseSensitive: true,
				commonjs: true
			}
		],
		"import/no-unused-modules": [
			"error",
			{
				ignoreExports: [`${process.cwd()}/index.js`, `${process.cwd()}/src/index.js`],
				missingExports: true,
				unusedExports: true
			}
		],
		"import/no-useless-path-segments": [
			"error",
			{
				commonjs: true
			}
		],
		"import/no-webpack-loader-syntax": "error",
		"import/order": [
			"error",
			{
				groups: [
					"builtin",
					"external",
					"parent",
					"sibling",
					"index"
				],
				"newlines-between": "always"
			}
		],
		"import/prefer-default-export": "error",
		"import/unambiguous": "off"
	},
	settings: {
		"import/core-modules": [],
		"import/extensions": [
			".js",
			".mjs",
			".jsx"
		],
		"import/ignore": ["node_modules", "\\.(coffee|scss|css|less|hbs|svg|json)$"],
		"import/resolver": {
			node: {
				extensions: [
					".mjs",
					".js",
					".json"
				]
			}
		}
	}
};
