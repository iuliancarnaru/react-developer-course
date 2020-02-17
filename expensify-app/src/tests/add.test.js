const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}.`;

test("should add two numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("should generate greeting when name provided", () => {
  const greeting = generateGreeting("Iulian");
  expect(greeting).toBe("Hello Iulian.");
});

test("should generate greeting when no name provided", () => {
  const greeting = generateGreeting();
  expect(greeting).toBe("Hello Anonymous.");
});
