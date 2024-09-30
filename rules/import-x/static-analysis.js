const staticAnalysisRules = {
	"import-x/default": "error",
	"import-x/named": "error",
	"import-x/namespace": "error",
	"import-x/no-absolute-path": "error",
	"import-x/no-cycle": [
		"error",
		{
			maxDepth: Infinity
		}
	],
	"import-x/no-dynamic-require": "error",
	"import-x/no-internal-modules": [
		"off",
		{
			allow: []
		}
	],
	"import-x/no-relative-packages": "error",
	"import-x/no-relative-parent-imports": "off",
	"import-x/no-restricted-paths": [
		"error",
		{
			zones: [
				{
					except: ["**/utilities/_exports.client.js"],
					from: [
						"plugins",
						"routes",
						"static",
						"utilities"
					]
						.map((folderName) => `./${folderName}/**/*`),
					message: "Please use the utilities/_exports.client.js file to import server utilities",
					target: "./islands/**/*"
				},
				{
					except: ["**/utilities/_exports.server.js"],
					from: [
						"plugins",
						"routes",
						"static",
						"utilities"
					]
						.map((folderName) => `./${folderName}/**/*`),
					message: "Please use the utilities/_exports.server.js file to import server utilities",
					target: [
						"./components/**/*",
						"./logic/**/*",
						"./patches/**/*",
						"./plugins/**/*",
						"./routes/**/*",
						"./static/**/*"
					]
				}
			]
		}
	],
	"import-x/no-self-import": "error",
	// TODO [2024-11-01]: Change to "error" when there is a resolver for deno
	"import-x/no-unresolved": "off",
	"import-x/no-useless-path-segments": [
		"error",
		{
			commonjs: false,
			noUselessIndex: false
		}
	],
	"import-x/no-webpack-loader-syntax": "error"
};

export default staticAnalysisRules;
