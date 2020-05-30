// @flow

module.exports = {
	overrides: [
		{
			files: ["flow-typed/**/**.js"],
			rules: {
				camelcase: "off",
				"flowtype/require-types-at-top": "off"
			}
		}
	],
	plugins: ["flowtype"],
	rules: {
		"flowtype/boolean-style": ["error", "boolean"],
		"flowtype/define-flow-type": "warn",
		"flowtype/delimiter-dangle": ["error", "never"],
		"flowtype/generic-spacing": ["error", "never"],
		"flowtype/no-primitive-constructor-types": "error",
		"flowtype/no-weak-types": "error",
		"flowtype/object-type-delimiter": ["error", "comma"],
		"flowtype/require-exact-type": ["error", "always"],
		"flowtype/require-indexer-name": ["error", "always"],
		"flowtype/require-parameter-type": ["error"],
		"flowtype/require-return-type": ["error", "always"],
		"flowtype/require-types-at-top": ["error", "always"],
		"flowtype/require-valid-file-annotation": ["error", "always"],
		"flowtype/semi": ["error", "always"],
		"flowtype/space-after-type-colon": ["error", "always"],
		"flowtype/space-before-generic-bracket": ["error", "never"],
		"flowtype/space-before-type-colon": ["error", "never"],
		"flowtype/union-intersection-spacing": ["error", "always"],
		"flowtype/use-flow-type": "error",
		"flowtype/valid-syntax": "error"
	},
	settings: {
		flowtype: {
			onlyFilesWithFlowAnnotation: false
		}
	}
};
