import * as importRuleSets from "./import/_exports.js";

const importRules = Object.values(importRuleSets)
	.reduce(
		(allRules, ruleSet) => ({
			...allRules,
			...ruleSet
		}),
		{}
	);

export default importRules;
