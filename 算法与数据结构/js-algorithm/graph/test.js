var pacificAtlantic = function(matrix) {
    if(!matrix||!matrix[0]) return [];
    //数组的行数和列数
    const m=matrix.length;
    const n=matrix[0].length;
    //初始化数组,用来记录太平洋和大西洋
    const flow1=Array.from({length:m},()=>new Array(n).fill(false));
    const flow2=Array.from({length:m},()=>new Array(n).fill(false));

    const dfs=(r,c,flow)=>{
        flow[r][c]=true;
        [[r-1,c],[r+1,c],[r,c+1],[r,c-1]].forEach(([nr,nc])=>{
            if(
                //保证在矩阵中
                nr>=0&&nr<m&&
                nc>=0&&nc<n&&
                //防止死循环,一定要是没有访问过的
                !flow[nr][nc]&&
                //保证逆流而上
                matrix[nr][nc]>=matrix[r][c]
            ){
                dfs(nr,nc,flow);
            }
        });
    };
    //沿着海岸线逆流而上
    for(let r=0;r<m;r++){
        //左
        dfs(r,0,flow1);
        //右
        dfs(r,n-1,flow2);
    }

    for(let c=0;c<n;c++){
        //上
        dfs(0,c,flow1);
        //下
        dfs(m-1,c,flow2);
    }

    //收集能流到两个大洋里的坐标
    const res=[];
    for(let r=0;r<m;r++){
        for(let c=0;c<n;c++){
            if(flow1[r][c]&&flow2[r][c]){
                res.push([r,c]);
            }
        }
    }
    return res;
};

