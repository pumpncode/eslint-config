/**
 * @import { Linter } from "eslint"
 */

const timeout = 10_000;

/**
 * @satisfies {Linter.RulesRecord}
 */
const redosRules = {
	"redos/no-vulnerable": [
		"error",
		{
			checker: "auto",
			ignoreErrors: true,
			permittableComplexities: [],
			timeout
		}
	]
};

export default redosRules;
