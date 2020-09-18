const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});


// console.log("Hello")

// fetch('https://randomuser.me/api/')
//   .then( res => res.json() )
//   .then( data => {
//     console.log("Hi") 
//   })

// console.log("Sup?")

//Q1. the order would be the following:
// CONTENT NOT YET LOADED!
// Hello
// Sup?
// CONTENT LOADED!
// Hi



function fetchData(){
  let data = fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( console.log )
}

fetchData()

// asynchronous mean that functions everything starts running at the 'same' time
// in a sequential manner. This means that functions do not 'wait' for the previously
// invoked functions to be complete; everything is running simultaenously.
// this results in incompletely loaded page with broken functions on the backend.



