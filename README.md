# describe

A simple description formatter for Deno unit tests.


## Usage

```typescript
import { assert } from "https://deno.land/std/testing/asserts.ts";

import { description } from "https://deno.land/x/describe/mod.ts";

Deno.test(description({
  name: "what is being tested",
  given: "under what conditions",
  should: "what should happen"
}), () => {
  assert(true);
});
```


## Authors

**Andre Silva** - [andreswebs](https://github.com/andreswebs)


## License

This project is licensed under the [Unlicense](UNLICENSE.md).

