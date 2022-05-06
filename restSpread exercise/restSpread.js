// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

  const filterOutOdds = (...arguments) => arguments.filter( num => num % 2 === 0)



//   findMin
// Write a function called findMin that accepts a variable number of arguments and returns the 
// smallest argument.

// Make sure to do this using the rest and spread operator.

// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

function findMin(...rest) { 
    return rest.reduce (function(lowest,next){ 
        return next < lowest? next : lowest;
    })
}


//   mergeObjects
//   Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values 
//of the first object and second object.

const mergeObjects = (obj1,obj2) => ({...obj1, ...obj2})  //not sure why the parentheses fix this, need to learn more about arrow functions
  
//   mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

//   doubleAndReturnArgs
//   Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. 
//The function should return a new array with the original array values and all of additional arguments doubled.
  
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args].map(e => e*2)

//   doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
//   doubleAndReturnArgs([2],10,4) // [2, 20, 8]

//   Slice and Dice!
//   For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!
  
//   Make sure that you are always returning a new array or object and not modifying the existing inputs.
  
  /** remove a random element in the items array
  and return a new array without that item. */
  
  const removeRandom = (items) => {
    let victim = Math.floor(Math.random()*items.length)
    console.log(victim)
    return [...items.slice(0,victim-1), ...items.slice(victim)]
  }

  
  /** Return a new array with every item in array1 and array2. */
  
  const extend = (array1, array2) => [...array1, ...array2];
  
  /** Return a new object with all the keys and values
  from obj and a new key/value pair */
  
  const addKeyVal = (obj, key, val) => {
    let objClone = {...obj};
    objClone[key]=val;
    return objClone;
  }
  
  
  /** Return a new object with a key removed. */
  
  const removeKey = (obj, key) => {
    let lesserClone = {...obj};
    delete lesserClone.key;
    return lesserClone;
  
  }
  
  
  /** Combine two objects and return a new object. */
  
  const combine = (obj1, obj2) => {
    let absoluteUnit = {...obj1, ...obj2}
    return absoluteUnit;
  }
  
  
  /** Return a new object with a modified key and value. */
  
  const update = (obj, key, val) => {
    let aNewYou = {...obj};
    aNewYou[key]=val;
    return aNewYou;
  }