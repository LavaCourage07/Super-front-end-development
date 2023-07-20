const a = { val: "1" };
const b = { val: "2" };
const c = { val: "3" };
const d = { val: "4" };
const e = { val: "5" };

// function changeArrToLink(arr) {
//   let p = null;
//   for (i = 0; i < arr.length; i++) {
//     let c = { val: arr[i] };
//     if ((i = 0)) {
//       p = c;
//     } else {
//       const l = { val: arr[i - 1] };
//       l.next = c;
//     }
//   }
//   return p;
// }

// function changeArrToLink(arr) {
//   let p = null;
//   for (let i = 0; i < arr.length; i++) {
//     let c = { val: arr[i], next: null };
//     if (i === 0) {
//       p = c;
//     } else {
//       const l = { val: arr[i - 1], next: null };
//       l.next = c;
//     }
//   }
//   return p;
// }

// 将数组转为链表
function arrayToList(arr) {
  if (arr.length === 0) return null;

  let head = { val: arr[0], next: null };
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    const node = { val: arr[i], next: null };
    current.next = node;
    current = node;
  }

  return head;
}

let s = arrayToList([1, 2, 3, 4, 5]);

var reverseList = function (head) {
  // 新建快和慢两个指针
  // 快指针
  let p1 = head;
  // 慢指针
  let p2 = null;
  while (p1) {
    const temp = p1.next;
    p1.next = p2;
    p2 = p1;
    p1 = temp;
  }
  return p2;
};

const t = reverseList(s);
