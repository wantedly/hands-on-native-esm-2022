## Command

```
node app.mjs
```

## Error Output

```
file://<dir>/app.mjs:1
import { bar } from "./lib.cjs";
         ^^^
SyntaxError: Named export 'bar' not found. The requested module './lib.cjs' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from './lib.cjs';
const { bar } = pkg;

    at ModuleJob._instantiate (node:internal/modules/esm/module_job:123:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:189:5)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:526:24)
    at async loadESM (node:internal/process/esm_loader:91:5)
    at async handleMainPromise (node:internal/modules/run_main:65:12)
```
