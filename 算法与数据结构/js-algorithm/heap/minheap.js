class Minheap {
  constructor() {
    this.heap = [];
  }

  // 两个节点交换值
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  // 获取父节点
  getParentIndex(i) {
    // return Math.floor((i - 1) / 2);
    // 二进制写法
    return (i - 1) >> 1;
  }

  // 获取左侧子节点
  getLeftIndex(i) {
    return i * 2 + 1;
  }

  // 获取右侧子节点
  getRightIndex(i) {
    return i * 2 + 2;
  }

  // 上移操作
  shiftUp(index) {
    // 如果该节点已经在堆顶，则无需上移
    if (index == 0) {
      return;
    }
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }

  // 下移操作
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    // 左侧子节点操作
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    // 右侧子节点操作
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }

  // 插入
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  // 删除堆顶
  pop() {
    // 数组原生pop方法 --- 获取到数组最后一位
    // 将数组最后一位交换为数组头部，堆顶
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }

  // 获取堆顶
  peek() {
    return this.heap[0];
  }

  // 获取堆的长度
  size() {
    return this.heap.length;
  }
}

const h = new Minheap();

h.insert(2);
h.insert(4);
h.insert(7);
h.insert(1);
h.insert(3);
h.insert(6);
h.insert(5);



h.pop();
