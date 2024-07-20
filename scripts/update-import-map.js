import { join } from "@std/path";

const {
	cwd,
	readTextFile,
	writeTextFile
} = Deno;

const packageJsonFilePath = join(cwd(), "package.json");
const packageJsonFileContent = await readTextFile(packageJsonFilePath);
const packageJson = JSON.parse(packageJsonFileContent);

const importMapFilePath = join(cwd(), "import-map.json");
const importMapFileContent = await readTextFile(importMapFilePath);
const importMap = JSON.parse(importMapFileContent);

const collator = new Intl.Collator("en", {
	numeric: true
});

const updatedImportMap = {
	...importMap,
	imports: Object.fromEntries(

		Object.entries({
			...importMap.imports,
			...Object.fromEntries(
				Object.entries(
					packageJson.dependencies
				)
					.map(([packageName, packageVersion]) => [packageName, `npm:${packageName}@${packageVersion}`])
			)
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
	importMapFilePath,
	JSON.stringify(updatedImportMap, null, "\t")
);
