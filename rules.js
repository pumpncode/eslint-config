import * as ruleSets from "./rules/_exports.js";

const rules = Object.values(ruleSets)
	.reduce(
		(allRules, ruleSet) => ({
			...allRules,
			...ruleSet
		}),
		{}
	);

export default rules;
