import * as eslintCommentsRuleSets from "./eslint-comments/_exports.js";

const eslintCommentsRules = Object.values(eslintCommentsRuleSets)
	.reduce(
		(allRules, ruleSet) => ({
			...allRules,
			...ruleSet
		}),
		{}
	);

export default eslintCommentsRules;
