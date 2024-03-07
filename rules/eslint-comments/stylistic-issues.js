const stylisticIssuesRules = {
	"@eslint-community/eslint-comments/no-restricted-disable": ["error"],
	"@eslint-community/eslint-comments/no-use": [
		"error",
		{
			allow: ["eslint-disable"]
		}
	],
	"@eslint-community/eslint-comments/require-description": "error"
};

export default stylisticIssuesRules;
