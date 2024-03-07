const helpfulWarningsRules = {
	"import/export": "error",
	"import/no-deprecated": "warn",
	"import/no-empty-named-blocks": "error",
	"import/no-extraneous-dependencies": "off",
	"import/no-mutable-exports": "error",
	"import/no-named-as-default": "error",
	"import/no-named-as-default-member": "error",
	"import/no-unused-modules": [
		"error",
		{
			missingExports: true,
			unusedExports: false
		}
	]
};

export default helpfulWarningsRules;
