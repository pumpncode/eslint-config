/**
 * @import { Linter } from "eslint";
 */

/**
 * @satisfies {Linter.RulesRecord}
 */
const perfectionistRules = {
	"perfectionist/sort-array-includes": [
		"error",
		{
			groupKind: "mixed",
			groups: ["literal", "spread"]
		}
	],
	"perfectionist/sort-classes": [
		"error",
		{
			groups: [
				"index-signature",
				["private-static-property", "private-static-accessor-property"],
				["private-static-get-method", "private-static-set-method"],
				["static-property", "static-accessor-property"],
				["static-get-method", "static-set-method"],
				["protected-static-property", "protected-static-accessor-property"],
				["protected-static-get-method", "protected-static-set-method"],
				"static-block",
				["property", "accessor-property"],
				["get-method", "set-method"],
				["protected-property", "protected-accessor-property"],
				["protected-get-method", "protected-set-method"],
				["private-property", "private-accessor-property"],
				["private-get-method", "private-set-method"],
				"constructor",
				["static-method", "static-function-property"],
				["protected-static-method", "protected-static-function-property"],
				["private-static-method", "private-static-function-property"],
				["method", "function-property"],
				["protected-method", "protected-function-property"],
				["private-method", "private-function-property"],
				"unknown"
			],
			partitionByComment: String.raw`\/\/`,
			partitionByNewLine: false
		}
	],
	"perfectionist/sort-decorators": "error",
	"perfectionist/sort-enums": "error",
	"perfectionist/sort-exports": "error",
	"perfectionist/sort-heritage-clauses": "error",
	"perfectionist/sort-imports": [
		"error",
		{
			customGroups: {
				type: {},
				value: {
					components: "^@/components/.*",
					islands: "^@/islands/.*",
					logic: "^@/logic/.*",
					plugins: "^@/plugins/.*",
					std: "^@std/.*",
					utilities: "^@/utilities/.*"
				}
			},
			groups: [
				"builtin",
				"std",
				"external",
				"utilities",
				"plugins",
				"logic",
				"components",
				"islands",
				"internal",
				"type",
				"internal-type",
				"parent-type",
				"sibling-type",
				"index-type",
				"object",
				"parent",
				"sibling",
				"index",
				"unknown"
			],
			internalPattern: ["^@/.+"],
			newlinesBetween: "always",
			partitionByNewLine: false,
			sortSideEffects: true
		}
	],
	"perfectionist/sort-interfaces": "error",
	"perfectionist/sort-intersection-types": "error",
	"perfectionist/sort-jsx-props": [
		"error",
		{
			groups: [
				"shorthand",
				"unknown",
				"multiline"
			]
		}
	],
	"perfectionist/sort-maps": "error",
	"perfectionist/sort-modules": "off",
	"perfectionist/sort-named-exports": "error",
	"perfectionist/sort-named-imports": ["error", { partitionByComment: false }],
	"perfectionist/sort-object-types": "error",
	"perfectionist/sort-objects": [
		"error",
		{
			customGroups: {
				id: ["^id$"],
				groupBeforeAfter1: ["^before.*"],
				groupBeforeAfter2: ["^after.*"],
				groupColor1: ["^r$", "^l$"],
				groupColor2: [
					"^g$",
					"^c$",
					"^a$"
				],
				groupColor3: ["^b$", "^h$"],
				groupMinimumMaximum1: ["^minimum(([A-Z].*)|$)"],
				groupMinimumMaximum2: ["^maximum(([A-Z].*)|$)"],
				groupMinMax1: ["^min(([A-Z_-].*)|$)"],
				groupMinMax2: ["^max(([A-Z_-].*)|$)"],
				groupPrecedenceOrdinal1: ["^primary.*"],
				groupPrecedenceOrdinal2: ["^secondary.*"],
				groupPrecedenceOrdinal3: ["^tertiary.*"],
				groupPrecedenceOrdinal4: ["^quaternary.*"],
				groupPrecedenceOrdinal5: ["^quinary.*"],
				groupPrecedenceOrdinal6: ["^senary.*"],
				groupPrecedenceOrdinal7: ["^septenary.*"],
				groupPrecedenceOrdinal8: ["^octonary.*"],
				groupPrecedenceOrdinal9: ["^nonary.*"],
				groupPrecedenceOrdinal10: ["^denary.*"],
				groupPrecedenceOrdinalLast: ["^ultimate.*"],
				groupPreviousNext1: ["^previous.*"],
				groupPreviousNext2: ["^next.*"],
				groupPrevNext1: ["^prev(?!ent).*"],
				groupPrevNext2: ["^next.*"],
				groupSpatialOrdinal1: ["^first.*"],
				groupSpatialOrdinal2: ["^second.*"],
				groupSpatialOrdinal3: ["^third.*"],
				groupSpatialOrdinal4: ["^fourth.*"],
				groupSpatialOrdinal5: ["^fifth.*"],
				groupSpatialOrdinal6: ["^sixth.*"],
				groupSpatialOrdinal7: ["^seventh.*"],
				groupSpatialOrdinal8: ["^eighth.*"],
				groupSpatialOrdinal9: ["^ninth.*"],
				groupSpatialOrdinal10: ["^tenth.*"],
				groupSpatialOrdinalLast: ["^last.*"]
			},
			groups: [
				"id",
				"groupBeforeAfter1",
				"groupBeforeAfter2",
				"groupMinMax1",
				"groupMinMax2",
				"groupMinimumMaximum1",
				"groupMinimumMaximum2",
				"groupPreviousNext1",
				"groupPrevNext1",
				"groupSpatialOrdinal1",
				"groupSpatialOrdinal2",
				"groupSpatialOrdinal3",
				"groupSpatialOrdinal4",
				"groupSpatialOrdinal5",
				"groupSpatialOrdinal6",
				"groupSpatialOrdinal7",
				"groupSpatialOrdinal8",
				"groupSpatialOrdinal9",
				"groupSpatialOrdinal10",
				"groupPreviousNext2",
				"groupPrevNext2",
				"groupSpatialOrdinalLast",
				"groupPrecedenceOrdinal1",
				"groupPrecedenceOrdinal2",
				"groupPrecedenceOrdinal3",
				"groupPrecedenceOrdinal4",
				"groupPrecedenceOrdinal5",
				"groupPrecedenceOrdinal6",
				"groupPrecedenceOrdinal7",
				"groupPrecedenceOrdinal8",
				"groupPrecedenceOrdinal9",
				"groupPrecedenceOrdinal10",
				"groupPrecedenceOrdinalLast",
				"groupColor1",
				"groupColor2",
				"groupColor3",
				"unknown"
			]
		}
	],
	"perfectionist/sort-sets": "error",
	"perfectionist/sort-switch-case": "error",
	"perfectionist/sort-union-types": "error",
	"perfectionist/sort-variable-declarations": ["error", { partitionByComment: false }]
};

export default perfectionistRules;
