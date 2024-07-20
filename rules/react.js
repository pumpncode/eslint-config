import * as reactRuleSets from "./react/_exports.js";

const reactRules = Object.values(reactRuleSets)
	.reduce(
		(allRules, ruleSet) => ({
			...allRules,
			...ruleSet
		}),
		{}
	);

export default reactRules;
