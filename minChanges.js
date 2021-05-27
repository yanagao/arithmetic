/**
 * 1787. 使所有区间的异或结果为零
 * 给你一个整数数组 nums​​​ 和一个整数 k​​​​​ 。
 * 区间 [left, right]（left <= right）的 异或结果 
 * 是对下标位于 left 和 right（包括 left 和 right ）
 * 之间所有元素进行 XOR 运算的结果：nums[left] XOR nums[left+1] XOR ... XOR nums[right] 。
 * 返回数组中 要更改的最小元素数 ，以使所有长度为 k 的区间异或结果等于零。
 * 
 * 输入：nums = [1,2,0,3,0], k = 1
 * 输出：3
 * 解释：将数组 [1,2,0,3,0] 修改为 [0,0,0,0,0]
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minChanges = function(nums, k) {
    // const MAXX = 2 ** 10;
    const MAXX = Math.pow(2, 10);
    let f = new Array(MAXX).fill(Number.MAX_VALUE);
    // k = 0时
    f[0] = 0;

    for (let i = 0; i < k; i++) {
        const count = new Map();
        let size = 0;
        for (let j = 0; j < nums.length; j+=k) {
            count.has(nums[j]) ? count.set(nums[j], count.get(nums[j]) + 1) : count.set(nums[j], 1);
            size++;
        }

        const t2min = Math.min(...f);
        const g = new Array(MAXX).fill(t2min);
        for (let mask = 0; mask < MAXX; mask++) {
            // entries() 方法返回一个数组的迭代对象，该对象包含数组的键值对 (key/value)。
            for (const [x, countx] of count.entries()) {
                g[mask] = Math.min(g[mask], f[mask ^ x] - countx);
            }
        }

        for (const [index, val] of g.entries()) {
            f[index] = val + size;
        }
    }

    return f[0];
};

console.log(minChanges([3,4,5,2,1,7,3,4,7], 3))
// var minChanges = function(nums, k) {
//     let len = 0;
//     if (k < 2) {
//         for (let i = 0; i < nums.length; i++) {
//             if (nums[i]) {
//                 len++;
//             }
//         }
//     } else {
//         let arr = [];
//         let result = nums[0];
//         for (let i = 0; i < k - 1; i++) {
//             if (i > 0) {
//                 result = nums[i] + result;
//             }
//             arr.push(nums[i])
//         }
//         arr.push(result);
//         if (result !== nums[k - 1]) {
//             len++;
//         }

//         // 分k大小数组
//         var num = [];
//         for (let i = 0; i < nums.length; i+=k) {
//             num.push(nums.slice(i, i + k));
//         }
        
//         for (let i = 1; i < num.length; i++) {
//             for (let j = 0; j < num[i].length; j++) {
//                 if (arr[j] !== num[i][j]) {
//                     len++;
//                 }
//             }
//         }
        
//     }
    
//     return len;
// };