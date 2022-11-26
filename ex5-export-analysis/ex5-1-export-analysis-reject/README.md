## Command

```
node app.mjs
```

## Error Output

```
file://<dir>/app.mjs:1
import { bar } from "./lib.mjs";
         ^^^
SyntaxError: The requested module './lib.mjs' does not provide an export named 'bar'
    at ModuleJob._instantiate (node:internal/modules/esm/module_job:123:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:189:5)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:526:24)
    at async loadESM (node:internal/process/esm_loader:91:5)
    at async handleMainPromise (node:internal/modules/run_main:65:12)
```
