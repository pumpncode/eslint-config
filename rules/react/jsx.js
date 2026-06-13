const jsxRules = {
	"@eslint-react/jsx/no-children-prop": "error",
	"@eslint-react/jsx/no-children-prop-with-children": "error",
	"@eslint-react/jsx/no-comment-textnodes": "error",
	"@eslint-react/jsx/no-key-after-spread": "error",
	"@eslint-react/jsx/no-leaked-dollar": "error",
	"@eslint-react/jsx/no-leaked-semicolon": "error",
	"@eslint-react/jsx/no-namespace": "error",
	"@eslint-react/jsx/no-useless-fragment": [
		"error",
		{
			allowEmptyFragment: false,
			allowExpressions: true
		}
	]
};

export default jsxRules;
