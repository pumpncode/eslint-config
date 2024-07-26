import config from "./config.js";

const eslintConfig = [
	...config,
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
