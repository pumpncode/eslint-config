/**
 * @import { Linter } from "eslint"
 */

/**
 * @satisfies {Linter.RulesRecord}
 */
const noUnsanitizedRules = {
	"no-unsanitized/method": "error",
	"no-unsanitized/property": "error"
};

export default noUnsanitizedRules;
