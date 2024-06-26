import globals from "globals";

import plugins from "./plugins.js";
import rules from "./rules.js";

const cssFilesRefreshRate = 5_000;

const convertedGlobals = Object.fromEntries(
	Object.entries({
		...globals.browser,
		...globals.builtin
	})
		.map(([global, isWritable]) => [
			global,
			isWritable
				? "writable"
				: "readonly"
		])
);

const config = [
	{
		ignores: [
			"_fresh/**",
			"documentation/**",
			"patches/**"
		]
	},
	{
		files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
		languageOptions: {
			ecmaVersion: "latest",
			globals: {
				Deno: "readonly",
				...convertedGlobals
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				},
				ecmaVersion: "latest",
				jsxPragma: null,
				requireConfigFile: false,
				sourceType: "module"
			},
			sourceType: "module"
		},
		linterOptions: {
			noInlineConfig: false,
			reportUnusedDisableDirectives: "error"
		},
		plugins,
		rules,
		settings: {
			formComponents: ["Form"],
			"import-x/core-modules": [],
			"import-x/extensions": [
				".js",
				".mjs",
				".jsx"
			],
			"import-x/ignore": ["@turf/turf"],
			"import-x/parsers": {
				espree: [
					".js",
					".cjs",
					".mjs",
					".jsx"
				]
			},
			jsdoc: {
				mode: "typescript",
				tagNamePreference: {
					augments: "extends",
					extends: "extends",
					function: "method",
					method: "method"
				}
			},
			linkComponents: [
				{
					linkAttribute: "to",
					name: "Link"
				}
			],
			react: {
				pragma: "h",
				version: "18"
			},
			regexp: {
				allowedCharacterRanges: ["alphanumeric"]
			},
			tailwindcss: {
				callees: [
					"classnames",
					"clsx",
					"ctl"
				],
				classRegex: "^class(Name)?$",
				config: "tailwind.config.js",
				cssFiles: [
					"**/*.css",
					"!**/node_modules",
					"!**/.*",
					"!**/dist",
					"!**/build"
				],
				cssFilesRefreshRate,
				removeDuplicates: true,
				skipClassAttribute: false,
				tags: [],
				whitelist: []
			}
		}
	},
	{
		files: ["**/*.{jsx,mjsx,tsx,mtsx}"],
		rules: {
			"jsdoc/require-param": ["warn", { unnamedRootBase: ["props"] }]
		}
	},
	{
		files: ["**/_exports.?(*.)js"],
		rules: {
			"import-x/max-dependencies": "off",
			"import-x/prefer-default-export": "off"
		}
	},
	{
		files: [
			"benchmarks/**/*",
			"tests/**/*",
			"scripts/**/*"
		],
		rules: {
			"import-x/no-unused-modules": "off",
			"import-x/unambiguous": "off"
		}
	}
];

export default config;
