const maxDependencies = 10;

const styleGuideRules = {
	"import/consistent-type-specifier-style": "error",
	"import/dynamic-import-chunkname": "off",
	"import/exports-last": "error",
	"import/extensions": ["error", "ignorePackages"],
	"import/first": "error",
	"import/group-exports": "error",
	"import/max-dependencies": [
		"error",
		{
			max: maxDependencies
		}
	],
	"import/newline-after-import": "error",
	"import/no-anonymous-default-export": [
		"error",
		{
			allowAnonymousClass: false,
			allowAnonymousFunction: false,
			allowArray: false,
			allowArrowFunction: false,
			allowCallExpression: false,
			allowLiteral: false,
			allowNew: false,
			allowObject: false
		}
	],
	"import/no-default-export": "off",
	"import/no-duplicates": "error",
	"import/no-named-default": "error",
	"import/no-named-export": "off",
	"import/no-namespace": [
		"error",
		{
			ignore: ["{./**/,**/}_exports.?(*.)js"]
		}
	],
	"import/no-unassigned-import": "error",
	"import/order": [
		"off",
		{
			alphabetize: {
				caseInsensitive: false,
				order: "asc"
			},
			groups: [
				"type",
				"object",
				"builtin",
				"external",
				"internal",
				"parent",
				"sibling",
				"index"
			],
			"newlines-between": "always",
			pathGroups: [
				...new Map([
					["builtin", ["std"]],
					[
						"internal",
						[
							"@/utilities",
							"@/plugins",
							"@/logic",
							"@/components",
							"@/islands"
						]
					]
				])
			]
				.flatMap(([group, patterns]) => patterns
					.map((pattern) => ({
						group,
						pattern: `${pattern}/**`,
						position: "after"
					}))),
			warnOnUnassignedImports: false
		}
	],
	"import/prefer-default-export": ["error", { target: "single" }]
};

export default styleGuideRules;
