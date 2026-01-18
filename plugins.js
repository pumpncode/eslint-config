// TODO [2026-07-01]: Remove the directive below once this is resolved: https://github.com/eslint-community/eslint-plugin-eslint-comments/pull/246#issuecomment-3764843636
/* eslint-disable import-x/default -- see above */
/* eslint-disable import-x/max-dependencies -- collection file */

// import github from "eslint-plugin-github";
// import jsxA11y from "eslint-plugin-jsx-a11y";
// import noUnsanitized from "eslint-plugin-no-unsanitized";
import eslintComments from "@eslint-community/eslint-plugin-eslint-comments";
import stylistic from "@stylistic/eslint-plugin";
import command from "eslint-plugin-command";
import depend from "eslint-plugin-depend";
import importX from "eslint-plugin-import-x";
import jsdoc from "eslint-plugin-jsdoc";
import noSecrets from "eslint-plugin-no-secrets";
import perfectionist from "eslint-plugin-perfectionist";
import promise from "eslint-plugin-promise";
import reactDom from "eslint-plugin-react-dom";
import reactHooksExtra from "eslint-plugin-react-hooks-extra";
import reactNamingConvention from "eslint-plugin-react-naming-convention";
import reactWebApi from "eslint-plugin-react-web-api";
import react from "eslint-plugin-react-x";
import redos from "eslint-plugin-redos";
import * as regexp from "eslint-plugin-regexp";
import security from "eslint-plugin-security";
import sonarjs from "eslint-plugin-sonarjs";
import tailwindcss from "eslint-plugin-tailwindcss";
import unicorn from "eslint-plugin-unicorn";

/**
 * @import { Linter, ESLint } from "eslint"
 */

/**
 * @satisfies { Linter.Config["plugins"] }
 */
const plugins = /** @type {const} */ ({
	// github,
	// "jsx-a11y": jsxA11y,
	// "no-unsanitized": noUnsanitized,
	"@eslint-community/eslint-comments": eslintComments,
	"@stylistic": stylistic,
	command,
	depend,

	"@eslint-react": react,
	"@eslint-react/dom": reactDom,
	"@eslint-react/hooks-extra": reactHooksExtra,
	"@eslint-react/naming-convention": reactNamingConvention,
	"@eslint-react/web-api": reactWebApi,
	// TODO [2026-07-01]: Remove assertion once https://github.com/un-ts/eslint-plugin-import-x/issues/421 is resolved
	"import-x": /** @type {ESLint.Plugin} */ (
		/** @type {unknown} */ (
			importX
		)
	),
	jsdoc,
	"no-secrets": noSecrets,
	perfectionist,
	promise,
	redos,
	regexp,
	security,
	sonarjs,
	tailwindcss,
	unicorn
});

export default plugins;
