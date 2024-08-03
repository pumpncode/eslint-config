const maxLineLength = 100;
const tabWidth = 4;

const miscRules = {
	"@stylistic/max-len": [
		"error",
		{
			code: maxLineLength,
			ignoreComments: true,
			ignoreRegExpLiterals: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
			ignoreTrailingComments: false,
			ignoreUrls: true,
			tabWidth
		}
	],
	"@stylistic/max-statements-per-line": ["error", { max: 1 }],
	"@stylistic/member-delimiter-style": [
		"error",
		{
			multiline: {
				delimiter: "comma",
				requireLast: false
			},
			multilineDetection: "brackets",
			singleline: {
				delimiter: "comma",
				requireLast: false
			}
		}
	],
	"@stylistic/nonblock-statement-body-position": ["error", "beside"],
	"@stylistic/one-var-declaration-per-line": ["error", "always"],
	"@stylistic/padded-blocks": [
		"error",
		{
			blocks: "never",
			classes: "always",
			switches: "never"
		}
	]
};

export default miscRules;
