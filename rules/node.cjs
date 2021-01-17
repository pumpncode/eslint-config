module.exports = {
	env: {
		node: true
	},
	rules: {
		"callback-return": "off",
		"global-require": "error",
		"handle-callback-err": ["error", "^(error|.+Error)$"],
		"no-buffer-constructor": "error",
		"no-mixed-requires": "off",
		"no-new-require": "error",
		"no-path-concat": "error",
		"no-process-env": "off",
		"no-process-exit": "off",
		"no-restricted-modules": "off",
		"no-sync": [
			"error",
			{
				allowAtRootLevel: true
			}
		]
	}
};
