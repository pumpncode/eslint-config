// @flow

module.exports = {
	rules: {
		"for-direction": "error",
		"getter-return": [
			"error",
			{
				allowImplicit: true
			}
		],
		"no-async-promise-executor": "error",
		"no-await-in-loop": "off",
		"no-compare-neg-zero": "error",
		"no-cond-assign": "error",
		"no-console": [
			"error",
			{
				allow: [
					"warn",
					"error",
					"info"
				]
			}
		],
		"no-constant-condition": "warn",
		"no-control-regex": "error",
		"no-debugger": "error",
		"no-dupe-args": "error",
		"no-dupe-else-if": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-empty": "error",
		"no-empty-character-class": "error",
		"no-ex-assign": "error",
		"no-extra-boolean-cast": "error",
		"no-extra-parens": [
			"error",
			"all",
			{
				conditionalAssign: false,
				enforceForArrowConditionals: false,
				enforceForNewInMemberExpressions: false,
				ignoreJSX: "all",
				nestedBinaryExpressions: false,
				returnAssign: false
			}
		],
		"no-extra-semi": "error",
		"no-func-assign": "error",
		"no-import-assign": "error",
		"no-inner-declarations": "error",
		"no-invalid-regexp": "error",
		"no-irregular-whitespace": "error",
		"no-misleading-character-class": "error",
		"no-obj-calls": "error",
		"no-prototype-builtins": "error",
		"no-regex-spaces": "error",
		"no-setter-return": "error",
		"no-sparse-arrays": "error",
		"no-template-curly-in-string": "error",
		"no-unexpected-multiline": "error",
		"no-unreachable": "error",
		"no-unsafe-finally": "error",
		"no-unsafe-negation": "error",
		"no-useless-backreference": "error",
		"require-atomic-updates": "error",
		"use-isnan": "error",
		"valid-jsdoc": "off",
		"valid-typeof": [
			"error",
			{
				requireStringLiterals: true
			}
		]
	}
};
