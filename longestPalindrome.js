/**
 * 5. 最长回文子串
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * @param {string} s
 * @return {string}
 * 动态规划
 */
var longestPalindrome = function (s) {
    let n = s.length;
    if (n < 2) {
        return s;
    }
    let arr = [];
    // 二阶数组
    for (let i = 0; i < n; i++) {
        arr[i] = [];
    }
    let begin = 0;
    let max = 0;

    for (let i = 0; i < n; i++) {
        let j = 0;
        while(j <= i) {
            // 如果i === j或相邻，最后一次查找
            if (s[j] === s[i] && (i - j <= 1 || arr[j + 1][i - 1])) {
                arr[j][i] = true;
                if (i - j + 1 > max) { // 当前子串大于存储的子串长度，则替换
                    begin = j;
                    max = i - j + 1;
                }
            }
            j++;
        }
    }
    return s.substr(begin, max);
};
