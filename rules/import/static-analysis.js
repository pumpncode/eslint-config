const staticAnalysisRules = {
	"import/default": "error",
	"import/named": "error",
	"import/namespace": "error",
	"import/no-absolute-path": "error",
	"import/no-cycle": [
		"error",
		{
			maxDepth: Infinity
		}
	],
	"import/no-dynamic-require": "error",
	"import/no-internal-modules": [
		"off",
		{
			allow: []
		}
	],
	"import/no-relative-packages": "error",
	"import/no-relative-parent-imports": "off",
	"import/no-restricted-paths": [
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
	"import/no-self-import": "error",
	"import/no-unresolved": "error",
	"import/no-useless-path-segments": [
		"error",
		{
			commonjs: false,
			noUselessIndex: false
		}
	],
	"import/no-webpack-loader-syntax": "error"
};

export default staticAnalysisRules;
