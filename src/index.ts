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
  
  console.log(concatenateArrays<string>(["a", "b"], ["c"], ["c", "e"], ["f"])); // Output: [ 'a', 'b', 'c', 'c', 'e', 'f' ]
  console.log(concatenateArrays([1, 2], [3, 4], [5])); // Output: [1, 2, 3, 4, 5]
  