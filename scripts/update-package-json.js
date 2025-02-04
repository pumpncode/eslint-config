import { join } from "@std/path";

const {
	cwd,
	readTextFile,
	writeTextFile
} = Deno;

const importMapFilePath = join(cwd(), "deno.json");
const importMapFileContent = await readTextFile(importMapFilePath);
const importMap = JSON.parse(importMapFileContent);

const packageJsonFilePath = join(cwd(), "package.json");
const packageJsonFileContent = await readTextFile(packageJsonFilePath);
const packageJson = JSON.parse(packageJsonFileContent);

const collator = new Intl.Collator("en", {
	numeric: true
});

const updatedPackageJson = {
	...packageJson,
	dependencies: Object.fromEntries(
		Object.entries(
			importMap.imports
		)
			.filter(([specifier, url]) => url.startsWith("npm:"))
			.map(([specificer, url]) => {
				const version = url.replace(/^npm:.*?@(?<version>[^@]+)$/v, "$<version>");

				return [specificer, version];
			})
			.toSorted((
				[packageNameA],
				[packageNameB]
			) => collator.compare(
				packageNameA,
				packageNameB
			))
	)
};

await writeTextFile(
	packageJsonFilePath,
	JSON.stringify(updatedPackageJson, null, "\t")
);
