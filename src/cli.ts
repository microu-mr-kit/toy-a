import { argv } from "node:process";
import { checkIntArgument } from "./utils";
import { ToyLorem } from "./toy_lorem";

function main(args: string[]) {
  let n = 3;

  if (args.length >= 3) {
    const [v, error] = checkIntArgument(1, 12, argv[2]);
    if (error != undefined) {
      console.log("[ERROR]", error);
      return;
    }
    n = v;
  }

  const tl = new ToyLorem();

  const paragraphs = tl.generate(n);
  let index = 1;
  for (const p of paragraphs) {
    console.log(`${index}/ ${p}\n`);
    index += 1;
  }
}

main(argv);
