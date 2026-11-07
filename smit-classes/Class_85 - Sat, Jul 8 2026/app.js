// function outer() {
//   const message = "Hello";

//   function inner() {
//     console.log(message);
//   }

//   return inner;
// }

// const greet = outer();

// greet();

function parent() {
  let count = 10;

  function child() {
    console.log(count);
  }

  return child;
}

const fn = parent();

fn();

function outer() {
  let;
}
