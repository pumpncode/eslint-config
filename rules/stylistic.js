import * as stylisticRuleSets from "./stylistic/_exports.js";

/**
 * @import { Linter } from "eslint"
 */

/**
 * @satisfies {Linter.RulesRecord}
 */
const stylisticRules = Object.values(stylisticRuleSets)
	.reduce(
		(allRules, ruleSet) => ({
			...allRules,
			...ruleSet
		}),
		{}
	);

export default stylisticRules;
