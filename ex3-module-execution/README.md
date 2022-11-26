## Module execution

```javascript
// sleep.mjs
import { setTimeout } from "node:timers/promises";

await setTimeout(3000);

console.log("slept 3s");
```

```javascript
// sleep-lib.mjs
import { setTimeout } from "node:timers/promises";

await setTimeout(3000);

export const value = 42;
```

```javascript
// sleep-app.mjs
import { value } from "./sleep-lib.mjs";

console.log("value =", value);
```

```javascript
// sleep-app.mjs
const { value } = await import("./sleep-lib.mjs");

console.log("value =", value);
```

```javascript
// sleep-app.cjs
const { value } = require("./sleep-lib.mjs");

console.log("value =", value);
```

```javascript
// sleep-app.cjs
const { value } = await import("./sleep-lib.mjs");

console.log("value =", value);
```

```javascript
// sleep-app.cjs
import("./sleep-lib.mjs").then(({ value }) => {
  console.log("value =", value);
});
```

```javascript
// sleep-app.cjs
import("./sleep-lib.mjs").then(({ value }) => {
  exports.value2 = value * 2;
});
```
