var mysql = require("mysql");

var products;

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Aa1Aa1Aa1",
  database: "bamazon"
});


function readProducts() {
    console.log("Listing all products...\n");
    connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    products = res;
    for (var i = 0; i < res.length; i++) {
        console.log("id: " + res[i].id);
        console.log("Name: " + res[i].product_name);
        console.log("Department: " + res[i].department_name);
        console.log("Price: $" + res[i].price);
        console.log("# in stock: " + res[i].stock_quantity);
        console.log("");
    }
  
    connection.end();
    });
}
  


readProducts();

var inquirer = require("inquirer");

// Created a series of questions
function purchase() {
    inquirer.prompt([

    {
        type: "input",
        name: "product",
        message: "Which product would you like to buy? (input the appropriate id number)"
    },

    {
        type: "input",
        name: "amount",
        message: "How much do you wish to purchase?",
    }
    ]).then(function(user) {

    // If the user guesses the password...
    console.log("");
    console.log("You purchased " + user.amount + " unit(s) of " + products[parseInt(user.product - 1)].product_name);

    });
}

purchase();
