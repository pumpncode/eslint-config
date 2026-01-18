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
	"perfectionist/sort-export-attributes": "error",
	"perfectionist/sort-exports": "error",
	"perfectionist/sort-heritage-clauses": "error",
	"perfectionist/sort-import-attributes": "error",
	"perfectionist/sort-imports": [
		"error",
		{
			customGroups: [
				{
					elementNamePattern: "^@/components/.*",
					groupName: "components"
				},
				{
					elementNamePattern: "^@/islands/.*",
					groupName: "islands"
				},
				{
					elementNamePattern: "^@/logic/.*",
					groupName: "logic"
				},
				{
					elementNamePattern: "^@/plugins/.*",
					groupName: "plugins"
				},
				{
					elementNamePattern: "^@std/.*",
					groupName: "std"
				},
				{
					elementNamePattern: "^@/utilities/.*",
					groupName: "utilities"
				}
			],
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
				"type-internal",
				"type-parent",
				"type-sibling",
				"type-index",
				"object",
				"parent",
				"sibling",
				"index",
				"unknown"
			],
			internalPattern: ["^@/.+"],
			newlinesBetween: 1,
			partitionByNewLine: false,
			sortSideEffects: true
		}
	],
	"perfectionist/sort-interfaces": "error",
	"perfectionist/sort-intersection-types": "error",
	"perfectionist/sort-jsx-props": [
		"error",
		{
			groups: ["shorthand", "unknown", "multiline"]
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
			customGroups: [
				{
					elementNamePattern: ["^id$"],
					groupName: "id"
				},
				{
					elementNamePattern: ["^before.*"],
					groupName: "groupBeforeAfter1"
				},
				{
					elementNamePattern: ["^after.*"],
					groupName: "groupBeforeAfter2"
				},
				{
					elementNamePattern: ["^r$", "^l$"],
					groupName: "groupColor1"
				},
				{
					elementNamePattern: ["^g$", "^c$", "^a$"],
					groupName: "groupColor2"
				},
				{
					elementNamePattern: ["^b$", "^h$"],
					groupName: "groupColor3"
				},
				{
					elementNamePattern: ["^minimum(([A-Z].*)|$)"],
					groupName: "groupMinimumMaximum1"
				},
				{
					elementNamePattern: ["^maximum(([A-Z].*)|$)"],
					groupName: "groupMinimumMaximum2"
				},
				{
					elementNamePattern: ["^min(([A-Z_-].*)|$)"],
					groupName: "groupMinMax1"
				},
				{
					elementNamePattern: ["^max(([A-Z_-].*)|$)"],
					groupName: "groupMinMax2"
				},
				{
					elementNamePattern: ["^primary.*"],
					groupName: "groupPrecedenceOrdinal1"
				},
				{
					elementNamePattern: ["^secondary.*"],
					groupName: "groupPrecedenceOrdinal2"
				},
				{
					elementNamePattern: ["^tertiary.*"],
					groupName: "groupPrecedenceOrdinal3"
				},
				{
					elementNamePattern: ["^quaternary.*"],
					groupName: "groupPrecedenceOrdinal4"
				},
				{
					elementNamePattern: ["^quinary.*"],
					groupName: "groupPrecedenceOrdinal5"
				},
				{
					elementNamePattern: ["^senary.*"],
					groupName: "groupPrecedenceOrdinal6"
				},
				{
					elementNamePattern: ["^septenary.*"],
					groupName: "groupPrecedenceOrdinal7"
				},
				{
					elementNamePattern: ["^octonary.*"],
					groupName: "groupPrecedenceOrdinal8"
				},
				{
					elementNamePattern: ["^nonary.*"],
					groupName: "groupPrecedenceOrdinal9"
				},
				{
					elementNamePattern: ["^denary.*"],
					groupName: "groupPrecedenceOrdinal10"
				},
				{
					elementNamePattern: ["^ultimate.*"],
					groupName: "groupPrecedenceOrdinalLast"
				},
				{
					elementNamePattern: ["^previous.*"],
					groupName: "groupPreviousNext1"
				},
				{
					elementNamePattern: ["^next.*"],
					groupName: "groupPreviousNext2"
				},
				{
					elementNamePattern: ["^prev(?!ent).*"],
					groupName: "groupPrevNext1"
				},
				{
					elementNamePattern: ["^next.*"],
					groupName: "groupPrevNext2"
				},
				{
					elementNamePattern: ["^first.*"],
					groupName: "groupSpatialOrdinal1"
				},
				{
					elementNamePattern: ["^second.*"],
					groupName: "groupSpatialOrdinal2"
				},
				{
					elementNamePattern: ["^third.*"],
					groupName: "groupSpatialOrdinal3"
				},
				{
					elementNamePattern: ["^fourth.*"],
					groupName: "groupSpatialOrdinal4"
				},
				{
					elementNamePattern: ["^fifth.*"],
					groupName: "groupSpatialOrdinal5"
				},
				{
					elementNamePattern: ["^sixth.*"],
					groupName: "groupSpatialOrdinal6"
				},
				{
					elementNamePattern: ["^seventh.*"],
					groupName: "groupSpatialOrdinal7"
				},
				{
					elementNamePattern: ["^eighth.*"],
					groupName: "groupSpatialOrdinal8"
				},
				{
					elementNamePattern: ["^ninth.*"],
					groupName: "groupSpatialOrdinal9"
				},
				{
					elementNamePattern: ["^tenth.*"],
					groupName: "groupSpatialOrdinal10"
				},
				{
					elementNamePattern: ["^last.*"],
					groupName: "groupSpatialOrdinalLast"
				}
			],
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
