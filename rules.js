import * as ruleSets from "./rules/_exports.js";

/**
 * @import { Linter } from "eslint";
 */

/**
 * @satisfies {Linter.RulesRecord}
 */
const rules = Object.values(ruleSets)
	.reduce(
		(allRules, ruleSet) => /** @type {const} */ ({
			...allRules,
			...ruleSet
		}),
		{}
	);

export default rules;
