const namingConventionRules = {
	"@eslint-react/naming-convention/component-name": [
		"error",
		{
			allowAllCaps: false,
			allowLeadingUnderscore: false,
			allowNamespace: false,
			excepts: [],
			rule: "PascalCase"
		}
	],
	"@eslint-react/naming-convention/filename": ["error", { rule: "kebab-case" }],
	"@eslint-react/naming-convention/filename-extension": [
		"error",
		{
			allow: "as-needed",
			extensions: [".jsx", ".tsx"]
		}
	],
	"@eslint-react/naming-convention/use-state": "error"
};

export default namingConventionRules;
