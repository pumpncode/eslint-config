/* eslint-disable import-x/max-dependencies -- collection file */
import eslintComments from "@eslint-community/eslint-plugin-eslint-comments";
import react from "@eslint-react/eslint-plugin";
import stylistic from "@stylistic/eslint-plugin";
import depend from "eslint-plugin-depend";
// import github from "eslint-plugin-github";
import importX from "eslint-plugin-import-x";
import jsdoc from "eslint-plugin-jsdoc";
// import jsxA11y from "eslint-plugin-jsx-a11y";
import noSecrets from "eslint-plugin-no-secrets";
// import noUnsanitized from "eslint-plugin-no-unsanitized";
import perfectionist from "eslint-plugin-perfectionist";
import promise from "eslint-plugin-promise";
import redos from "eslint-plugin-redos";
import regexp from "eslint-plugin-regexp";
import security from "eslint-plugin-security";
import sonarjs from "eslint-plugin-sonarjs";
import tailwindcss from "eslint-plugin-tailwindcss";
import unicorn from "eslint-plugin-unicorn";

const plugins = {
	"@eslint-community/eslint-comments": eslintComments,
	"@stylistic": stylistic,
	// github,
	"import-x": importX,
	jsdoc,
	// "jsx-a11y": jsxA11y,
	"no-secrets": noSecrets,
	// "no-unsanitized": noUnsanitized,
	depend,
	perfectionist,
	promise,
	react,
	redos,
	regexp,
	security,
	sonarjs,
	tailwindcss,
	unicorn
};

export default plugins;
