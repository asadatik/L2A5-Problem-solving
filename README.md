TypeScript Blog: Exploring any, unknown, never and Type Combinations (Union & Intersection)
01. Explain the difference between any, unknown, and never types in TypeScript
In TypeScript, any, unknown, and never are special types that help handle different levels of type safety.

any
The most flexible type.
Disables type checking completely.
Use with caution, as it can lead to runtime errors.
let data: any = "Hello";
data = 42;
data = true;
You can access any property on any, but there no IntelliSense or error checking.

unknown
Similar to any, but stricter.

You can’t use a value of type unknown unless you narrow or assert its type.

let value: unknown = "TypeScript";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
This promotes safe coding practices compared to any.

never
Represents values that never occur.

Used for:

Functions that never return

Exhaustive checking in switch cases

function throwError(message: string): never {
  throw new Error(message);
}

function checkType(x: string | number) {
  if (typeof x === "string") {
    console.log("String");
  } else if (typeof x === "number") {
    console.log("Number");
  } else {
    const _exhaustive: never = x; // Error if a new type is added
  }
}
02. Using union and intersection types in TypeScript
Union Type (|)
Union types are used when a variable can be one of multiple types.

type ID = string | number;

let userId: ID;

userId = "abc123";
userId = 456;
It’s useful when a value can be more than one type but only one at a time.

Intersection Type (&)
Intersection types combine multiple types into one. The final type will have all properties from the combined types.

type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

type EmployeeProfile = Person & Employee;

const emp: EmployeeProfile = {
  name: "Alice",
  age: 30,
  employeeId: 101,
  department: "Engineering",
};
This is useful for extending multiple types in a clean way

Summary:
Use any when you need flexibility (but prefer not to).

Use unknown when the type is not known but should be verified.

Use never when a function will never return or a type should not occur.

Use Union (|) for either-or types.

Use Intersection (&) to merge multiple types into one.

These tools help TypeScript developers write more expressive, reusable, and safe code.
