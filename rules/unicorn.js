/**
 * @import { Linter } from "eslint";
 */

const hexadecimalGroupLength = 2;
const binaryGroupLength = 4;
const octalGroupLength = 4;
const numberGroupLength = 3;

const patterns = {
	"'": "’",
	"(?<=“[^“]*?\\s)['‘]([^'‘]+?)['’](?=\\s[^“]*?”)": "‘$1’",
	"(?<=[!?])”\\.(?=(?:(?:\\s+[\\p{Letter}\\p{Number}])|$))": "”",
	"(?<=[!?])\\.": "",
	"(?<=[\\p{Letter}\\p{Number}] )-+(?= [\\p{Letter}\\p{Number}])": "—",
	"(?<=\\p{Punctuation})\\p{Zs}{2,}(?=[\\p{Letter}\\p{Number}])": " ",
	"([\"'])((?:\\\\.|[^\\\\])*?)\\1": "“$2”",
	"-->": "⟶",
	"->": "→",
	"\\.”\\.(?=(?:(?:\\s+[\\p{Letter}\\p{Number}])|$))": ".”",
	"<-": "←",
	"<--": "⟵",
	"<-->": "⟷",
	"<->": "↔",
	"<=": "≤",
	"<==": "⇐",
	"<===": "⟸",
	"<==>": "⟺",
	"<=>": "⇔",
	"===>": "⟹",
	"==>": "⇒",
	">=": "≥",
	"\\.\\.(?=(?:(?:\\s+[\\p{Letter}\\p{Number}])|$))": ".",
	"\\.\\.\\.": "…"
};

/**
 * @satisfies {Linter.RulesRecord}
 */
const unicornRules = {
	"unicorn/better-dom-traversing": "error",
	"unicorn/catch-error-name": "error",
	"unicorn/consistent-assert": "error",
	"unicorn/consistent-compound-words": "error",
	"unicorn/consistent-date-clone": "error",
	"unicorn/consistent-destructuring": "error",
	"unicorn/consistent-empty-array-spread": "error",
	"unicorn/consistent-existence-index-check": "error",
	"unicorn/consistent-function-scoping": "error",
	"unicorn/consistent-json-file-read": "error",
	"unicorn/consistent-template-literal-escape": "error",
	"unicorn/custom-error-definition": "error",
	"unicorn/dom-node-dataset": "error",
	"unicorn/empty-brace-spaces": "error",
	"unicorn/error-message": "error",
	"unicorn/escape-case": ["error", "uppercase"],
	"unicorn/expiring-todo-comments": [
		"error",
		{
			allowWarningComments: false,
			terms: ["todo", "fixme"]
		}
	],
	"unicorn/explicit-length-check": "error",
	"unicorn/filename-case": [
		"error",
		{
			case: "kebabCase",
			ignore: [/\(_[_a-z][\-_a-z]+\)/v]
		}
	],
	"unicorn/import-style": "error",
	"unicorn/isolated-functions": [
		"error",
		{
			comments: ["@isolated"],
			functions: ["makeSynchronous"],
			overrideGlobals: undefined,
			selectors: []
		}
	],
	"unicorn/new-for-builtins": "error",
	"unicorn/no-abusive-eslint-disable": "error",
	"unicorn/no-accessor-recursion": "error",
	"unicorn/no-anonymous-default-export": "error",
	"unicorn/no-array-callback-reference": "off",
	"unicorn/no-array-fill-with-reference-type": "error",
	"unicorn/no-array-for-each": "error",
	"unicorn/no-array-from-fill": "error",
	"unicorn/no-array-method-this-argument": "error",
	"unicorn/no-array-reduce": "off",
	"unicorn/no-array-reverse": "error",
	"unicorn/no-array-sort": "off",
	"unicorn/no-await-expression-member": "error",
	"unicorn/no-await-in-promise-methods": "error",
	"unicorn/no-blob-to-file": "error",
	"unicorn/no-canvas-to-image": "error",
	"unicorn/no-confusing-array-splice": "error",
	"unicorn/no-console-spaces": "error",
	"unicorn/no-document-cookie": "error",
	"unicorn/no-duplicate-set-values": "error",
	"unicorn/no-empty-file": ["error", { allowComments: true }],
	"unicorn/no-exports-in-scripts": "error",
	"unicorn/no-for-loop": "error",
	"unicorn/no-hex-escape": "error",
	"unicorn/no-immediate-mutation": "error",
	"unicorn/no-incorrect-query-selector": "error",
	"unicorn/no-instanceof-array": "error",
	"unicorn/no-instanceof-builtins": "error",
	"unicorn/no-invalid-fetch-options": "error",
	"unicorn/no-invalid-file-input-accept": "error",
	"unicorn/no-invalid-remove-event-listener": "error",
	"unicorn/no-keyword-prefix": [
		"error",
		{
			disallowedPrefixes: ["new"],
			onlyCamelCase: true
		}
	],
	"unicorn/no-late-current-target-access": "error",
	"unicorn/no-lonely-if": "error",
	"unicorn/no-magic-array-flat-depth": "error",
	"unicorn/no-manually-wrapped-comments": "error",
	"unicorn/no-named-default": "error",
	"unicorn/no-negated-condition": "error",
	"unicorn/no-negation-in-equality-check": "error",
	"unicorn/no-nested-ternary": "error",
	"unicorn/no-new-array": "error",
	"unicorn/no-new-buffer": "error",
	"unicorn/no-null": "off",
	"unicorn/no-object-as-default-parameter": "error",
	"unicorn/no-process-exit": "error",
	"unicorn/no-single-promise-in-promise-methods": "error",
	"unicorn/no-static-only-class": "error",
	"unicorn/no-thenable": "error",
	"unicorn/no-this-assignment": "error",
	"unicorn/no-this-outside-of-class": "error",
	"unicorn/no-typeof-undefined": "error",
	"unicorn/no-unnecessary-array-flat-depth": "error",
	"unicorn/no-unnecessary-array-splice-count": "error",
	"unicorn/no-unnecessary-await": "error",
	"unicorn/no-unnecessary-nested-ternary": "error",
	"unicorn/no-unnecessary-polyfills": "error",
	"unicorn/no-unnecessary-slice-end": "error",
	"unicorn/no-unreadable-array-destructuring": "error",
	"unicorn/no-unreadable-iife": "error",
	"unicorn/no-unused-array-method-return": "error",
	"unicorn/no-unused-properties": "error",
	"unicorn/no-useless-collection-argument": "error",
	"unicorn/no-useless-error-capture-stack-trace": "error",
	"unicorn/no-useless-fallback-in-spread": "error",
	"unicorn/no-useless-iterator-to-array": "error",
	"unicorn/no-useless-length-check": "error",
	"unicorn/no-useless-promise-resolve-reject": "error",
	"unicorn/no-useless-spread": "error",
	"unicorn/no-useless-switch-case": "error",
	"unicorn/no-useless-undefined": "off",
	"unicorn/no-zero-fractions": "error",
	"unicorn/number-literal-case": [
		"error",
		{
			hexadecimalValue: "uppercase"
		}
	],
	"unicorn/numeric-separators-style": [
		"error",
		{
			binary: {
				minimumDigits: 0,
				groupLength: binaryGroupLength
			},
			hexadecimal: {
				minimumDigits: 0,
				groupLength: hexadecimalGroupLength
			},
			number: {
				minimumDigits: 0,
				fractionGroupLength: Infinity,
				groupLength: numberGroupLength
			},
			octal: {
				minimumDigits: 0,
				groupLength: octalGroupLength
			},
			onlyIfContainsSeparator: false
		}
	],
	"unicorn/prefer-add-event-listener": "error",
	"unicorn/prefer-array-find": "error",
	"unicorn/prefer-array-flat": "error",
	"unicorn/prefer-array-flat-map": "error",
	"unicorn/prefer-array-index-of": "error",
	"unicorn/prefer-array-last-methods": "error",
	"unicorn/prefer-array-some": "error",
	"unicorn/prefer-at": "error",
	"unicorn/prefer-bigint-literals": "error",
	"unicorn/prefer-blob-reading-methods": "error",
	"unicorn/prefer-class-fields": "error",
	"unicorn/prefer-classlist-toggle": "error",
	"unicorn/prefer-code-point": "error",
	"unicorn/prefer-date-now": "error",
	"unicorn/prefer-default-parameters": "error",
	"unicorn/prefer-dom-node-append": "error",
	"unicorn/prefer-dom-node-remove": "error",
	"unicorn/prefer-dom-node-text-content": "error",
	"unicorn/prefer-event-target": "error",
	"unicorn/prefer-export-from": "error",
	"unicorn/prefer-get-or-insert-computed": "error",
	"unicorn/prefer-global-this": "error",
	"unicorn/prefer-https": "error",
	"unicorn/prefer-import-meta-properties": "error",
	"unicorn/prefer-includes": "error",
	"unicorn/prefer-includes-over-repeated-comparisons": "error",
	"unicorn/prefer-iterator-concat": "off",
	"unicorn/prefer-iterator-to-array-at-end": "error",
	"unicorn/prefer-json-parse-buffer": "off",
	"unicorn/prefer-keyboard-event-key": "error",
	"unicorn/prefer-logical-operator-over-ternary": "error",
	"unicorn/prefer-math-abs": "error",
	"unicorn/prefer-math-min-max": "error",
	"unicorn/prefer-math-trunc": "error",
	"unicorn/prefer-modern-dom-apis": "error",
	"unicorn/prefer-modern-math-apis": "error",
	"unicorn/prefer-module": "error",
	"unicorn/prefer-native-coercion-functions": "error",
	"unicorn/prefer-negative-index": "error",
	"unicorn/prefer-node-protocol": "error",
	"unicorn/prefer-number-properties": [
		"error",
		{
			checkInfinity: false
		}
	],
	"unicorn/prefer-object-from-entries": "error",
	"unicorn/prefer-optional-catch-binding": "error",
	"unicorn/prefer-prototype-methods": "error",
	"unicorn/prefer-query-selector": "error",
	"unicorn/prefer-queue-microtask": [
		"error",
		{
			checkSetImmediate: true,
			checkSetTimeout: true
		}
	],
	"unicorn/prefer-reflect-apply": "error",
	"unicorn/prefer-regexp-test": "error",
	"unicorn/prefer-response-static-json": "error",
	"unicorn/prefer-set-has": "error",
	"unicorn/prefer-set-size": "error",
	"unicorn/prefer-simple-condition-first": "error",
	"unicorn/prefer-single-call": "error",
	"unicorn/prefer-split-limit": "error",
	"unicorn/prefer-spread": "error",
	"unicorn/prefer-string-match-all": "error",
	"unicorn/prefer-string-pad-start-end": "error",
	"unicorn/prefer-string-raw": "error",
	"unicorn/prefer-string-repeat": "error",
	"unicorn/prefer-string-replace-all": "error",
	"unicorn/prefer-string-slice": "error",
	"unicorn/prefer-string-starts-ends-with": "error",
	"unicorn/prefer-string-trim-start-end": "error",
	"unicorn/prefer-structured-clone": "error",
	"unicorn/prefer-switch": "error",
	"unicorn/prefer-ternary": ["error", "only-single-line"],
	"unicorn/prefer-top-level-await": "error",
	"unicorn/prefer-type-error": "error",
	"unicorn/prevent-abbreviations": "error",
	"unicorn/relative-url-style": "error",
	"unicorn/require-array-join-separator": "error",
	"unicorn/require-css-escape": "error",
	"unicorn/require-module-attributes": "error",
	"unicorn/require-module-specifiers": "error",
	"unicorn/require-number-to-fixed-digits-argument": "error",
	"unicorn/require-passive-events": "error",
	"unicorn/require-post-message-target-origin": "off",
	"unicorn/string-content": [
		"off",
		{
			patterns
		}
	],
	"unicorn/switch-case-braces": ["error", "avoid"],
	"unicorn/switch-case-break-position": "error",
	"unicorn/template-indent": [
		"error",
		{
			comments: ["HTML", "indent"],
			functions: ["dedent", "stripIndent"],
			indent: "\t",
			selectors: ["TemplateLiteral"],
			tags: [
				"outdent",
				"dedent",
				"gql",
				"sql",
				"html",
				"styled"
			]
		}
	],
	"unicorn/text-encoding-identifier-case": ["error", { withDash: true }],
	"unicorn/throw-new-error": "error",
	"unicorn/try-complexity": "error"
};

export default unicornRules;
