import * as sonarjsRuleSets from "./sonarjs/_exports.js";

const sonarjsRules = Object.values(sonarjsRuleSets)
	.reduce(
		(allRules, ruleSet) => ({
			...allRules,
			...ruleSet
		}),
		{}
	);

export default sonarjsRules;
