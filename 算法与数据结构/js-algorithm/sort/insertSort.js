// 插入排序
Array.prototype.insertSort = function () {
  // 从第二个数开始比较
  for (let i = 1; i < this.length; i++) {
    const value = this[i];
    let index = i;
    for (let j = i; j >= 1; j--) {
      if (value < this[j - 1]) {
        this[j] = this[j - 1];
        index--;
      } else {
        break;
      }
    }
    this[index] = value;
  }
  console.log(this);
};

const arr = [2, 4, 5, 3, 1];
arr.insertSort();
