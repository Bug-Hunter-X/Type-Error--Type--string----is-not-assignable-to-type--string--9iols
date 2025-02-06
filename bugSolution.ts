function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John Smith"];

// Correct way to handle single string from array
let firstUser = user[0];
console.log(greeter(firstUser)); // Output: Hello, Jane User

//Handling an array of strings with a loop or map function
user.forEach(userName => console.log(greeter(userName)));
//Output:
//Hello, Jane User
//Hello, John Smith