import { join } from "@std/path";

import denoJson from "../deno.json" with { type: "json" };
import packageJson from "../package.json" with { type: "json" };

const {
	cwd,
	writeTextFile
} = Deno;

const packageJsonFilePath = join(cwd(), "package.json");

const collator = new Intl.Collator("en", {
	numeric: true
});

/**
 * Parses the version from a URL.
 *
 * @param {string} url
 * @returns {string}
 */
const parseVersion = (url) => url.replace(/^npm:.*?@(?=[^@]+$)/v, "");

/**
 * Converts import map entries to a sorted array of tuples with specificer and version.
 *
 * @param {readonly (readonly [string, string])[]} entries
 * @returns {readonly (readonly [string, string])[]}
 */
const convertImportMapEntries = (entries) => entries
	.map(([specificer, url]) => /** @type {const} */ ([specificer, parseVersion(url)]))
	.toSorted((
		[packageNameA],
		[packageNameB]
	) => collator.compare(
		packageNameA,
		packageNameB
	));

const updatedPackageJson = {
	...packageJson,
	dependencies: Object.fromEntries(
		convertImportMapEntries(
			Object.entries(denoJson.imports)
				.filter(([specifier, url]) => url.startsWith("npm:") && specifier !== "eslint")
		)
	),
	devDependencies: Object.fromEntries(
		convertImportMapEntries(
			Object.entries(denoJson.imports)
				.filter(([specifier, url]) => url.startsWith("npm:") && specifier === "eslint")
		)
	),
	peerDependencies: Object.fromEntries(
		convertImportMapEntries(
			Object.entries(denoJson.imports)
				.filter(([specifier, url]) => url.startsWith("npm:") && specifier === "eslint")
		)
	)
};

await writeTextFile(
	packageJsonFilePath,
	JSON.stringify(updatedPackageJson, null, "\t")
);
