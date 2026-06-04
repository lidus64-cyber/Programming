// Task 1 – Variables and Template Literals
// Create two variables, firstName and lastName, and combine them into a greeting message using template literals. Log the message.
let firstname= "Sudil"
let lastname = "Lohala"
let greeting = `Hello ${firstname} ${lastname},Have a Good Day!! `
console.log(greeting);


//Task 2 - Let and Const scope
// Create a let variable inside a block {} and try to access it outside. Then do the same with a const variable. Observe the errors.
{
    let variable = "hello sir"
    const PI = 3.1415
}
//console.log(PI)//throws error saying variable not defined
//console.log(variable)//constant not defined


// Task 3 – Arrow Function Simple
// Write an arrow function greet that takes a name and returns "Hello, !". Test it with your name.
const greet = (name) =>
{
    return `Hello, ${name}!!`;
}
console.log(greet("sudil Lohala"));


// Task 4 – Arrow Function with Multiple Parameters
// Write an arrow function multiply that takes two numbers and returns their product. Log the result for 5 and 6.
let product = (a,b) =>
{
    return a*b;
}
console.log("the product of 5 and 6 is :",product(5,6))


// Task 5 – Object Destructuring
// Create an object person with keys name, age, and country. Destructure the object to extract name and country into variables and log them.
const person = 
{
    name:"Sudil",
    age:"18",
    country:"Nepal"
};
let {name , country} = person;
console.log(name);
console.log(country);


// Task 6 – Array Destructuring
// Create an array [10, 20, 30, 40]. Destructure the first two elements into variables and log them.
const array = [10, 20, 30, 40];
let [a,b] = array;
console.log(a);
console.log(b);


// Task 7 – Default Parameters
// Write a function sayHello with a parameter name that defaults to "Guest" if not provided. Log the output when called with and without an argument.
let call = (name="guest") =>
{
    return `hello ${name}`;
}
console.log(call());
console.log(call("sudil"))


// Task 8 – Rest Operator (Sum of Numbers)
// Write a function sumAll using the rest operator (...numbers) that calculates the sum of any number of inputs. Test with 1, 2, 3, 4.
let sumAll = (...numbers) =>
{
    return numbers.reduce((total,n) => total + n , 0);
}
console.log(sumAll(1,2,3,4));


// Task 9 – Spread Operator with Arrays
// Create two arrays [1, 2, 3] and [4, 5]. Merge them into a new array using the spread operator and log the result.
let arr1 = [1,2,3];
let arr2 = [4,5];
let arr3 = [...arr1,...arr2];
console.log(arr3);



// Task 10 – Merge and Destructure Objects
// Create two objects: {a: 1, b: 2} and {c: 3, d: 4}. Merge them using the spread operator. Then destructure the merged object to extract a and d and log them.





