## Command

```
node sleep2.cjs
```

## Output

```
node:internal/modules/cjs/loader:1031
    throw new ERR_REQUIRE_ESM(filename, true);
    ^

Error [ERR_REQUIRE_ESM]: require() of ES Module <dir>/sleep.mjs not supported.
Instead change the require of <dir>/sleep.mjs to a dynamic import() which is available in all CommonJS modules.
    at Object.<anonymous> (<dir>/sleep2.cjs:1:19) {
  code: 'ERR_REQUIRE_ESM'
}
```
