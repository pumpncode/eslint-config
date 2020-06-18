const maxComplexity = 15;

module.exports = {
	rules: {
		"accessor-pairs": "error",
		"array-callback-return": [
			"error",
			{
				allowImplicit: true
			}
		],
		"block-scoped-var": "error",
		"class-methods-use-this": "error",
		complexity: ["error", maxComplexity],
		"consistent-return": "error",
		curly: ["error", "all"],
		"default-case": [
			"error",
			{
				commentPattern: "^no default$"
			}
		],
		"default-case-last": "error",
		"default-param-last": "error",
		"dot-location": ["error", "property"],
		"dot-notation": [
			"error",
			{
				allowKeywords: true
			}
		],
		eqeqeq: [
			"error",
			"always",
			{
				null: "ignore"
			}
		],
		"grouped-accessor-pairs": ["error", "getBeforeSet"],
		"guard-for-in": "off",
		"max-classes-per-file": ["error", 1],
		"no-alert": "warn",
		"no-caller": "error",
		"no-case-declarations": "error",
		"no-constructor-return": "error",
		"no-div-regex": "error",
		"no-else-return": [
			"error",
			{
				allowElseIf: false
			}
		],
		"no-empty-function": [
			"error",
			{
				allow: [
					"arrowFunctions",
					"functions",
					"methods"
				]
			}
		],
		"no-empty-pattern": "error",
		"no-eq-null": "error",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-label": "error",
		"no-fallthrough": "error",
		"no-floating-decimal": "error",
		"no-global-assign": [
			"error",
			{
				exceptions: []
			}
		],
		"no-implicit-coercion": [
			"error",
			{
				boolean: false,
				number: true,
				string: true
			}
		],
		"no-implicit-globals": "error",
		"no-implied-eval": "error",
		"no-invalid-this": "error",
		"no-iterator": "error",
		"no-labels": [
			"error",
			{
				allowLoop: false,
				allowSwitch: false
			}
		],
		"no-lone-blocks": "error",
		"no-loop-func": "error",
		"no-magic-numbers": [
			"error",
			{
				detectObjects: false,
				enforceConst: true,
				ignore: [
					-1,
					0,
					1,
					2
				],
				ignoreArrayIndexes: false
			}
		],
		"no-multi-spaces": [
			"error",
			{
				ignoreEOLComments: false
			}
		],
		"no-multi-str": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-octal": "error",
		"no-octal-escape": "error",
		"no-param-reassign": [
			"error",
			{
				ignorePropertyModificationsFor: [
					"acc",
					"accumulator",
					"e",
					"ctx",
					"req",
					"request",
					"res",
					"response",
					"$scope",
					"staticContext"
				],
				props: true
			}
		],
		"no-proto": "error",
		"no-redeclare": "error",
		"no-restricted-properties": [
			"error",
			{
				message: "arguments.callee is deprecated",
				object: "arguments",
				property: "callee"
			},
			{
				message: "Please use Number.isFinite instead",
				object: "global",
				property: "isFinite"
			},
			{
				message: "Please use Number.isFinite instead",
				object: "self",
				property: "isFinite"
			},
			{
				message: "Please use Number.isFinite instead",
				object: "window",
				property: "isFinite"
			},
			{
				message: "Please use Number.isNaN instead",
				object: "global",
				property: "isNaN"
			},
			{
				message: "Please use Number.isNaN instead",
				object: "self",
				property: "isNaN"
			},
			{
				message: "Please use Number.isNaN instead",
				object: "window",
				property: "isNaN"
			},
			{
				message: "Please use Object.defineProperty instead.",
				property: "__defineGetter__"
			},
			{
				message: "Please use Object.defineProperty instead.",
				property: "__defineSetter__"
			},
			{
				message: "Use the exponentiation operator (**) instead.",
				object: "Math",
				property: "pow"
			}
		],
		"no-return-assign": ["error", "always"],
		"no-return-await": "error",
		"no-script-url": "error",
		"no-self-assign": [
			"error",
			{
				props: true
			}
		]

	}
};
