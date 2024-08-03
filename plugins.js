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

const plugins = {
	// github,
	// "jsx-a11y": jsxA11y,
	// "no-unsanitized": noUnsanitized,
	"@eslint-community/eslint-comments": eslintComments,
	"@stylistic": stylistic,
	depend,
	"disable-autofix": disableAutofix,
	"func-params-args": funcParamsArgs,
	"import-x": importX,
	jsdoc,
	"no-secrets": noSecrets,
	perfectionist,
	promise,
	redos,
	regexp,
	security,
	sonarjs,
	tailwindcss,
	unicorn,
	...react.configs.all.plugins
};

export default plugins;
