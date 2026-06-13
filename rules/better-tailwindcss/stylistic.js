import maximumLineLength from "../_common/maximum-line-length.js";
import tabWidth from "../_common/tab-width.js";

const stylisticRules = {
	"better-tailwindcss/enforce-canonical-classes": [
		"error",
		{
			collapse: true,
			logical: true
		}
	],
	"better-tailwindcss/enforce-consistent-class-order": [
		"error",
		{
			order: "strict"
		}
	],
	"better-tailwindcss/enforce-consistent-line-wrapping": [
		"error",
		{
			classesPerLine: 0,
			group: "newLine",
			indent: "tab",
			lineBreakStyle: "unix",
			preferSingleLine: false,
			printWidth: maximumLineLength,
			strictness: "strict",
			tabWidth
		}
	],
	"better-tailwindcss/enforce-consistent-variant-order": "error",
	"better-tailwindcss/enforce-logical-properties": "error",
	"better-tailwindcss/no-deprecated-classes": "error",
	"better-tailwindcss/no-duplicate-classes": "error",
	"better-tailwindcss/no-unnecessary-whitespace": ["error", { allowMultiline: true }]
};

export default stylisticRules;
