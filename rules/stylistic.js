import * as stylisticRuleSets from "./stylistic/_exports.js";

const stylisticRules = Object.values(stylisticRuleSets)
	.reduce(
		(allRules, ruleSet) => ({
			...allRules,
			...ruleSet
		}),
		{}
	);

export default stylisticRules;
