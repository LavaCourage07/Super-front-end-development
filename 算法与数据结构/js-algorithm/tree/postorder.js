const bt = require("./bt");

// const postorder = (root) => {
//   if (!root) {
//     return;
//   }
//   // 左
//   postorder(root.left);
//   // 右
//   postorder(root.right);
//   // 根
//   console.log(root.val);
// };

// const postorder = (root) => {
//     if (!root) { return; }
//     const outputStack = [];
//     const stack = [root];
//     while (stack.length) {
//         const n = stack.pop();
//         outputStack.push(n);
//         if (n.left) stack.push(n.left);
//         if (n.right) stack.push(n.right);
//     }
//     while(outputStack.length){
//         const n = outputStack.pop();
//         console.log(n.val);
//     }
// };

const postorder = (root) => {
  if (!root) {
    return;
  }
  // 倒置栈
  const outputStack = [];
  //  复用先序遍历逻辑,仅修改左右节点顺序
  // 普通栈
  const stack = [root];
  // 如果栈中有值,则循环遍历
  while (stack.length) {
    // 访问根节点 --- 栈顶弹出的值即为所需根节点
    const n = stack.pop();
    //   原本访问节点的位置不访问,而是将值存在导致栈中
    // console.log(n.val);
    outputStack.push();
    // 左节点先入栈 --- 保证后出栈 (顺序变化)
    if (n.left) stack.push(n.left);
    // 右节点后入栈 --- 保证先出栈 (顺序变化)
    if (n.right) stack.push(n.right);
  }
  // 完成遍历存值后,需要将倒置栈中的值输出
  while (outputStack.length) {
    const n = outputStack.pop();
    // 实现倒序输出值
    console.log(n.val);
  }
};

postorder(bt);
