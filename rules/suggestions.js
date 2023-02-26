const minIdentifierLength = 2;
const maxIdentifierLength = 30;
const maxClassesPerFile = 1;
const maxDepth = 8;
const maxLinesPerFile = 500;
const maxLinesPerFunction = 100;
const maxNestedCallbacks = 4;
const maxParameters = 3;
const maxStatements = 20;
const minKeysToSort = 10;

export default {
	"accessor-pairs": ["error"],
	"arrow-body-style": ["error"],
	"block-scoped-var": ["error"],
	camelcase: ["error"],
	"class-methods-use-this": ["error"],
	complexity: ["error"],
	"consistent-return": ["error"],
	curly: ["error"],
	"default-case": ["error"],
	"default-case-last": ["error"],
	"default-param-last": ["error"],
	"dot-notation": ["error"],
	eqeqeq: ["error"],
	"func-name-matching": ["error"],
	"func-style": ["error"],
	"grouped-accessor-pairs": ["error"],
	"id-denylist": ["error"],
	"id-length": [
		"error",
		{
			min: minIdentifierLength,
			max: maxIdentifierLength,
			properties: "never",
			exceptions: [
				"x",
				"y",
				"z"
			]
		}
	],
	"init-declarations": ["warn"],
	"logical-assignment-operators": ["error"],
	"max-classes-per-file": ["error", maxClassesPerFile],
	"max-depth": ["error", maxDepth],
	"max-lines": [
		"error",
		{
			max: maxLinesPerFile,
			skipBlankLines: true,
			skipComments: true
		}
	],
	"max-lines-per-function": [
		"error",
		{
			max: maxLinesPerFunction,
			skipBlankLines: true,
			skipComments: true
		}
	],
	"max-nested-callbacks": ["error", maxNestedCallbacks],
	"max-params": ["error", maxParameters],
	"max-statements": ["error", { max: maxStatements }],
	"multiline-comment-style": ["off"],
	"new-cap": ["error"],
	"no-alert": ["error"],
	"no-array-constructor": ["error"],
	"no-bitwise": ["error"],
	"no-caller": ["error"],
	"no-confusing-arrow": ["error"],
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
	"no-continue": ["off"],
	"no-div-regex": ["error"],
	"no-else-return": ["error"],
	"no-empty": ["error"],
	"no-empty-function": ["error"],
	"no-empty-static-block": ["error"],
	"no-eq-null": ["error"],
	"no-eval": ["error"],
	"no-extend-native": ["error"],
	"no-extra-bind": ["error"],
	"no-extra-label": ["error"],
	"no-floating-decimal": ["error"],
	"no-implicit-coercion": ["error"],
	"no-implicit-globals": ["error"],
	"no-implied-eval": ["error"],
	"no-inline-comments": ["error"],
	"no-invalid-this": ["error"],
	"no-iterator": ["error"],
	"no-label-var": ["error"],
	"no-labels": ["off"],
	"no-lone-blocks": ["error"],
	"no-lonely-if": ["error"],
	"no-loop-func": ["error"],
	"no-magic-numbers": [
		"error",
		{
			ignore: [
				-1,
				0,
				1
			],
			ignoreArrayIndexes: false,
			ignoreDefaultValues: true,
			ignoreClassFieldInitialValues: true,
			enforceConst: false,
			detectObjects: true
		}
	],
	"no-mixed-operators": ["error"],
	"no-multi-assign": ["error"],
	"no-multi-str": ["error"],
	"no-negated-condition": ["error"],
	"no-nested-ternary": ["error"],
	"no-new": ["error"],
	"no-new-func": ["error"],
	"no-new-object": ["error"],
	"no-new-wrappers": ["error"],
	"no-octal-escape": ["error"],
	"no-param-reassign": ["error"],
	"no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
	"no-proto": ["error"],
	"no-restricted-exports": [
		"error",
		{
			restrictDefaultExports: {
				named: true
			}
		}
	],
	"no-restricted-globals": ["error"],
	"no-restricted-imports": ["error"],
	"no-restricted-properties": ["error"],
	"no-restricted-syntax": ["error"],
	"no-return-assign": ["error"],
	"no-return-await": ["error"],
	"no-script-url": ["error"],
	"no-sequences": ["error"],
	"no-shadow": ["error"],
	"no-ternary": ["off"],
	"no-throw-literal": ["error"],
	"no-undef-init": ["error"],
	"no-undefined": ["error"],
	"no-underscore-dangle": ["error"],
	"no-unneeded-ternary": ["error"],
	"no-unused-expressions": ["error"],
	"no-useless-call": ["error"],
	"no-useless-computed-key": ["error"],
	"no-useless-concat": ["error"],
	"no-useless-constructor": ["error"],
	"no-useless-rename": ["error"],
	"no-useless-return": ["error"],
	"no-var": ["error"],
	"no-void": ["error"],
	"no-warning-comments": ["error"],
	"object-shorthand": ["error", "properties"],
	"one-var": ["error", "never"],
	"one-var-declaration-per-line": ["error", "always"],
	"operator-assignment": ["error", "always"],
	"prefer-arrow-callback": ["error"],
	"prefer-const": ["error"],
	"prefer-destructuring": ["error"],
	"prefer-exponentiation-operator": ["error"],
	"prefer-named-capture-group": ["error"],
	"prefer-numeric-literals": ["error"],
	"prefer-object-has-own": ["error"],
	"prefer-object-spread": ["error"],
	"prefer-promise-reject-errors": ["error"],
	"prefer-regex-literals": ["error"],
	"prefer-rest-params": ["error"],
	"prefer-spread": ["error"],
	"prefer-template": ["error"],
	"quote-props": ["error", "as-needed"],
	radix: ["error", "as-needed"],
	"require-await": ["error"],
	"require-unicode-regexp": ["error"],
	"sort-keys-plus/sort-keys": [
		"error",
		"asc",
		{
			minKeys: minKeysToSort,
			natural: true,
			allowLineSeparatedGroups: true
		}
	],
	"sort-vars": ["error"],
	"spaced-comment": ["error", "always"],
	strict: ["error", "never"],
	"symbol-description": ["error"],
	"vars-on-top": ["error"],
	yoda: ["error", "never"]
};
