const commentsRules = {
	"@stylistic/lines-around-comment": [
		"error",
		{
			beforeBlockComment: true,
			beforeLineComment: false,
			afterBlockComment: false,
			afterLineComment: false,
			allowArrayEnd: false,
			allowArrayStart: false,
			allowBlockEnd: false,
			allowBlockStart: false,
			allowClassEnd: false,
			allowClassStart: false,
			allowObjectEnd: false,
			allowObjectStart: false,
			ignorePattern: "/* @type"
		}
	],
	"@stylistic/spaced-comment": "off"
};

export default commentsRules;
