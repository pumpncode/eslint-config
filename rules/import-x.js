import * as importRuleSets from "./import-x/_exports.js";

const importXRules = Object.values(importRuleSets)
	.reduce(
		(allRules, ruleSet) => ({
			...allRules,
			...ruleSet
		}),
		{}
	);

export default importXRules;
