## Default export

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

```javascript
// app.mjs
import { default as square } from "./lib.mjs";

console.log(square(2));
```

```javascript
// lib.mjs
function square(x) {
  return x * x;
}
export { square as default };
```
