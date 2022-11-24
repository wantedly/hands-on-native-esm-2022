## Command

```
node b.cjs
```

## Error Output

```
node:internal/modules/cjs/loader:1031
    throw new ERR_REQUIRE_ESM(filename, true);
    ^

Error [ERR_REQUIRE_ESM]: require() of ES Module <dir>/a.mjs not supported.
Instead change the require of <dir>/a.mjs to a dynamic import() which is available in all CommonJS modules.
    at Object.<anonymous> (<dir>/b.cjs:3:33) {
  code: 'ERR_REQUIRE_ESM'
}
```
