## Module execution

```javascript
// sleep.mjs
import { setTimeout } from "node:timers/promises";

await setTimeout(3000);

console.log("slept 3s");
```

```javascript
// sleep.mjs
import { setTimeout } from "node:timers/promises";

await setTimeout(3000);

export const value = 42;
```

```javascript
// sleep2.mjs
import { value } from "./sleep.mjs";

console.log("value =", value);
```

```javascript
// sleep2.mjs
const { value } = await import("./sleep.mjs");

console.log("value =", value);
```

```javascript
// sleep2.cjs
const { value } = require("./sleep.mjs");

console.log("value =", value);
```

```javascript
// sleep2.cjs
const { value } = await import("./sleep.mjs");

console.log("value =", value);
```

```javascript
// sleep2.cjs
import("./sleep.mjs").then(({ value }) => {
  console.log("value =", value);
});
```

```javascript
// sleep2.cjs
import("./sleep.mjs").then(({ value }) => {
  exports.value2 = value * 2;
});
```
