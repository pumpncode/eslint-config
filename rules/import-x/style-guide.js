const maxDependencies = 10;

const styleGuideRules = {
	"import-x/consistent-type-specifier-style": "error",
	"import-x/dynamic-import-chunkname": "off",
	"import-x/exports-last": "error",
	"import-x/extensions": ["error", "ignorePackages"],
	"import-x/first": "error",
	"import-x/group-exports": "error",
	"import-x/max-dependencies": [
		"error",
		{
			max: maxDependencies
		}
	],
	"import-x/newline-after-import": "error",
	"import-x/no-anonymous-default-export": [
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
	"import-x/no-default-export": "off",
	"import-x/no-duplicates": "error",
	"import-x/no-named-default": "error",
	"import-x/no-named-export": "off",
	"import-x/no-namespace": "off",
	"import-x/no-unassigned-import": "error",
	"import-x/order": [
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
					["builtin", ["@std"]],
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
	"import-x/prefer-default-export": ["error", { target: "single" }]
};

export default styleGuideRules;
