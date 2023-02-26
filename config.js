import babelParser from "@babel/eslint-parser";
import js from "@eslint/js";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginJsdoc from "eslint-plugin-jsdoc";
import reactJsxRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import eslintPluginSortKeysPlus from "eslint-plugin-sort-keys-plus";
import globals from "globals";

import rules from "./rules.js";

const convertedGlobals = Object.fromEntries(
	Object.entries({
		...globals.node,
		...globals.browser
	})
		.map(([global, isWritable]) => [global, isWritable ? "writable" : "readonly"])
);

export * from "./addons.js";

export default [
	js.configs.recommended,
	{
		files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
		...reactRecommended,
		...reactJsxRuntime
	},
	{
		files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				...convertedGlobals
			},
			parser: babelParser,
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
				requireConfigFile: false,
				ecmaFeatures: {
					jsx: true
				},
				babelOptions: {
					babelrc: false,
					configFile: false,
					presets: [
						[
							"@babel/preset-react",
							{
								bugfixes: true,
								shippedProposals: true
							}
						]
					],
					plugins: ["@babel/plugin-proposal-export-default-from"]
				}
			}
		},
		plugins: {
			"sort-keys-plus": eslintPluginSortKeysPlus,
			jsdoc: eslintPluginJsdoc,
			import: eslintPluginImport
		},
		settings: {
			jsdoc: {
				ignorePrivate: true,
				mode: "permissive"
			},
			"import/core-modules": [],
			"import/extensions": [
				".js",
				".mjs",
				".jsx"
			],
			"import/ignore": ["node_modules", "\\.(coffee|scss|css|less|hbs|svg|json|cjs)$"],
			"import/parsers": {
				espree: [
					".js",
					".cjs",
					".mjs",
					".jsx"
				]
			},
			"import/resolver": {
				node: true
			},
			react: {
				version: "detect"
			},
			formComponents: ["Form"],
			linkComponents: [
				{
					name: "Link",
					linkAttribute: "to"
				}
			]
		},
		rules
	},
	{
		files: ["jsdoc-example.js"],
		rules: {
			"import/no-unused-modules": "off"
		}
	},
	{
		files: ["**/**.cjs"],
		rules: {
			"import/no-commonjs": ["off"],
			"import/no-unused-modules": "off"
		}
	},
	{
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module"
		}
	}
];
