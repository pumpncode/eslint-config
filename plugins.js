/* eslint-disable object-shorthand -- const types */
/* eslint-disable import-x/no-rename-default -- bad export names */
/* eslint-disable import-x/max-dependencies -- collection file */

// import github from "eslint-plugin-github";
// import jsxA11y from "eslint-plugin-jsx-a11y";
// import noUnsanitized from "eslint-plugin-no-unsanitized";
import eslintComments from "@eslint-community/eslint-plugin-eslint-comments";
import react from "@eslint-react/eslint-plugin";
import stylistic from "@stylistic/eslint-plugin";
import depend from "eslint-plugin-depend";
import disableAutofix from "eslint-plugin-disable-autofix";
import funcParamsArgs from "eslint-plugin-func-params-args";
import importX from "eslint-plugin-import-x";
import jsdoc from "eslint-plugin-jsdoc";
import noSecrets from "eslint-plugin-no-secrets";
import perfectionist from "eslint-plugin-perfectionist";
import promise from "eslint-plugin-promise";
import redos from "eslint-plugin-redos";
import regexp from "eslint-plugin-regexp";
import security from "eslint-plugin-security";
import sonarjs from "eslint-plugin-sonarjs";
import tailwindcss from "eslint-plugin-tailwindcss";
import unicorn from "eslint-plugin-unicorn";

/**
 * @import { Linter, ESLint } from "eslint"
 */

const reactPlugins = /** @type {Record<string, ESLint.Plugin>} */ (
	/** @type {unknown} */ (react.configs.all.plugins)
);

/**
 * @satisfies { Linter.Config["plugins"] }
 */
const plugins = /** @type {const} */ ({
	// github,
	// "jsx-a11y": jsxA11y,
	// "no-unsanitized": noUnsanitized,
	"@eslint-community/eslint-comments": eslintComments,
	"@stylistic": /** @type {ESLint.Plugin} */ (stylistic),
	depend,
	"disable-autofix": disableAutofix,
	"func-params-args": funcParamsArgs,
	"import-x": /** @type {ESLint.Plugin} */ (
		/** @type {unknown} */ (importX)
	),
	jsdoc,
	"no-secrets": noSecrets,
	perfectionist: /** @type {ESLint.Plugin} */ (
		/** @type {unknown} */ (perfectionist)
	),
	promise,
	redos,
	regexp,
	security,
	sonarjs,
	tailwindcss,
	unicorn,
	...reactPlugins
});

export default plugins;
