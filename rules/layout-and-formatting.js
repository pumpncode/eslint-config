/**
 * @import { Linter } from "eslint";
 */

/**
 * @satisfies {Linter.RulesRecord}
 */
const layoutAndFormattingRules = {
	"line-comment-position": "off",
	"unicode-bom": ["error", "never"]
};

export default layoutAndFormattingRules;
