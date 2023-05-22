export default {
	"array-callback-return": ["error"],
	"no-await-in-loop": ["off"],
	"no-constant-binary-expression": ["error"],
	"no-constructor-return": ["off"],
	"no-duplicate-imports": ["error"],
	"no-new-native-nonconstructor": ["error"],
	"no-promise-executor-return": ["error"],
	"no-self-compare": ["error"],
	"no-template-curly-in-string": ["warn"],
	"no-unmodified-loop-condition": ["error"],
	"no-unreachable-loop": ["error"],
	"no-unused-private-class-members": ["error"],
	"no-unused-vars": [
		"error",
		{
			args: "after-used",
			caughtErrors: "all",
			ignoreRestSiblings: true
		}
	],
	"no-use-before-define": ["error"],
	"require-atomic-updates": ["error"]
};
