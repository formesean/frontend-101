// Variables
let name = "Sean";
const name1 = "Karl";

// Data types
const number = 9;
const pi = 3.14;
const username = "parmesean";
const bool = true; // false, 0, 1
const arr = [1, 2, 3, 4];
const obj = {
  firstName: "Sean",
  lastName: "Aguilar",
  age: 20,
};

// Display/Print
console.log("Hello World!");

// Functions
// Regular 
function test(number, pi) {
  const result = number + pi;
  return result;
}

const result = test(number, pi);
console.log(result);

const r = "123" + 456; // 123456 ; implicit
const r1 = Number("123"); // 123 <= number ; explicit


// Arrow
const minus = (number, pi) => console.log("");

// Conditional Statements
for (let i = 0; i < number; i++) {

}



// Mapping and Filtering
const numSet = [1, 2, 3, 4, 5]; // num[0] -> num[4]
const doubleNums = numSet.map(num => num * 2);
console.log(doubleNums);

const evenNums = numSet.filter(num => num % 2 === 0);
console.log(evenNums);

// == or ===
// == is not data type sensitive
// ex: "123" == 123
//
// === is data type sensitive
// ex: "123" === 123 // false or error;



// Data Structures and Algorithms
console.log(numSet);

numSet.pop();

console.log(numSet);

numSet.push(10);

console.log(numSet);

// .sort();

// React Hooks
// Most used

// usestate
const [varName, setVarName] = useState(0); // set [isLoading, setIsLoading]
// camelCase
//

// varName = 0;

setVarName(1);

onClick(() => setVarName(varName++));
// varName = 5;

//
// let varName = 0;
// varName += 1; varName = varName + 1;


// useEffect

useEffect(() => {
  // will run after every render
})

useEffect(() => {
  // will run only once the component mounts
}, [// empty]);

  useEffect(() => {
    // will run only when count changes
  }, [count]);

// useRef

// const inputRef = useRef();

// <input />

