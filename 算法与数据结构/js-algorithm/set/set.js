let mySet = new Set();

// 添加
mySet.add(1);
mySet.add(5);
mySet.add(5);
mySet.add("some text");
let o = { a: 1, b: 2 };
mySet.add(o);
mySet.add({ a: 1, b: 2 });

// 包含
const has = mySet.has(o);

// 删除
mySet.delete(5);

// 遍历集合
// 方法①
for (let item of mySet.keys()) console.log(item);
// 方法②
// 集合的key和value是一样的
for (let [key, value] of mySet.entries()) console.log(key, value);

// 将集合转换为数组
const myArr1 = [...mySet];
const myArr2 = Array.from(mySet);

// 将数组转换为集合
const mySet2 = new Set([1, 2, 3, 4]);

// 求集合的交集
// 转换为数组，利用数组的方法
const intersection = new Set([...mySet].filter((x) => mySet2.has(x)));

// 求集合的差集
const difference = new Set([...mySet].filter((x) => !mySet2.has(x)));
