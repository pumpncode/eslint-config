import config from "./config.js";

const eslintConfig = [
	...config,
	{
		rules: {
			"tailwindcss/classnames-order": "off",
			"tailwindcss/enforces-negative-arbitrary-values": "off",
			"tailwindcss/enforces-shorthand": "off",
			"tailwindcss/migration-from-tailwind-2": "off",
			"tailwindcss/no-arbitrary-value": "off",
			"tailwindcss/no-contradicting-classname": "off",
			"tailwindcss/no-custom-classname": "off",
			"tailwindcss/no-unnecessary-arbitrary-value": "off"
		}
	},
	{
		files: ["rules/unicorn.js"],
		rules: {
			"unicorn/string-content": "off"
		}
	},
	{
		files: [
			"plugins.js",
			"rules/_exports.js",
			"rules/func-params-args.js"
		],
		rules: {
			"unicorn/prevent-abbreviations": [
				"error",
				{
					allowList: {
						"func-params-args": true,
						funcParamsArgs: true,
						funcParamsArgsRules: true
					}
				}
			]
		}
	}
];

export default eslintConfig;
