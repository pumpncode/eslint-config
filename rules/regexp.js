import * as regexpRuleSets from "./regexp/_exports.js";

const regexpRules = Object.values(regexpRuleSets)
	.reduce(
		(allRules, ruleSet) => ({
			...allRules,
			...ruleSet
		}),
		{}
	);

export default regexpRules;
