## Command

```
node meta.mjs
```

## Error Output

```
file://<dir>/meta.mjs:1
console.log(`I'm ${__filename}`);
                   ^

ReferenceError: __filename is not defined in ES module scope
    at file://<dir>/meta.mjs:1:20
    at ModuleJob.run (node:internal/modules/esm/module_job:193:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:526:24)
    at async loadESM (node:internal/process/esm_loader:91:5)
    at async handleMainPromise (node:internal/modules/run_main:65:12)
```
