const { linearSearch, globalLinearSearch } = require("./linearSearch.js");

describe("tests linearSearch for short, sorted number arrays", () => {
  test("linearSearch(1, [1, 2, 3]) === 0", () => {
    expect(linearSearch(1, [1, 2, 3])).toBe(0);
  });

  test("linearSearch(3, [1, 2, 3]) === 2", () => {
    expect(linearSearch(3, [1, 2, 3])).toBe(2);
  });

  test("linearSearch(4, [1, 2, 3]) === undefined", () => {
    expect(linearSearch(4, [1, 2, 3])).toBe(undefined);
  });
});

describe("tests linearSearch for short, unsorted number arrays", () => {
  test("linearSearch(5, [5, 7, 2]) === 0", () => {
    expect(linearSearch(5, [5, 7, 2])).toBe(0);
  });

  test("linearSearch(2, [5, 7, 2]) === 2", () => {
    expect(linearSearch(2, [5, 7, 2])).toBe(2);
  });

  test("linearSearch(8, [5, 7, 2]) === undefined", () => {
    expect(linearSearch(8, [5, 7, 2])).toBe(undefined);
  });
});

describe("tests linearSearch for long, sorted number arrays", () => {
  test("linearSearch(18, [2,3,4,7,10,10,12,14,15,18,20,25,30,32,34,35,36,38,40,42,43,45,46,48,49,49,50,52,54,55,56,59,61,63,63,64,65,66,67,70,72,73,74,75] === 9", () => {
    expect(
      linearSearch(
        18,
        [
          2, 3, 4, 7, 10, 10, 12, 14, 15, 18, 20, 25, 30, 32, 34, 35, 36, 38,
          40, 42, 43, 45, 46, 48, 49, 49, 50, 52, 54, 55, 56, 59, 61, 63, 63,
          64, 65, 66, 67, 70, 72, 73, 74, 75,
        ]
      )
    ).toBe(9);
  });
  test("linearSearch(63, [2,3,4,7,10,10,12,14,15,18,20,25,30,32,34,35,36,38,40,42,43,45,46,48,49,49,50,52,54,55,56,59,61,63,63,64,65,66,67,70,72,73,74,75] === 33", () => {
    expect(
      linearSearch(
        63,
        [
          2, 3, 4, 7, 10, 10, 12, 14, 15, 18, 20, 25, 30, 32, 34, 35, 36, 38,
          40, 42, 43, 45, 46, 48, 49, 49, 50, 52, 54, 55, 56, 59, 61, 63, 63,
          64, 65, 66, 67, 70, 72, 73, 74, 75,
        ]
      )
    ).toBe(33);
  });
  test("linearSearch(63, [2,3,4,7,10,10,12,14,15,18,20,25,30,32,34,35,36,38,40,42,43,45,46,48,49,49,50,52,54,55,56,59,61,63,63,64,65,66,67,70,72,73,74,75] !== 34", () => {
    expect(
      linearSearch(
        63,
        [
          2, 3, 4, 7, 10, 10, 12, 14, 15, 18, 20, 25, 30, 32, 34, 35, 36, 38,
          40, 42, 43, 45, 46, 48, 49, 49, 50, 52, 54, 55, 56, 59, 61, 63, 63,
          64, 65, 66, 67, 70, 72, 73, 74, 75,
        ]
      )
    ).not.toBe(34);
  });
  test("linearSearch(57, [2,3,4,7,10,10,12,14,15,18,20,25,30,32,34,35,36,38,40,42,43,45,46,48,49,49,50,52,54,55,56,59,61,63,63,64,65,66,67,70,72,73,74,75] === undefined", () => {
    expect(
      linearSearch(
        57,
        [
          2, 3, 4, 7, 10, 10, 12, 14, 15, 18, 20, 25, 30, 32, 34, 35, 36, 38,
          40, 42, 43, 45, 46, 48, 49, 49, 50, 52, 54, 55, 56, 59, 61, 63, 63,
          64, 65, 66, 67, 70, 72, 73, 74, 75,
        ]
      )
    ).toBe(undefined);
  });
});

describe("tests linearSearch for strings", () => {
  test("linearSearch('l', 'hello world') === 2", () => {
    expect(linearSearch("l", "hello world")).toBe(2);
  });
  test("linearSearch('l', 'hello world') !== 3", () => {
    expect(linearSearch("l", "hello world")).not.toBe(3);
  });
  test("linearSearch('w', 'hello world') === 6", () => {
    expect(linearSearch("w", "hello world")).toBe(6);
  });
  test("linearSearch(a', 'hello world') === undefined", () => {
    expect(linearSearch("a", "hello world")).toBe(undefined);
  });
});

describe("tests globalLinearSearch", () => {
  test("globalLinearSearch('a', 'bananas'.split('')) === [1, 3, 5]", () => {
    expect(globalLinearSearch("a", "bananas".split(""))).toEqual([1, 3, 5]);
  });

  test("globalLinearSearch('s', 'bananas'.split('')) === [6]", () => {
    expect(globalLinearSearch("s", "bananas".split(""))).toEqual([6]);
  });

  test("globalLinearSearch('n', 'bananas'.split('')) === [2, 4]", () => {
    expect(globalLinearSearch("n", "bananas".split(""))).toEqual([2, 4]);
  });
});
