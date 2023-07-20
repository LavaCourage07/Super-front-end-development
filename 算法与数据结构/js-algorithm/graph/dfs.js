const graph = require("./graph");

记录访问过的节点;
const visited = new Set();
const dfs = (n) => {
  console.log(n);
  visited.add(n);
  // 遍历该节点的相邻节点，对没有访问过的节点，再次调用递归方法
  graph[n].forEach((c) => {
    if (!visited.has(c)) {
      dfs(c);
    }
  });
};

// 2是起始节点
dfs(2);
