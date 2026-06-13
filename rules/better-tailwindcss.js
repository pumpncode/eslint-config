import * as betterTailwindcssRuleSets from "./better-tailwindcss/_exports.js";

/**
 * @import { Linter } from "eslint";
 */

/**
 * @satisfies {Linter.RulesRecord}
 */
const betterTailwindcssRules = Object.values(betterTailwindcssRuleSets)
	.reduce(
		(allRules, ruleSet) => ({
			...allRules,
			...ruleSet
		}),
		{}
	);

export default betterTailwindcssRules;
