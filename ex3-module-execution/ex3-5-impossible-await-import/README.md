## Command

```
node sleep-app.cjs
```

## Output

```
<dir>/sleep-app.cjs:1
const { value } = await import("./sleep-lib.mjs");
                  ^^^^^

SyntaxError: await is only valid in async functions and the top level bodies of modules
    at Object.compileFunction (node:vm:360:18)
    at wrapSafe (node:internal/modules/cjs/loader:1084:15)
    at Module._compile (node:internal/modules/cjs/loader:1119:27)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)
    at Module.load (node:internal/modules/cjs/loader:1033:32)
    at Function.Module._load (node:internal/modules/cjs/loader:868:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:22:47
```
