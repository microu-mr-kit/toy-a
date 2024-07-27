import typescript from "@rollup/plugin-typescript";
import { glob } from "glob";

const typescriptOptions = {
  exclude: ["tests/**/*"],
  compilerOptions: { declaration: false, declarationDir: null },
};

const inputList = glob.sync("src/**/index.ts");
inputList.push("src/cli.ts");

const data = [
  {
    external: ["lorem-ipsum", "node:process"],
    input: inputList,
    output: { dir: "dist/esm/", format: "esm" },
    plugins: [typescript({ ...typescriptOptions, outDir: "dist/esm/" })],
  },
  {
    external: ["lorem-ipsum", "node:process"],
    input: inputList,
    output: { dir: "dist/cjs/", format: "cjs",chunkFileNames:"[name]-[hash].cjs", entryFileNames:"[name].cjs" },
    plugins: [typescript({ ...typescriptOptions, outDir: "dist/cjs/" })],
  },
];

export default data;
