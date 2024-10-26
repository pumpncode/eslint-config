/**
 * @import { Linter } from "eslint"
 */

const tolerance = 5;

/**
 * @satisfies {Linter.RulesRecord}
 */
const noSecretsRules = {
	"no-secrets/no-secrets": [
		"error",
		{
			additionalDelimiters: [],
			additionalRegexes: {},
			ignoreCase: false,
			ignoreContent: [],
			ignoreIdentifiers: [],
			ignoreModules: true,
			tolerance
		}
	]
};

export default noSecretsRules;
