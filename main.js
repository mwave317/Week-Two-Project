// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
//console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let netamounts =0;
  let sum =0;
  for (i=0; i < data.length; i++) {
  netamounts = netamounts + data[i].price;
 }
  sum = netamounts / data.length;
  console.log(sum);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  let items = [];
  for (i = 0; i < data.length; i++) {
    if (data[i].price >= 14.00 && data[i].price <= 18.00 && data[i].currency_code === "USD") {
        items.push(data[i].title);
}

  }
    console.log(items);
}


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {

  for (i=0; i < data.length; i++) {
    // gbp = data[i].currency_code;
    if (data[i].currency_code === "GBP") {
      let name = data[i].title;

      let a = data[i].price;
      console.log(name, "costs", a, "pounds.");
    }
  }
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  let products = "";
    for (i=0; i < data.length; i++) {
      if (data[i].tags === "wood")
      products += data[i].title;
      for (j=0; j < data[i].materials.length; j++) {
        if (data[i].materials[j] === "wood") {
        products += data[i].title + " ";
        }

      }
  }
  console.log(products);
  }



// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  let products;
  let name;
  for (i=0; i < data.length; i++) {

  if (data[i].materials.length >= 8) {
    products = data[i].materials;
    name = data[i].title;

  console.log(name, products);
}

}

}



// 6: How many items were made by their sellers?
// Answer:
function question6 () {
 let madeby = ""; let amounts = 0; let netamounts = 0;
   for(i=0; i < data.length; i++)
   if (data[i].who_made === "i_did") {
     amounts = 1;
     netamounts = netamounts + amounts;
     madeby = netamounts;
   }
console.log(madeby + " items were made by their sellers.");
   }

// Supplemental Questions

// 7. List all materials in the dataset in a single array (no duplicates).
   function question7 () {
     let madeby = [];
     let a = "";
     for (let i=0; i < data.length; i++) {

     for (let j=0; j < data[i].materials.length; j++){
       for (let k=0; k < madeby.length; k++){
      if (madeby[k] !== data[i].materials[k]) {
      madeby.push(data[i].materials[k] + " ");
     }
       }
     }
}
     console.log(madeby);
  }
// 8. Provide a number of days as input. Return all items that could be processing that many days after the order is placed.

  function question8(o) {
    n = "";
    for (m=0; m <data.length; m++) {
      if (o >= data[m].processing_min && o <= data[m].processing_max ) {
      n += data[m].title;
      }
    }
    console.log(n);
  }
  question8(9);  //this works in repl.it. I'm unable to call the function to pass the input.


//9. Sort the items by popularity according to views. The most popular items should be first.
  function question9() {
    q = " ";
      for (let p =0; p < data.length; p++) {
    q += data[p].views + ", ";
  }
    console.log(Object.keys(data));
      }
// //10. Create an array of objects, with each object containing a category name and the total number of views of all items in that category. For example, all items that are in the 'Vintage' category should have their views totaled and set as the views property of the object. Every category should have its own object in the array.
  function question10() {

  }
// //11. Use the category path of each item to organize items based on their categories. You should create an object containing a series of other objects. At the end of each line of objects there should be an array of all items that exist on that path.
//   function question11()
//
//
//   }
