import { LoremIpsum } from "lorem-ipsum";
import { IGeneratorOptions } from "lorem-ipsum/types/src/lib/generator";

export class ToyLorem {
  private _loremIpsum: LoremIpsum;
  constructor(options?: IGeneratorOptions) {
    this._loremIpsum = new LoremIpsum(options, "plain", "\n");
  }

  generate(n:number) {
    return this._loremIpsum.generateParagraphs(n).split("\n")
  }
}
