## Command

```
node app.mjs
```

## Error Output

```
node:internal/process/esm_loader:97
    internalBinding('errors').triggerUncaughtException(
                              ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find module '<dir>/lib' imported from <dir>/app.mjs
Did you mean to import ../lib.js?
    at new NodeError (node:internal/errors:387:5)
    at finalizeResolution (node:internal/modules/esm/resolve:330:11)
    at moduleResolve (node:internal/modules/esm/resolve:907:10)
    at defaultResolve (node:internal/modules/esm/resolve:1115:11)
    at nextResolve (node:internal/modules/esm/loader:163:28)
    at ESMLoader.resolve (node:internal/modules/esm/loader:837:30)
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:424:18)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:76:40)
    at link (node:internal/modules/esm/module_job:75:36) {
  code: 'ERR_MODULE_NOT_FOUND'
}
```
