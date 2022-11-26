## Command

```
node app.cjs
```

## Error Output

```
node:internal/modules/cjs/loader:1031
    throw new ERR_REQUIRE_ESM(filename, true);
    ^

Error [ERR_REQUIRE_ESM]: require() of ES Module <dir>/lib.mjs not supported.
Instead change the require of <dir>/lib.mjs to a dynamic import() which is available in all CommonJS modules.
    at Object.<anonymous> (<dir>/app.cjs:3:33) {
  code: 'ERR_REQUIRE_ESM'
}
```
