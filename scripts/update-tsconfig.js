import { join } from "@std/path";

const {
	cwd,
	readTextFile,
	writeTextFile
} = Deno;

const denoJsonFilePath = join(cwd(), "deno.json");
const denoJsonFileContent = await readTextFile(denoJsonFilePath);
const denoJson = JSON.parse(denoJsonFileContent);

const tsconfigFilePath = join(cwd(), "tsconfig.json");
const tsconfigFileContent = await readTextFile(tsconfigFilePath);
const tsconfig = JSON.parse(tsconfigFileContent);

const collator = new Intl.Collator("en", {
	numeric: true
});

const updatedTsconfig = {
	...tsconfig,
	compilerOptions: Object.fromEntries(
		Object.entries({
			...tsconfig.compilerOptions,
			...Object.fromEntries(
				Object.entries(
					denoJson.compilerOptions
				)
					.filter(([key]) => key !== "lib")
			)
		})
			.toSorted((
				[keyA],
				[keyB]
			) => collator.compare(
				keyA,
				keyB
			))
	)
};

await writeTextFile(
	tsconfigFilePath,
	JSON.stringify(updatedTsconfig, null, "\t")
);
