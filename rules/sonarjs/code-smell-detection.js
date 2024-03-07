const maximumCognitiveComplexity = 15;
const maxSwitchCases = 5;
const duplicateStringThreshold = 3;
const identicalFunctionThreshold = 3;

const codeSmellDetectionRules = {
	"sonarjs/cognitive-complexity": ["error", maximumCognitiveComplexity],
	"sonarjs/elseif-without-else": "off",
	"sonarjs/max-switch-cases": ["error", maxSwitchCases],
	"sonarjs/no-collapsible-if": "error",
	"sonarjs/no-collection-size-mischeck": "error",
	"sonarjs/no-duplicate-string": [
		"error",
		{
			ignoreStrings: "application/json",
			threshold: duplicateStringThreshold
		}
	],
	"sonarjs/no-duplicated-branches": "error",
	"sonarjs/no-gratuitous-expressions": "error",
	"sonarjs/no-identical-functions": ["error", identicalFunctionThreshold],
	"sonarjs/no-inverted-boolean-check": "error",
	"sonarjs/no-nested-switch": "error",
	"sonarjs/no-nested-template-literals": "error",
	"sonarjs/no-redundant-boolean": "error",
	"sonarjs/no-redundant-jump": "error",
	"sonarjs/no-same-line-conditional": "error",
	"sonarjs/no-small-switch": "error",
	"sonarjs/no-unused-collection": "error",
	"sonarjs/no-useless-catch": "error",
	"sonarjs/prefer-immediate-return": "error",
	"sonarjs/prefer-object-literal": "error",
	"sonarjs/prefer-single-boolean-return": "error",
	"sonarjs/prefer-while": "error"
};

export default codeSmellDetectionRules;
