/**
 * @import { Linter } from "eslint";
 */

/**
 * @satisfies {Linter.RulesRecord}
 */
const jsxA11yRules = {
	"jsx-a11y/alt-text": "error",
	"jsx-a11y/anchor-ambiguous-text": [
		"error",
		{
			words: [
				"this",
				"more",
				"read here",
				"read more"
			]
		}
	],
	"jsx-a11y/anchor-has-content": "error",
	"jsx-a11y/anchor-is-valid": "error",
	"jsx-a11y/aria-activedescendant-has-tabindex": "error",
	"jsx-a11y/aria-props": "error",
	"jsx-a11y/aria-proptypes": "error",
	"jsx-a11y/aria-role": "error",
	"jsx-a11y/aria-unsupported-elements": "error",
	"jsx-a11y/autocomplete-valid": "error",
	"jsx-a11y/click-events-have-key-events": "error",
	"jsx-a11y/control-has-associated-label": [
		"error",
		{
			ignoreElements: [
				"audio",
				"canvas",
				"embed",
				"input",
				"textarea",
				"tr",
				"video"
			],
			ignoreRoles: [
				"grid",
				"listbox",
				"menu",
				"menubar",
				"radiogroup",
				"row",
				"tablist",
				"toolbar",
				"tree",
				"treegrid"
			],
			includeRoles: ["alert", "dialog"]
		}
	],
	"jsx-a11y/heading-has-content": "error",
	"jsx-a11y/html-has-lang": "error",
	"jsx-a11y/iframe-has-title": "error",
	"jsx-a11y/img-redundant-alt": "error",
	"jsx-a11y/interactive-supports-focus": [
		"error",
		{
			tabbable: [
				"button",
				"checkbox",
				"link",
				"progressbar",
				"searchbox",
				"slider",
				"spinbutton",
				"switch",
				"textbox"
			]
		}
	],
	"jsx-a11y/label-has-associated-control": "error",
	"jsx-a11y/lang": "error",
	"jsx-a11y/media-has-caption": "error",
	"jsx-a11y/mouse-events-have-key-events": "error",
	"jsx-a11y/no-access-key": "error",
	"jsx-a11y/no-aria-hidden-on-focusable": "error",
	"jsx-a11y/no-autofocus": "off",
	"jsx-a11y/no-distracting-elements": "error",
	"jsx-a11y/no-interactive-element-to-noninteractive-role": [
		"error",
		{
			canvas: ["img"],
			td: ["cell"],
			tr: ["none", "presentation"]
		}
	],
	"jsx-a11y/no-noninteractive-element-interactions": [
		"error",
		{
			body: ["onError", "onLoad"],
			iframe: ["onError", "onLoad"],
			img: ["onError", "onLoad"]
		}
	],
	"jsx-a11y/no-noninteractive-element-to-interactive-role": [
		"error",
		{
			fieldset: ["radiogroup", "presentation"],
			li: [
				"menuitem",
				"menuitemradio",
				"menuitemcheckbox",
				"option",
				"row",
				"tab",
				"treeitem"
			],
			ol: [
				"listbox",
				"menu",
				"menubar",
				"radiogroup",
				"tablist",
				"tree",
				"treegrid"
			],
			table: ["grid"],
			td: ["gridcell"],
			ul: [
				"listbox",
				"menu",
				"menubar",
				"radiogroup",
				"tablist",
				"tree",
				"treegrid"
			]
		}
	],
	"jsx-a11y/no-noninteractive-tabindex": "error",
	"jsx-a11y/no-redundant-roles": "error",
	"jsx-a11y/no-static-element-interactions": "error",
	"jsx-a11y/prefer-tag-over-role": "error",
	"jsx-a11y/role-has-required-aria-props": "error",
	"jsx-a11y/role-supports-aria-props": "error",
	"jsx-a11y/scope": "error",
	"jsx-a11y/tabindex-no-positive": "error"
};

export default jsxA11yRules;
