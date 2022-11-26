## Command

```
node --experimental-loader ./loader.mjs app.mjs
```

## Output

```
(node:27125) ExperimentalWarning: Custom ESM Loaders is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file://<dir>/lib.mjs
file://<dir>/app.mjs
42
```
