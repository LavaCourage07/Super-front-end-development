const graph = require("./graph");

// 记录访问过的节点
const visited = new Set();
// 注意，起始节点需要先加到已访问的库中
visited.add(2);
// 新建队列，初始化从2开始
const q = [2];

while (q.length) {
  const n = q.shift();
  console.log(n);
  graph[n].forEach((c) => {
    if (!visited.has(c)) {
      q.push(c);
      // 一旦队列入队，则认为访问过该节点 ---- 全面筛查，避免漏掉已经如队列了，但是还没有访问到的节点
      visited.add(c);
    }
  });
}
