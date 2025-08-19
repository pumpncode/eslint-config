const helpfulWarningsRules = {
	"import-x/export": "error",
	"import-x/no-deprecated": "warn",
	"import-x/no-empty-named-blocks": "error",
	"import-x/no-extraneous-dependencies": "off",
	"import-x/no-mutable-exports": "error",
	"import-x/no-named-as-default": "off",
	"import-x/no-named-as-default-member": "error",
	"import-x/no-rename-default": "off",
	"import-x/no-unused-modules": [
		"error",
		{
			ignoreUnusedTypeExports: true,
			missingExports: true,
			unusedExports: false
		}
	]
};

export default helpfulWarningsRules;
