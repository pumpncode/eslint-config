const stylisticIssuesRules = {
	"regexp/grapheme-string-literal": "off",
	"regexp/hexadecimal-escape": ["error", "always"],
	"regexp/letter-case": [
		"error",
		{
			caseInsensitive: "lowercase",
			controlEscape: "uppercase",
			hexadecimalEscape: "lowercase",
			unicodeEscape: "lowercase"
		}
	],
	"regexp/match-any": "error",
	"regexp/no-useless-escape": "error",
	"regexp/no-useless-non-capturing-group": "error",
	"regexp/prefer-character-class": "error",
	"regexp/prefer-d": "error",
	"regexp/prefer-lookaround": [
		"error",
		{
			lookbehind: true,
			strictTypes: true
		}
	],
	"regexp/prefer-named-backreference": "error",
	"regexp/prefer-named-capture-group": "error",
	"regexp/prefer-named-replacement": [
		"error",
		{
			strictTypes: true
		}
	],
	"regexp/prefer-plus-quantifier": "error",
	"regexp/prefer-question-quantifier": "error",
	"regexp/prefer-result-array-groups": [
		"error",
		{
			strictTypes: true
		}
	],
	"regexp/prefer-star-quantifier": "error",
	"regexp/prefer-unicode-codepoint-escapes": "error",
	"regexp/prefer-w": "error",
	"regexp/sort-character-class-elements": [
		"error",
		{
			order: [
				"\\s",
				"\\w",
				"\\d",
				"\\p",
				"*",
				"\\q",
				"[]"
			]
		}
	],
	"regexp/sort-flags": "error",
	"regexp/unicode-escape": ["error", "unicodeCodePointEscape"]
};

export default stylisticIssuesRules;
