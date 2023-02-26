import { fileURLToPath } from "url";

export default {
	languageOptions: {
		globals: {
			Deno: "readonly"
		}
	},
	settings: {
		"import/resolver": {
			"@jsenv/importmap-eslint-resolver": {
				projectDirectoryUrl: fileURLToPath(new URL(".", import.meta.url)),
				importMapFileRelativeUrl: "./import-map.json"
			}
		}
	}
};
