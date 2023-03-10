const maxDependencies = 10;

export default {
	"import/default": ["error"],
	"import/dynamic-import-chunkname": [
		"off",
		{
			importFunctions: [],
			webpackChunknameFormat: "[0-9a-zA-Z-_/.]+"
		}
	],
	"import/export": ["error"],
	"import/exports-last": ["error"],
	"import/extensions": ["error", "ignorePackages"],
	"import/first": ["error"],
	"import/group-exports": ["off"],
	"import/max-dependencies": [
		"error",
		{
			max: maxDependencies
		}
	],
	"import/named": ["error"],
	"import/namespace": ["error"],
	"import/newline-after-import": ["error"],
	"import/no-absolute-path": ["error"],
	"import/no-amd": ["error"],
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
	"import/no-commonjs": ["error"],
	"import/no-cycle": [
		"error",
		{
			maxDepth: Infinity
		}
	],
	"import/no-default-export": ["off"],
	"import/no-deprecated": ["error"],
	"import/no-duplicates": ["error"],
	"import/no-dynamic-require": ["error"],
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
				"**/karma.conf.js",
				"**/eslint.config.js",
				"**/.np-config.cjs"
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
	"import/no-mutable-exports": ["error"],
	"import/no-named-as-default": ["error"],
	"import/no-named-as-default-member": ["error"],
	"import/no-named-default": ["error"],
	"import/no-named-export": ["off"],
	"import/no-namespace": ["error"],
	"import/no-nodejs-modules": ["off"],
	"import/no-relative-parent-imports": ["off"],
	"import/no-restricted-paths": ["off"],
	"import/no-self-import": ["error"],
	"import/no-unassigned-import": ["error"],
	"import/no-unresolved": [
		"error",
		{
			caseSensitive: true,
			commonjs: true
		}
	],
	"import/no-unused-modules": [
		"off",
		{
			ignoreExports: ["./main.js"],
			missingExports: true,
			unusedExports: false
		}
	],
	"import/no-useless-path-segments": [
		"error",
		{
			commonjs: true
		}
	],
	"import/no-webpack-loader-syntax": ["error"],
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
	"import/prefer-default-export": ["off"],
	"import/unambiguous": "off"
};
