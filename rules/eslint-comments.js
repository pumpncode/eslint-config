import * as eslintCommentsRuleSets from "./eslint-comments/_exports.js";

/**
 * @import { Linter } from "eslint";
 */

/**
 * @satisfies {Linter.RulesRecord}
 */
const eslintCommentsRules = Object.values(eslintCommentsRuleSets)
	.reduce(
		(allRules, ruleSet) => ({
			...allRules,
			...ruleSet
		}),
		{}
	);

export default eslintCommentsRules;
