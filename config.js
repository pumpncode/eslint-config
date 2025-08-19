import * as parser from "@typescript-eslint/parser";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import { defineConfig } from "eslint/config";
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

const typeScriptExtensions = /** @type {const} */ ([
	".ts",
	".tsx",
	".cts",
	".mts"
]);

const allExtensions = /** @type {const} */ ([
	...typeScriptExtensions,
	".js",
	".jsx",
	".cjs",
	".mjs"
]);

/**
 * This configuration includes settings for various file types, plugins, and rules.
 * It also defines specific settings for different environments and file patterns.
 */
const config = defineConfig([
	{
		ignores: ["_fresh/**", "documentation/**", "patches/**"]
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
			"import-x/extensions": allExtensions,
			"import-x/external-module-folders": ["node_modules", "node_modules/@types"],
			"import-x/parsers": {
				"@typescript-eslint/parser": [...typeScriptExtensions]
			},
			"import-x/resolver-next": [
				createTypeScriptImportResolver({
					alwaysTryTypes: true
				})
			],
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
				specialCharacters: "keep",
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
				callees: ["classnames", "clsx", "ctl"],
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
			"@eslint-react/naming-convention/filename": "off",
			"import-x/max-dependencies": "off",
			"import-x/prefer-default-export": "off"
		}
	},
	{
		files: ["benchmarks/**/*", "tests/**/*", "scripts/**/*"],
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
		files: ["**/*.doc.js"],
		rules: {
			"import-x/unambiguous": "off",
			"unicorn/no-empty-file": "off",
			"unicorn/prevent-abbreviations": "off"
		}
	},
	{
		files: ["dev.js"],
		rules: {
			"unicorn/prevent-abbreviations": "off"
		}
	}
]);

export default config;
