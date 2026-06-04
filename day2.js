// Task 1 — “this” inside an object method

// Create a user object that has name and login() method.
// Inside login(), print the username using this.name.
const user =
{
    name: "Sudil",
    login() {
    console.log("successfull login," + this.name);

}
}
user.login();



// Task 2 — “this” losing context

// Create a button click example (even if simulated) where calling a method loses this, then fix it using .bind(this)
const buttonclickeg={
    button:"activate",
    click()
    {
        console.log("button clicked successfully",+this.name);
    }
}
// const execute=buttonclickeg.click;
// exexute();//not defined error
const improvedexecute = buttonclickeg.click.bind(buttonclickeg);
improvedexecute();//no error proper output




// Task 3 — Module: Export a config

// Create a config.js and export API_BASE_URL, then import it inside main.js and print it.
import { API_BASE_URL } from "/.config.js";
console.log(API_BASE_URL);





// Task 4 — Module: Utility functions

// Make a utils.js with:

// formatCurrency()

// generateRandomId()

// getTodayDate()

// Import and use them in another file.







// Task 5 — Class representing a Product

// Create a class Product with:

// name

// price

// getInfo()

// Create an object and print info.








// Task 6 — Inheritance example

// Create Product, then extend a new class FoodProduct that has an expiry date










// Task 7 — Promise for fetching settings

// Create a function that returns a Promise that resolves after 2 seconds with app settings (theme, language).

// Use .then() to print them.








// Task 8 — async/await fetching mock data

// Create a function fetchUsers() that returns a Promise with an array of users after 1 second.
// Use async/await to get and log users.






// Task 9 — try/catch handling API errors

// Modify the previous task so the promise randomly rejects.
// Add try/catch to show a friendly message.







// Task 10 — Combine everything

// Build a tiny app flow:

// Import config

// Create Product class

// Fetch mock product list using async/await

// Handle errors using try/catch

// Log formatted result using a utility function



