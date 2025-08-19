import * as sonarjsRuleSets from "./sonarjs/_exports.js";

/**
 * @import { Linter } from "eslint";
 */

/**
 * @satisfies {Linter.RulesRecord}
 */
const sonarjsRules = Object.values(sonarjsRuleSets)
	.reduce(
		(allRules, ruleSet) => ({
			...allRules,
			...ruleSet
		}),
		{}
	);

export default sonarjsRules;
