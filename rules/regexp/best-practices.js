const bestPracticesRules = {
	"regexp/confusing-quantifier": "error",
	"regexp/control-character-escape": "error",
	"regexp/negation": "error",
	"regexp/no-dupe-characters-character-class": "error",
	"regexp/no-empty-string-literal": "error",
	"regexp/no-extra-lookaround-assertions": "error",
	"regexp/no-invisible-character": "error",
	"regexp/no-legacy-features": "error",
	"regexp/no-non-standard-flag": "error",
	"regexp/no-obscure-range": "error",
	"regexp/no-octal": "error",
	"regexp/no-standalone-backslash": "error",
	"regexp/no-trivially-nested-assertion": "error",
	"regexp/no-trivially-nested-quantifier": "error",
	"regexp/no-unused-capturing-group": "error",
	"regexp/no-useless-character-class": "error",
	"regexp/no-useless-flag": "error",
	"regexp/no-useless-lazy": "error",
	"regexp/no-useless-quantifier": "error",
	"regexp/no-useless-range": "error",
	"regexp/no-useless-set-operand": "error",
	"regexp/no-useless-string-literal": "error",
	"regexp/no-useless-two-nums-quantifier": "error",
	"regexp/no-zero-quantifier": "error",
	"regexp/optimal-lookaround-quantifier": "error",
	"regexp/optimal-quantifier-concatenation": "error",
	"regexp/prefer-escape-replacement-dollar-char": "error",
	"regexp/prefer-predefined-assertion": "error",
	"regexp/prefer-quantifier": "error",
	"regexp/prefer-range": "error",
	"regexp/prefer-regexp-exec": "off",
	"regexp/prefer-regexp-test": "off",
	"regexp/prefer-set-operation": "error",
	"regexp/require-unicode-regexp": "error",
	// TODO [2024-08-01]: enable when https://github.com/microsoft/vscode/pull/206580 is resolved
	"regexp/require-unicode-sets-regexp": "off",
	"regexp/simplify-set-operations": "error",
	"regexp/sort-alternatives": "error",
	"regexp/use-ignore-case": "error"
};

export default bestPracticesRules;
