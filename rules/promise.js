/**
 * @import { Linter } from "eslint";
 */

/**
 * @satisfies {Linter.RulesRecord}
 */
const promiseRules = {
	"promise/always-return": [
		"error",
		{
			ignoreAssignmentVariable: ["globalThis"],
			ignoreLastCallback: false
		}
	],
	"promise/avoid-new": "off",
	"promise/catch-or-return": [
		"error",
		{
			allowFinally: false,
			allowThen: false,
			allowThenStrict: false,
			terminationMethod: ["catch"]
		}
	],
	"promise/no-callback-in-promise": "error",
	"promise/no-multiple-resolved": "error",
	"promise/no-native": "off",
	"promise/no-nesting": "error",
	"promise/no-new-statics": "error",
	"promise/no-promise-in-callback": ["error", { timeoutsErr: false }],
	"promise/no-return-in-finally": "error",
	"promise/no-return-wrap": "error",
	"promise/param-names": [
		"error",
		{
			rejectPattern: "^reject$",
			resolvePattern: "^resolve$"
		}
	],
	"promise/prefer-await-to-callbacks": "error",
	"promise/prefer-await-to-then": ["error", { strict: true }],
	"promise/prefer-catch": "error",
	"promise/spec-only": "error",
	"promise/valid-params": ["error", { exclude: [] }]
};

export default promiseRules;
