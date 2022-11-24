## Let's try ESM!

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
