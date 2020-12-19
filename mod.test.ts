import { assertEquals, test, TestSuite } from "./deps.test.ts";
import { description } from "./mod.ts";

const aDescribedUnit = {
  name: "--> this line is the unit name (what is under testing) <--",
  given: "a description object",
  should: "return a formatted description string",
};

Deno.test(description(aDescribedUnit), () => {
  const actual = description(aDescribedUnit);
  const expected =
    `--> this line is the unit name (what is under testing) <--:\n  given: a description object\n  should: return a formatted description string\n`;
  assertEquals(actual, expected);
});

const aDescribedUnitInASuite = {
  given: "a description object",
  should: "return a formatted description string",
};

const testSuite: TestSuite<void> = new TestSuite({
  name:
    "--> this line is the unit name (what is under testing) in a test suite <--",
});

test(
  testSuite,
  description(aDescribedUnitInASuite),
  () => {
    const actual = description(aDescribedUnitInASuite);
    const expected =
      `\n  given: a description object\n  should: return a formatted description string\n`;
    assertEquals(actual, expected);
  },
);
