export default {
	languageOptions: {
		globals: {
			Deno: "readonly"
		}
	},
	settings: {
		"import/resolver": {
			"@jsenv/importmap-eslint-resolver": {
				projectDirectoryUrl: process.cwd(),
				importMapFileRelativeUrl: "./import-map.json"
			}
		}
	}
};
