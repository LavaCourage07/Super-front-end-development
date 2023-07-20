const bt = require("./bt");

// const preorder = (root) => {
//   // 如果根节点为null,无需遍历
//   if (!root) {
//     return;
//   }
//   console.log(root.val);
//   // 左
//   preorder(root.left);
//   // 右
//   preorder(root.right);
// };

// const preorder = (root) => {
//     if (!root) { return; }
//     const stack = [root];
//     while (stack.length) {
//         const n = stack.pop();
//         console.log(n.val);
//         if (n.right) stack.push(n.right);
//         if (n.left) stack.push(n.left);
//     }
// };

const preorder = (root) => {
  // 如果根节点为null,无需遍历
  if (!root) {
    return;
  }
  // 新建栈
  const stack = [root];
  // 如果栈中有值,则循环遍历
  while (stack.length) {
    // 访问根节点 --- 栈顶弹出的值即为所需根节点
    const n = stack.pop();
    console.log(n.val);
    // 右节点先入栈 --- 保证后出栈
    if (n.right) stack.push(n.right);
    // 左节点后入栈 --- 保证先出栈
    if (n.left) stack.push(n.left);
  }
};

preorder(bt);
