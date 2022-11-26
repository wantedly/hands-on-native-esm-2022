const fs = require("node:fs");
const m = { exports: {} };
const f = new Function("exports", "require", "module", "__filename", "__dirname", fs.readFileSync("lib.cjs", "utf-8"));
f(m.exports, null, m, "", "");
console.log(m.exports);
