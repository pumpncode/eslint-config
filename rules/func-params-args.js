/**
 * @import { Linter } from "eslint"
 */

/**
 * @satisfies {Linter.RulesRecord}
 */
const funcParamsArgsRules = {
	"func-params-args/func-args": [
		"warn",
		{
			global: 3,
			join: -1,
			reduce: 4
		}
	]
};

export default funcParamsArgsRules;
