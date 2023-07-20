// const obj = {}
// const func = () => {}
// const arr = []

// // 原型链查找
// Object.prototype.x = "x"
// Function.prototype.y = "y"

// // 遍历原型链
// const instanceOf = (A, B) => {
//     let p = A
//     while (p) {
//         if (p === B.prototype) {
//             return true
//         }
//         p = p.__proto__
//     }
//     return false
// }

// // ---------------------------
// var foo = {}
// var F = function(){}

// Object.prototype.a = "value a"
// Function.prototype.b = "value b"

const obj = {};
const func = function () {};
const arr = [];

// 原型链查找
Object.prototype.x = "x";
Function.prototype.y = "y";

console.log(obj.x, obj.y); // x undefined
console.log(func.x, func.y); // x y
console.log(arr.x, arr.y); // x undefined

// 遍历原型链
const myInstanceOf = (A, B) => {
  let p = A;
  while (p) {
    if (p === B.prototype) {
      return true;
    }
    p = p.__proto__;
  }
  return false;
};

console.log(
  // true false false
  myInstanceOf(obj, Object),
  myInstanceOf(obj, Function),
  myInstanceOf(obj, Array)
);

console.log(
  // true true false
  myInstanceOf(func, Object),
  myInstanceOf(func, Function),
  myInstanceOf(func, Array)
);

console.log(
  // true false true
  myInstanceOf(arr, Object),
  myInstanceOf(arr, Function),
  myInstanceOf(arr, Array)
);
