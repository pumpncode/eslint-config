const jsdocRules = {
	"jsdoc/check-access": "warn",
	"jsdoc/check-alignment": "warn",
	// TODO [eslint-plugin-jsdoc@>=49]: enable when https://github.com/eslint/eslint/issues/14745 is fixed
	"jsdoc/check-examples": "off",
	"jsdoc/check-indentation": "warn",
	"jsdoc/check-line-alignment": "off",
	"jsdoc/check-param-names": "warn",
	"jsdoc/check-property-names": "warn",
	"jsdoc/check-syntax": "warn",
	"jsdoc/check-tag-names": [
		"warn",
		{
			definedTags: ["category", "component"]
		}
	],
	"jsdoc/check-types": "warn",
	"jsdoc/check-values": "warn",
	"jsdoc/empty-tags": "warn",
	"jsdoc/implements-on-classes": "warn",
	"jsdoc/imports-as-dependencies": "off",
	"jsdoc/informative-docs": "warn",
	"jsdoc/match-description": "off",
	"jsdoc/match-name": "off",
	"jsdoc/multiline-blocks": "warn",
	"jsdoc/no-bad-blocks": ["warn", { preventAllMultiAsteriskBlocks: true }],
	"jsdoc/no-blank-block-descriptions": "off",
	"jsdoc/no-blank-blocks": "off",
	"jsdoc/no-defaults": "warn",
	"jsdoc/no-missing-syntax": "off",
	"jsdoc/no-multi-asterisks": "warn",
	"jsdoc/no-restricted-syntax": "off",
	"jsdoc/no-types": "off",
	"jsdoc/no-undefined-types": [
		"off",
		{
			definedTypes: ["Iterable", "IterableIterator"]
		}
	],
	"jsdoc/require-asterisk-prefix": [
		"warn",
		"always",
		{
			tags: {
				any: ["typedef"]
			}
		}
	],
	"jsdoc/require-description": [
		"warn",
		{
			contexts: [
				// "ArrayExpression",
				"ArrowFunctionExpression",
				// "AssignmentExpression",
				// "AwaitExpression",
				// "BinaryExpression",
				// "CallExpression",
				// "ChainExpression",
				// "Class",
				"ClassDeclaration",
				"ClassExpression",
				// "ClassHasInstanceExpression",
				// "ConditionalExpression",
				// "DoExpression",
				// "ExportAllDeclaration",
				// "ExportDefaultDeclaration",
				// "ExportNamedDeclaration",
				// "Expression"
				// "ExpressionStatement",
				"FunctionDeclaration",
				"FunctionExpression",
				// "ImportDeclaration",
				// "ImportExpression",
				// "LogicalExpression",
				// "LogicalExpression",
				"MemberExpression",
				"MethodDefinition"
				// "ModuleDeclarations",
				// "ModuleExpression",
				// "NewExpression",
				// "ObjectExpression"
				// "PropertyDefinition",
				// "RecordExpression",
				// "SequenceExpression",
				// "SliceExpression",
				// "StaticBlock",
				// "TaggedTemplateExpression",
				// "ThisExpression",
				// "TupleExpression",
				// "UnaryExpression",
				// "VariableDeclaration",
				// "VariableDeclarator",
				// "YieldExpression"
			],
			descriptionStyle: "body"
		}
	],
	"jsdoc/require-description-complete-sentence": "warn",
	"jsdoc/require-example": "warn",
	"jsdoc/require-file-overview": [
		"off",
		{
			tags: {
				file: {
					initialCommentsOnly: true,
					mustExist: true,
					preventDuplicates: true
				},
				license: {
					initialCommentsOnly: true,
					mustExist: true,
					preventDuplicates: true
				}
			}
		}
	],
	"jsdoc/require-hyphen-before-param-description": ["warn", "always"],
	"jsdoc/require-jsdoc": [
		"warn",
		{
			require: {
				ArrowFunctionExpression: true,
				ClassDeclaration: true,
				ClassExpression: true,
				FunctionDeclaration: true,
				FunctionExpression: true,
				MethodDefinition: true
			}
		}
	],
	"jsdoc/require-param": ["warn", { unnamedRootBase: ["options"] }],
	"jsdoc/require-param-description": [
		"warn",
		{
			setDefaultDestructuredRootDescription: true
		}
	],
	"jsdoc/require-param-name": "warn",
	"jsdoc/require-param-type": "warn",
	"jsdoc/require-property": "warn",
	"jsdoc/require-property-description": "warn",
	"jsdoc/require-property-name": "warn",
	"jsdoc/require-property-type": "warn",
	"jsdoc/require-returns": "warn",
	"jsdoc/require-returns-check": "warn",
	"jsdoc/require-returns-description": "warn",
	"jsdoc/require-returns-type": "warn",
	"jsdoc/require-throws": "warn",
	"jsdoc/require-yields": "warn",
	"jsdoc/require-yields-check": "warn",
	"jsdoc/sort-tags": [
		"warn",
		{
			tagSequence: [
				{
					tags: [
						// Brief descriptions
						"summary",
						"typeSummary",

						// Module/file-level
						"module",
						"exports",
						"file",
						"fileoverview",
						"overview",

						// Identifying (name, type)
						"template",
						"typedef",
						"interface",
						"record",
						"name",
						"kind",
						"type",
						"alias",
						"external",
						"host",
						"callback",
						"func",
						"function",
						"method",
						"class",
						"constructor",

						// Relationships
						"overload",
						"modifies",
						"mixes",
						"mixin",
						"mixinClass",
						"mixinFunction",
						"namespace",
						"borrows",
						"constructs",
						"lends",
						"implements",
						"requires",

						// Long descriptions
						"desc",
						"description",
						"classdesc",
						"tutorial",
						"copyright",
						"license",

						// Simple annotations
						"const",
						"constant",
						"final",
						"global",
						"readonly",
						"abstract",
						"virtual",
						"var",
						"member",
						"memberof",
						"memberof!",
						"inner",
						"instance",
						"inheritdoc",
						"inheritDoc",
						"override",
						"hideconstructor",
						"component",

						// Core function/object info
						"param",
						"arg",
						"argument",
						"prop",
						"property",
						"return",
						"returns",

						// Important behavior details
						"async",
						"generator",
						"default",
						"defaultvalue",
						"enum",
						"augments",
						"extends",
						"throws",
						"exception",
						"yield",
						"yields",
						"event",
						"fires",
						"emits",
						"listens",
						"this",

						// Access
						"static",
						"private",
						"protected",
						"public",
						"access",
						"package",

						"-other",

						// Supplementary descriptions
						"see",
						"example",

						// METADATA

						// Other Closure (undocumented) metadata
						"closurePrimitive",
						"customElement",
						"expose",
						"hidden",
						"idGenerator",
						"meaning",
						"ngInject",
						"owner",
						"wizaction",

						// Other Closure (documented) metadata
						"define",
						"dict",
						"export",
						"externs",
						"implicitCast",
						"noalias",
						"nocollapse",
						"nocompile",
						"noinline",
						"nosideeffects",
						"polymer",
						"polymerBehavior",
						"preserve",
						"struct",
						"suppress",
						"unrestricted",

						// @homer0/prettier-plugin-jsdoc metadata
						"category",

						// Non-Closure metadata
						"ignore",
						"author",
						"version",
						"variation",
						"since",
						"deprecated",
						"todo"
					]
				}
			]
		}
	],
	"jsdoc/tag-lines": [
		"warn",
		"never",
		{
			startLines: 1
		}
	],
	"jsdoc/text-escaping": "off",
	"jsdoc/valid-types": "off"
};

export default jsdocRules;
