import fs from "node:fs";
import vm from "node:vm";

const m = new vm.SourceTextModule(
  fs.readFileSync("lib.mjs", "utf-8"));
await m.link(() => {});
await m.evaluate();
console.log(m.namespace.default);
