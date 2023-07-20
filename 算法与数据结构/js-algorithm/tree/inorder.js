const bt = require("./bt");

// const inorder = (root) => {
//   if (!root) {
//     return;
//   }
//   // 左
//   inorder(root.left);
//   // 根
//   console.log(root.val);
//   // 右
//   inorder(root.right);
// };

// const inorder = (root) => {
//     if (!root) { return; }
//     const stack = [];
//     let p = root;
//     while (stack.length || p) {
//         while (p) {
//             stack.push(p);
//             p = p.left;
//         }
//         const n = stack.pop();
//         console.log(n.val);
//         p = n.right;
//     }
// };

const inorder = (root) => {
  if (!root) {
    return;
  }
  // 新建栈
  const stack = [];
  // 定义一个指针
  let p = root;
  // 判断栈中是否有左分支的存留值,否则将开始对右节点进行操作
  while (stack.length || p) {
    while (p) {
      // 根节点入栈
      stack.push(p);
      // 指针指向左节点
      p = p.left;
    }
    // 上面遍历完树的所有分支后,从最尖端处开始读取值
    const n = stack.pop();
    console.log(n.val);
    // 将指针指向右节点 --- 开始对所有右分支遍历
    p = n.right;
  }
};

inorder(bt);
