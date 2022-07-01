test("test toBe", () => {
  let name = "Novianto";
  let hello = `Hello ${name}`;

  expect(hello).toBe("Hello Novianto");
});

test("test toEquals", () => {
  let person = { id: "123" };
  Object.assign(person, { name: "Novianto" });

  expect(person).toEqual({ id: "123", name: "Novianto" });
});
