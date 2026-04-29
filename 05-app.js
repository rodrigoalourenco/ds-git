// Function Declaration
function myFunctionDeclaration(x, y) {
  return x * y;
}
console.log("Function Declaration ", myFunctionDeclaration(3, 4));

// Function Expression (Named)
const myFunctionExpression = function mult(x, y) {
  return x * y;
};
console.log("Function Expression (Named) ", myFunctionExpression(3, 4));

// Function Expression (Anonymous)
const myFunctionAnonymous = function (x, y) {
  return x * y;
};
console.log("Function Expression (Anonymous) ", myFunctionAnonymous(3, 4));

// Arrow Function
const myFunctionArrow = (x, y) => x * y;
console.log("Arrow Function ", myFunctionArrow(3, 4));

// Function Constructor
const myFunctionConstructor = new Function("x", "y", "return x * y");
console.log("Function Constructor ", myFunctionConstructor(3, 4));

// Object Method
const obj = {
  myFunctionObject(x, y) {
    return x * y;
  },
};
console.log("Object Method ", obj.myFunctionObject(3, 4));