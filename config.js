import * as parser from "@typescript-eslint/parser";
import { getJsdocProcessorPlugin } from "eslint-plugin-jsdoc/getJsdocProcessorPlugin.js";
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

const defaultGlob = "**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}";

const rulesWithAutofixDisabled = {
	...Object.fromEntries(
		Object.entries(rules)
			.flatMap(([key, value]) => [[key, "off"], [`disable-autofix/${key}`, value]])
	),
	"disable-autofix/@eslint-react/no-leaked-conditional-rendering": "off",
	"disable-autofix/@eslint-react/prefer-read-only-props": "off"
};

const config = [
	{
		ignores: [
			"_fresh/**",
			"documentation/**",
			"patches/**"
		]
	},
	{
		files: [defaultGlob],
		languageOptions: {
			ecmaVersion: "latest",
			globals: {
				Deno: "readonly",
				...convertedGlobals
			},
			parser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				},
				ecmaVersion: "latest",
				jsxPragma: null,
				parser,
				project: "./tsconfig.json",
				requireConfigFile: false,
				sourceType: "module",
				tsconfigRootDir: "./"
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
			"react-x": {
				jsxPragma: "h",
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
	},
	{
		files: ["**/*.{ts,tsx}"],
		rules: {
			"no-undef": "off"
		}
	},
	{
		files: [defaultGlob],
		plugins: {
			examples: getJsdocProcessorPlugin({
				captionRequired: false,
				checkDefaults: true,
				checkExamples: true,
				checkParams: true,
				checkProperties: true,
				paddedIndent: 0,
				parser,
				sourceType: "module"
			})
		},
		processor: "examples/examples"
	},
	{
		files: ["**/*.md/*.js"],
		languageOptions: {
			parserOptions: {
				program: null,
				project: false,
				projectService: false
			}
		},
		name: "jsdoc/examples/rules",
		rules: rulesWithAutofixDisabled
	},
	{
		files: [defaultGlob],
		name: "jsdoc/default-expressions/processor",
		processor: "examples/examples"
	},
	{
		files: [
			"**/*.jsdoc-defaults",
			"**/*.jsdoc-params",
			"**/*.jsdoc-properties"
		],
		name: "jsdoc/default-expressions/rules",
		rules: rulesWithAutofixDisabled
	}
];

export default config;
