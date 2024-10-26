const minIdentifierLength = 2;
const maxIdentifierLength = 30;
const maxClassesPerFile = 1;
const maxDepth = 8;
const maxLinesPerFile = 500;
const maxLinesPerFunction = 100;
const maxNestedCallbacks = 10;
const maxParameters = 3;
const maxStatements = 20;

const suggestionsRules = {
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
	"max-params": ["off", maxParameters],
	"max-statements": ["error", { max: maxStatements }],
	"accessor-pairs": "error",
	"arrow-body-style": "error",
	"block-scoped-var": "error",
	camelcase: "error",
	"capitalized-comments": "off",
	"class-methods-use-this": "error",
	complexity: "error",
	"consistent-return": "error",
	"consistent-this": "error",
	curly: "error",
	"default-case": "error",
	"default-case-last": "error",
	"default-param-last": "error",
	"dot-notation": "error",
	eqeqeq: "error",
	"func-name-matching": "error",
	"func-names": [
		"error",
		"as-needed",
		{ generators: "as-needed" }
	],
	"func-style": "error",
	"grouped-accessor-pairs": "error",
	"guard-for-in": "off",
	"id-denylist": "error",
	"id-length": [
		"error",
		{
			min: minIdentifierLength,
			max: maxIdentifierLength,
			exceptions: [
				"x",
				"y",
				"z"
			],
			properties: "never"
		}
	],
	"id-match": "off",
	"init-declarations": "off",
	"logical-assignment-operators": "error",
	"multiline-comment-style": "off",
	"new-cap": "error",
	"no-alert": "off",
	"no-array-constructor": "error",
	"no-bitwise": "error",
	"no-caller": "error",
	"no-case-declarations": "error",
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
	"no-continue": "off",
	"no-delete-var": "error",
	"no-div-regex": "error",
	"no-else-return": "error",
	"no-empty": "error",
	"no-empty-function": "error",
	"no-empty-static-block": "error",
	"no-eq-null": "error",
	"no-eval": "error",
	"no-extend-native": "error",
	"no-extra-bind": "error",
	"no-extra-boolean-cast": "error",
	"no-extra-label": "error",
	"no-global-assign": "error",
	"no-implicit-coercion": "error",
	"no-implicit-globals": "error",
	"no-implied-eval": "error",
	"no-inline-comments": [
		"error",
		{
			ignorePattern: "@type"
		}
	],
	"no-invalid-this": "error",
	"no-iterator": "error",
	"no-label-var": "error",
	"no-labels": "off",
	"no-lone-blocks": "error",
	"no-lonely-if": "error",
	"no-loop-func": "error",
	"no-magic-numbers": [
		"error",
		{
			detectObjects: false,
			enforceConst: false,
			ignore: [
				-1,
				"-1n",
				0,
				"0n",
				1,
				"1n",
				2,
				"2n",
				10,
				"10n"
			],
			ignoreArrayIndexes: false,
			ignoreClassFieldInitialValues: true,
			ignoreDefaultValues: true
		}
	],
	"no-multi-assign": "error",
	"no-multi-str": "error",
	"no-negated-condition": "off",
	"no-nested-ternary": "off",
	"no-new": "error",
	"no-new-func": "error",
	"no-new-wrappers": "error",
	"no-nonoctal-decimal-escape": "error",
	"no-object-constructor": "error",
	"no-octal": "error",
	"no-octal-escape": "error",
	"no-param-reassign": "error",
	"no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
	"no-proto": "error",
	"no-redeclare": "error",
	"no-regex-spaces": "error",
	"no-restricted-exports": [
		"error",
		{
			restrictDefaultExports: {
				named: true
			}
		}
	],
	"no-restricted-globals": "error",
	"no-restricted-imports": "error",
	"no-restricted-properties": "error",
	"no-restricted-syntax": "error",
	"no-return-assign": "error",
	"no-script-url": "error",
	"no-sequences": "error",
	"no-shadow": "error",
	"no-shadow-restricted-names": "error",
	"no-ternary": "off",
	"no-throw-literal": "error",
	"no-undef-init": "error",
	"no-undefined": "off",
	"no-underscore-dangle": "error",
	"no-unneeded-ternary": "error",
	"no-unused-expressions": "error",
	"no-unused-labels": "error",
	"no-useless-call": "error",
	"no-useless-catch": "error",
	"no-useless-computed-key": "error",
	"no-useless-concat": "error",
	"no-useless-constructor": "error",
	"no-useless-escape": "error",
	"no-useless-rename": "error",
	"no-useless-return": "error",
	"no-var": "error",
	"no-void": "error",
	"no-warning-comments": "off",
	"no-with": "error",
	"object-shorthand": ["error", "properties"],
	"one-var": ["error", "never"],
	"operator-assignment": ["error", "always"],
	"prefer-arrow-callback": "error",
	"prefer-const": "error",
	"prefer-destructuring": "error",
	"prefer-exponentiation-operator": "error",
	"prefer-named-capture-group": "off",
	"prefer-numeric-literals": "error",
	"prefer-object-has-own": "error",
	"prefer-object-spread": "error",
	"prefer-promise-reject-errors": "error",
	"prefer-regex-literals": "error",
	"prefer-rest-params": "error",
	"prefer-spread": "error",
	"prefer-template": "error",
	radix: ["error", "as-needed"],
	"require-await": "error",
	"require-unicode-regexp": "off",
	"require-yield": "error",
	"sort-imports": "off",
	"sort-keys": "off",
	"sort-vars": "off",
	strict: ["error", "never"],
	"symbol-description": "error",
	"vars-on-top": "error",
	yoda: ["error", "never"]
};

export default suggestionsRules;
