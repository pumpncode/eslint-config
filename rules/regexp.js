import * as regexpRuleSets from "./regexp/_exports.js";

/**
 * @import { Linter } from "eslint";
 */

/**
 * @satisfies {Linter.RulesRecord}
 */
const regexpRules = Object.values(regexpRuleSets)
	.reduce(
		(allRules, ruleSet) => ({
			...allRules,
			...ruleSet
		}),
		{}
	);

export default regexpRules;
