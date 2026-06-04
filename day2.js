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
import { API_BASE_URL } from "./config.js";
console.log(API_BASE_URL);





// Task 4 — Module: Utility functions

// Make a utils.js with:

// formatCurrency()

// generateRandomId()

// getTodayDate()

// Import and use them in another file.


import {
    formatCurrency,
    generateRandomId,
    getTodayDate
} from "./utils.js";

console.log(formatCurrency(99.99));
console.log(generateRandomId());
console.log(getTodayDate());




// Task 5 — Class representing a Product

// Create a class Product with:

// name

// price

// getInfo()

// Create an object and print info.

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getInfo() {
        return `${this.name} costs $${this.price}`;
    }
}

const p1 = new Product("Laptop", 1200);

console.log(p1.getInfo());






// Task 6 — Inheritance example

// Create Product, then extend a new class FoodProduct that has an expiry date



class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getInfo() {
        return `${this.name} costs $${this.price}`;
    }
}

class FoodProduct extends Product {
    constructor(name, price, expiryDate) {
        super(name, price);
        this.expiryDate = expiryDate;
    }

    getExpiryInfo() {
        return `${this.name} expires on ${this.expiryDate}`;
    }
}

const milk = new FoodProduct(
    "Milk",
    3,
    "2026-06-15"
);

console.log(milk.getInfo());
console.log(milk.getExpiryInfo());






// Task 7 — Promise for fetching settings

// Create a function that returns a Promise that resolves after 2 seconds with app settings (theme, language).

// Use .then() to print them.



function getSettings() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                theme: "dark",
                language: "English"
            });
        }, 2000);
    });
}

getSettings()
    .then((settings) => {
        console.log(settings);
    });




// Task 8 — async/await fetching mock data

// Create a function fetchUsers() that returns a Promise with an array of users after 1 second.
// Use async/await to get and log users.


function fetchUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "Sudil" },
                { id: 2, name: "Ram" }
            ]);
        }, 1000);
    });
}

async function loadUsers() {
    const users = await fetchUsers();

    console.log(users);
}

loadUsers();



// Task 9 — try/catch handling API errors

// Modify the previous task so the promise randomly rejects.
// Add try/catch to show a friendly message.



function fetchUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const success = Math.random() > 0.5;

            if (success) {
                resolve([
                    { id: 1, name: "Sudil" },
                    { id: 2, name: "Ram" }
                ]);
            } else {
                reject("Server unavailable");
            }

        }, 1000);
    });
}

async function loadUsers() {
    try {
        const users = await fetchUsers();

        console.log(users);

    } catch (error) {
        console.log(
            "Could not load users. Please try again later."
        );
    }
}

loadUsers();



// Task 10 — Combine everything

// Build a tiny app flow:

// Import config

// Create Product class

// Fetch mock product list using async/await

// Handle errors using try/catch

// Log formatted result using a utility function



import { API_BASE_URL } from "./config.js";
import { formatCurrency } from "./utils.js";

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getInfo() {
        return `${this.name} - ${formatCurrency(this.price)}`;
    }
}

function fetchProducts() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const success = Math.random() > 0.3;

            if (success) {
                resolve([
                    new Product("Laptop", 1200),
                    new Product("Mouse", 25)
                ]);
            } else {
                reject("Failed to fetch products");
            }

        }, 1000);

    });
}

async function startApp() {

    try {

        console.log(
            "API URL:",
            API_BASE_URL
        );

        const products =
            await fetchProducts();

        products.forEach((product) => {
            console.log(
                product.getInfo()
            );
        });

    } catch (error) {

        console.log(
            "Something went wrong:",
            error
        );

    }
}

startApp();