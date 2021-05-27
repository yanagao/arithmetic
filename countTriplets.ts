/**
 * 1442.形成两个异或相等数组的三元组数目
 * 输入：arr = [2,3,1,6,7]
 * 输出：4
 * 解释：满足题意的三元组分别是 (0,1,2), (0,2,2), (2,3,4) 以及 (2,4,4)
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr: number[]): number {
    let s = [0];
    let ans = 0;
    for (const num of arr) {
        s.push(s[s.length - 1] ^ num);
    }
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            for(let k = j; k < arr.length; k++) {
                if (s[i] === s[k + 1]) {
                    ans++;
                }
            }
        }
    }
    return ans;
};

console.log(countTriplets([2, 3, 1, 6, 7]));