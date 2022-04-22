const trim = require("../src/trim");
const left = trim.left;
const right = trim.right;

const equals = (actual, expected) => expect(actual).toBe(expected);

describe("trim", () => {
  test("trim should remove spaces from strings", () => {
    const examples = ["   trim   ", "trim   ", "   trim"];
    examples.map(example => equals(trim(example), "trim"));
  });

  test("trim should remove '/' from strings", () => {
    const examples = ["///trim///", "trim///", "///trim"];
    examples.map(example => equals(trim(example, "/"), "trim"));
  });
});

describe("left trim", () => {
  test("left trim should remove spaces from the beginning of string", () => {
    equals(left("   trim   "), "trim   ");
    equals(left("trim   "), "trim   ");
    equals(left("   trim"), "trim");
  });

  test("left trim should remove '/' from the beginning of strings", () => {
    equals(left("///trim///", "/"), "trim///");
    equals(left("trim///", "/"), "trim///");
    equals(left("///trim", "/"), "trim");
  });
});

describe("right trim", () => {
  test("right trim should remove spaces from the end of string", () => {
    equals(right("   trim   "), "   trim");
    equals(right("trim   "), "trim");
    equals(right("   trim"), "   trim");
  });

  test("right trim should remove '/' from the end of strings", () => {
    equals(right("///trim///", "/"), "///trim");
    equals(right("trim///", "/"), "trim");
    equals(right("///trim", "/"), "///trim");
  });
});
