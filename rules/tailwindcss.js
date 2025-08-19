/**
 * @import { Linter } from "eslint";
 */

/**
 * @satisfies {Linter.RulesRecord}
 */
const tailwindcssRules = {
	"tailwindcss/classnames-order": "error",
	"tailwindcss/enforces-negative-arbitrary-values": "error",
	"tailwindcss/enforces-shorthand": "error",
	"tailwindcss/migration-from-tailwind-2": "error",
	"tailwindcss/no-arbitrary-value": "off",
	"tailwindcss/no-contradicting-classname": "error",
	"tailwindcss/no-custom-classname": "off",
	"tailwindcss/no-unnecessary-arbitrary-value": "error"
};

export default tailwindcssRules;
