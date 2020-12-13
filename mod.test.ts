import { assertEquals } from "./deps.test.ts";
import { description } from "./mod.ts";

const aDescribedUnit = {
  name: "this line is the unit name (what is under testing)",
  given: "a description object",
  should: "return a formatted description string",
};

Deno.test(description(aDescribedUnit), () => {
  const actual = description(aDescribedUnit);
  const expected =
    `this line is the unit name (what is under testing):\n  given: a description object\n  should: return a formatted description string\n`;
  assertEquals(actual, expected);
});
