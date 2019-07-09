// Create a higher order function and invoke the callback function to test your work. You have 
// been provided an example of a problem and a solution to see how this works with our 
// items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

// 1
function getLength(arr, cb) {
  return cb(arr.length);
}

getLength(items, function(length){
  console.log(length);
});

// 2
function last(arr, cb) {
  return cb(arr.slice(-1)[0]);
}

last(items, function(last){
  console.log(last);
});

// 3
function sumNums(x, y, cb) {
  return cb(x, y);
}

sumNums(1, 1, function(x, y) {
  console.log(x + y);
});

// 4 
function multiplyNums(x, y, cb) {
  return cb(x, y);
}

multiplyNums(2, 2, function(x,y) {
  console.log(x * y);
});

// 5 
function contains(item, list, cb) {
  if(list.includes(item)){
    return cb(true);
  } else {
    return cb(false);
  }
}

contains('yo-yo', items, function(result){
  console.log(result);
});

contains('Backpack', items, function(result){
  console.log(result);
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
