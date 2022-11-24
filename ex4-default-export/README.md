## Default export

```javascript
// a.mjs
export default function(x) {
  return x * x;
}
```

```javascript
// b.mjs
import square from "./a.mjs";

console.log(square(2));
```

```javascript
// b2.mjs
import { default as square } from "./a.mjs";

console.log(square(2));
```

```javascript
// a2.mjs
function square(x) {
  return x * x;
}
export { square as default };
```
