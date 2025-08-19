import * as reactRuleSets from "./react/_exports.js";

/**
 * @import { Linter } from "eslint";
 */

/**
 * @satisfies {Linter.RulesRecord}
 */
const reactRules = Object.values(reactRuleSets)
	.reduce(
		(allRules, ruleSet) => ({
			...allRules,
			...ruleSet
		}),
		{}
	);

export default reactRules;
