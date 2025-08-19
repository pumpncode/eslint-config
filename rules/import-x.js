import * as importRuleSets from "./import-x/_exports.js";

/**
 * @import { Linter } from "eslint";
 */

/**
 * @satisfies {Linter.RulesRecord}
 */
const importXRules = Object.values(importRuleSets)
	.reduce(
		(allRules, ruleSet) => ({
			...allRules,
			...ruleSet
		}),
		{}
	);

export default importXRules;
