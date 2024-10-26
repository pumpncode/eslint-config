import * as parser from "@typescript-eslint/parser";
import { getJsdocProcessorPlugin } from "eslint-plugin-jsdoc/getJsdocProcessorPlugin.js";
import globals from "globals";

import plugins from "./plugins.js";
import rules from "./rules.js";

/**
 * @import { Linter } from "eslint"
 */

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

const rulesDisabledInExamples = new Set([
	"@eslint-react/no-leaked-conditional-rendering",
	"@eslint-react/prefer-read-only-props",
	"@stylistic/eol-last",
	"@stylistic/line-comment-position",
	"@stylistic/no-multiple-empty-lines",
	"import-x/no-self-import",
	"no-inline-comments"
]);

const rulesWithAutofixDisabled = Object.fromEntries(
	Object.entries(rules)
		.flatMap(([key, value]) => [
			[key, "off"],
			[
				`disable-autofix/${key}`,
				rulesDisabledInExamples.has(key)
					? "off"
					: value
			]
		])
);

/**
 * ESLint configuration.
 *
 * This configuration includes settings for various file types, plugins, and rules.
 * It also defines specific settings for different environments and file patterns.
 *
 * @satisfies {Linter.Config[]}
 */
const config = /** @type {const} */ ([
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
				Temporal: "readonly",
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
			perfectionist: {
				ignoreCase: false,
				order: "asc",
				partitionByComment: true,
				partitionByNewLine: true,
				type: "natural"
			},
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
		files: [
			"**/*.md/*.js",
			"**/*.jsdoc-defaults",
			"**/*.jsdoc-params",
			"**/*.jsdoc-properties"
		],
		languageOptions: {
			parserOptions: {
				program: null,
				project: false,
				projectService: false
			}
		},
		plugins,
		rules: rulesWithAutofixDisabled
	}
]);

export default config;
