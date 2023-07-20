const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "d",
          children: [],
        },
        {
          val: "e",
          children: [],
        },
      ],
    },
    {
      val: "c",
      children: [
        {
          val: "f",
          children: [],
        },
        {
          val: "g",
          children: [],
        },
      ],
    },
  ],
};

const bfs = (root) => {
    // 新建一个队列
    const q = [root]
    while (q.length > 0) {
        // 将根节点出列
        const n = q.shift()
        console.log(n.val)
        // 遍历根节点的子节点,将其入列
        n.children.forEach((child) => {
            q.push(child)
        })
    }
};

bfs(tree);
