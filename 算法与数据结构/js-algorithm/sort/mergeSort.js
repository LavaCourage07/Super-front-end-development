Array.prototype.mergeSort = function () {
  const rec = (arr) => {
    if (arr.length === 1) {
      return arr;
    }
    // 分
    // 找到中位数
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);
    const orderLeft = rec(left);
    const orderRight = rec(right);

    // 合
    // 开辟数组库用于存储，当前两个数组排序后的合并数组
    const res = [];
    // 两个数组中任意一个有值时，则继续循环存值
    while (orderLeft.length || orderRight.length) {
      // 两个数组中都有值，则将两个数组中，数组头更小的那一个存入数组库中，并将该数头从原数组中去掉
      if (orderLeft.length && orderRight.length) {
        res.push(
          orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift()
        );
      } else if (orderLeft.length) {
        // 如果右数组中已经没有值了，则将左数组中剩下的值全部依次存入数组库中
        res.push(orderLeft.shift());
      } else if (orderRight.length) {
        // 如果左数组中已经没有值了，则将右数组中剩下的值全部依次存入数组库中
        res.push(orderRight.shift());
      }
    }
    return res;
  };

  const res = rec(this);

  res.forEach((n, i) => {
    this[i] = n;
  });
  console.log(res);
};

const arr = [2, 3, 6, 4, 5, 1];
arr.mergeSort();
