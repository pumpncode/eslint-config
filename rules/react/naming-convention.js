const namingConventionRules = {
	"react/naming-convention/component-name": [
		"error",
		{
			excepts: [],
			rule: "PascalCase"
		}
	],
	"react/naming-convention/filename": ["error", { rule: "kebab-case" }],
	"react/naming-convention/filename-extension": [
		"error",
		{
			allow: "as-needed",
			extensions: [".jsx", ".tsx"]
		}
	],
	"react/naming-convention/use-state": "error"
};

export default namingConventionRules;
