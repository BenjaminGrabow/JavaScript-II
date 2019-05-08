// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function empire() {
  const king = "Markus";
  console.log(`Hello ${king} your are awesome.`);

  function village() {
    console.log(`${king} do you really use closures ?`);

    function house() {
      console.log(`Yeah ${king} is using closures !`);
    }
    house();
  }
  village();
};
empire();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.

  let score = 0;

  function inner() {
    score = ++score;
    console.log(score);
  }
  return inner;

};

const inner = counter();
inner();
inner();
inner();
inner();

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let score = 0;

  function increment() {
    score = ++score;
    console.log(score);
  } increment()

  function decrement() {
    score = --score;
    console.log(score);
  } decrement();

}; counterFactory();