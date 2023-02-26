import imports from "./rules/imports.js";
import jsdoc from "./rules/jsdoc.js";
import layoutAndFormatting from "./rules/layout-and-formatting.js";
import possibleProblems from "./rules/possible-problems.js";
import react from "./rules/react.js";
import suggestions from "./rules/suggestions.js";

export default {
	...layoutAndFormatting,
	...possibleProblems,
	...suggestions,
	...jsdoc,
	...imports,
	...react
};
