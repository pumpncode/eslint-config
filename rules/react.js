const maxDepth = 10;

const reactRules = {
	"react/boolean-prop-naming": "error",
	"react/button-has-type": "error",
	"react/default-props-match-prop-types": "error",
	"react/destructuring-assignment": "error",
	"react/display-name": "error",
	"react/forbid-component-props": "error",
	"react/forbid-dom-props": "error",
	"react/forbid-elements": "error",
	"react/forbid-foreign-prop-types": "error",
	"react/forbid-prop-types": "error",
	"react/function-component-definition": [
		"error",
		{
			namedComponents: "arrow-function",
			unnamedComponents: "arrow-function"
		}
	],
	"react/hook-use-state": ["error", { allowDestructuredState: true }],
	"react/iframe-missing-sandbox": "error",
	"react/jsx-boolean-value": "error",
	"react/jsx-filename-extension": [
		"error",
		{
			allow: "as-needed",
			extensions: [".jsx"],
			ignoreFilesWithoutCode: true
		}
	],
	"react/jsx-fragments": ["error", "syntax"],
	"react/jsx-handler-names": "error",
	"react/jsx-key": "error",
	"react/jsx-max-depth": ["error", { max: maxDepth }],
	"react/jsx-no-bind": "error",
	"react/jsx-no-comment-textnodes": "error",
	"react/jsx-no-constructed-context-values": "error",
	"react/jsx-no-duplicate-props": "error",
	"react/jsx-no-leaked-render": "error",
	"react/jsx-no-literals": "off",
	"react/jsx-no-script-url": "error",
	"react/jsx-no-target-blank": [
		"error",
		{
			allowReferrer: false,
			enforceDynamicLinks: "always",
			forms: false,
			links: true,
			warnOnSpreadAttributes: true
		}
	],
	"react/jsx-no-undef": "error",
	"react/jsx-no-useless-fragment": "error",
	"react/jsx-props-no-spreading": "off",
	"react/jsx-uses-react": "error",
	"react/jsx-uses-vars": "error",
	"react/no-access-state-in-setstate": "error",
	"react/no-adjacent-inline-elements": "error",
	"react/no-array-index-key": "off",
	"react/no-arrow-function-lifecycle": "off",
	"react/no-children-prop": "error",
	"react/no-danger": "error",
	"react/no-danger-with-children": "error",
	"react/no-deprecated": "error",
	"react/no-did-mount-set-state": "error",
	"react/no-did-update-set-state": "error",
	"react/no-direct-mutation-state": "error",
	"react/no-find-dom-node": "error",
	"react/no-invalid-html-attribute": "error",
	"react/no-is-mounted": "error",
	"react/no-multi-comp": ["error", { ignoreStateless: false }],
	"react/no-namespace": "error",
	"react/no-object-type-as-default-prop": "error",
	"react/no-redundant-should-component-update": "error",
	"react/no-render-return-value": "error",
	"react/no-set-state": "off",
	"react/no-string-refs": "error",
	"react/no-this-in-sfc": "error",
	"react/no-typos": "error",
	"react/no-unescaped-entities": "error",
	"react/no-unknown-property": "error",
	"react/no-unsafe": "error",
	"react/no-unstable-nested-components": "error",
	"react/no-unused-class-component-methods": "error",
	"react/no-unused-prop-types": "error",
	"react/no-unused-state": "error",
	"react/no-will-update-set-state": "error",
	"react/prefer-es6-class": ["error", "always"],
	"react/prefer-exact-props": "error",
	"react/prefer-read-only-props": "error",
	"react/prefer-stateless-function": "error",
	"react/prop-types": "off",
	"react/react-in-jsx-scope": "off",
	"react/require-default-props": "error",
	"react/require-optimization": "error",
	"react/require-render-return": "error",
	"react/sort-comp": "off",
	"react/sort-default-props": "off",
	"react/sort-prop-types": "off",
	"react/state-in-constructor": ["error", "never"],
	"react/static-property-placement": "error",
	"react/style-prop-object": "error",
	"react/void-dom-elements-no-children": "error"
};

export default reactRules;
