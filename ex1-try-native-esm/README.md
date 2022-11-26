## Let's try ESM!

```javascript
// lib.mjs
export default function(x) {
  return x * x;
}
```

```javascript
// app.mjs
import square from "./lib.mjs";

console.log(square(2));
```
