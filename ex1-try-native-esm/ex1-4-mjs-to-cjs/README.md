## Command

```
node b.mjs
```

## Error Output

```
file://<dir>/b.mjs:3
console.log(square(2));
            ^

TypeError: square is not a function
    at file://<dir>/b.mjs:3:13
    at ModuleJob.run (node:internal/modules/esm/module_job:193:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:526:24)
    at async loadESM (node:internal/process/esm_loader:91:5)
    at async handleMainPromise (node:internal/modules/run_main:65:12)
```
