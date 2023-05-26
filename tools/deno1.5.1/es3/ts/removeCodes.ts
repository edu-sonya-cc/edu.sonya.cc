/*
	deno run --allow-read --allow-write P:\ecs_person\websites\sonya.cc\edu_git\tools\deno1.5.1\es3\ts\removeCodes.ts ~filename~
	cls && deno run --allow-read --allow-write P:\ecs_person\websites\sonya.cc\edu_git\tools\deno1.5.1\es3\ts\removeCodes.ts ~filename~
	
	deno doc P:\ecs_person\websites\sonya.cc\edu_git\tools\deno1.5.1\es3\ts\removeCodes.ts
*/

/**
	* @params filename 
	*/
export async function removeCodes(filename: string): void {
	const goalContent: string = (await Deno.readTextFile(filename))
	
		.replace(`// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.\n\n// This is a specialised implementation of a System module loader.\n\n`, '')

    .replace('  ', '\t')
		
    // .replace(/"use strict";\n\n\/\/ @ts-nocheck\n\/\* eslint-disable \*\/\nvar System, __instantiate;(\n.+){171}\n\}\)\(\);\n\n/gi, '')

    .replace(/"use strict";\nvar __extends = \(this && this\.__extends\) \|\| \(function \(\) \{(\n.+){11}\n\}\)\(\);\n/gi, '')

    .replace(/var __assign = \(this && this\.__assign\) \|\| function \(\) \{(\n.+){9}return __assign\.apply\(this, arguments\);\n\};\n/gi, '')

    .replace(/export const /g, 'const ')
    .replace(/export var /g, 'var ')

		.replace(/export \{ cssVersions as cssVersions \};\n/g, '')
		.replace(/export \{ jsVersions as jsVersions \};\n/g, '')
		.replace(/export \{ mainImageVersions as mainImageVersions \};\n/g, '')
		.replace('// deno-fmt-ignore-file\n// deno-lint-ignore-file\n// This code was bundled using \`deno bundle\` and it\'s not recommended to edit it manually\n\n', '')

		.replace(/const __exp = /g, '__exp = ')
		.replace(/export default __exp\[".+"\];\n/g, '')

		.replace(/\nconst /g, '\nvar ')
		.replace(/\nlet /g, '\nvar ')

		.replace(/\(const /g, '(var ')
		.replace(/\(let /g, '(var ')

		.replace('let __exp;', 'var __exp;')
		// .replace(/"use strict";\n/g, '')
  ;

	await Deno.writeTextFile(filename, goalContent);
}

removeCodes(Deno.args[0]);
