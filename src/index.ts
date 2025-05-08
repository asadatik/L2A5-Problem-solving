// Problem 1
function formatString(input: string, toUpper?: boolean): string {
  let toUpperUndefined = "no";

  toUpper ?? (toUpperUndefined = "yes");

  if (input && (toUpper || toUpperUndefined === "yes")) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}



 // Problem 2:
 function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
  return items.filter(item => item.rating >= 4);
}

 
 const books = [
   { title: "Book A", rating: 4.5 },
   { title: "Book B", rating: 3.2 },
   { title: "Book C", rating: 5.0 },
 ];
 


 
  // Problem 3:
  function concatenateArrays<T>(...arrays: T[][]): T[] {
    let newArr: T[] = [];
    arrays.map((array) => {
      array.map((element) => newArr.push(element));
    });
    return newArr;
  }
  
 // Problem 4:
  
 class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);  // Call parent constructor
    this.model = model;
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}



//  5 //

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

 
  

 // Problem 6:
 interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length > 0) {
    let expensiveProduct = products[0];
    products.map(
      (product) =>
        product.price > expensiveProduct.price && (expensiveProduct = product)
    );
    return expensiveProduct;
  } else {
    return null;
  }
}

const products: Product[] = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];




enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === 5 || day === 6) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}



