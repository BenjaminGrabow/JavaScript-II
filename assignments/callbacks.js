// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

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


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
}

// Higher order function using "cb" as the call back
function getLength(arr, cb) {
  return cb(arr.length);
}

// Function invocation
getLength(items, function (last) {
  console.log(last)
});

///////////////////////////////////////////////////////////

function last(arr, cb) {
  // last passes the last item of the array into the callback.
}

// Higher order function using "cb" as the call back
function last(arr, cb) {
  return cb(arr[arr.length - 1]);
}

// Function invocation
last(items, function (last) {
  console.log(last)
});

////////////////////////////////////////////////////////////

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

// Higher order function using "cb" as the call back
function sumNums(x, y, cb) {
  return cb(x + y);
}

// Function invocation
sumNums(8, 12, function (sum) {
  console.log(sum);
});

///////////////////////////////////////////////////////////

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

// Higher order function using "cb" as the call back
function multiplyNums(x, y, cb) {
  return cb(x * y);
};

// Function invocation
multiplyNums(20, 5, function (product) {
  console.log(product);
});

//////////////////////////////////////////////////////////

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

// Higher order function using "cb" as the call back
function contains(arr, item, cb) {
  const checker = function () {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return true;
      }
    } return false;
  };
  return cb(checker());
};

// Function invocation
contains(items, 'Notebook', function (result) {
  console.log(result);
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

/////// Solution from Gabe:

const withoutDupes = noDupes ([1, 1, 2, 2, 2, 4, 4, 4]);

const noDupes = (arr) => {
  return arr.reduce((acc, elem) => {
    // the first time this runs, acc will be []
    // the first time around, elem will be  
    const currentAccumulator = acc;
    // is the current elem in the box already ? (inn acc)
    if (acc.indexOf(elem) === -1) {
      // this would mean, the current element is not in currentAccumulator
      // THE RETURN VALUE WILL BECOME THE ACC in the next iteration 
      return currentAccumulator.concat(elem);
    }
    // the thing is in the box already so just return the acc as is 
    return currentAccumulator;
  }, []);
}

