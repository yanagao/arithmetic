/**
 * 形成两个异或相等数组的三元组数目
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