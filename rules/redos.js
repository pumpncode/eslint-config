const timeout = 10_000;

const redosRules = {
	"redos/no-vulnerable": [
		"error",
		{
			checker: "auto",
			ignoreErrors: true,
			permittableComplexities: [],
			timeout
		}
	]
};

export default redosRules;
