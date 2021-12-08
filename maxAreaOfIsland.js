/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let dfs = function(i, j) {
        if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) return 0;
        grid[i][j] = 0;
        let ans = 1;
        let dx = [-1, 1, 0, 0],
            dy = [0, 0, 1, -1];
        for(let a = 0; a < 4; a++) {
            // 上下左右
            ans += dfs(i + dx[a], j + dy[a]);
        }
        return ans;
    }
    let res = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 1; j < grid[0].length; j++) {
            res = Math.max(res, dfs(i, j));
        }
    }
    return res;
};

console.log(maxAreaOfIsland([
    [0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]
]));