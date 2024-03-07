const tolerance = 5;

const noSecretsRules = {
	"no-secrets/no-secrets": [
		"error",
		{
			additionalDelimiters: [],
			additionalRegexes: {},
			ignoreCase: false,
			ignoreContent: [],
			ignoreIdentifiers: [],
			ignoreModules: true,
			tolerance
		}
	]
};

export default noSecretsRules;
