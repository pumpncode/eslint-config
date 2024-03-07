import config from "./config.js";

const eslintConfig = [
	...config,
	{
		files: ["rules/unicorn.js"],
		rules: {
			"unicorn/string-content": "off"
		}
	}
];

export default eslintConfig;
