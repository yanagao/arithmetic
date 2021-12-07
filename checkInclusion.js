/**
 * 567. 字符串的排列
 * 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。
 * 换句话说，s1 的排列之一是 s2 的 子串 。
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const map1 = new Map();
    for(let i of s1) {
        // 记录出现次数
        map1.set(i, map1.has(i) ? map1.get(i) + 1 : 1);
    }

    const map2 = new Map();
    let left = 0,
        right = 0,
        sum = 0;

    while(right < s2.length) {
        if(map1.has(s2[right])) {
            map2.set(s2[right], map2.has(s2[right]) ? map2.get(s2[right]) + 1 : 1);
            if(map2.get(s2[right]) == map1.get(s2[right])) {
                sum++;
            }
        }
        right++;
        while(right - left >= s1.length) {
            if(sum === map1.size) return true;
            if(map1.has(s2[left])) {
                if(map2.get(s2[left]) == map1.get(s2[left])) {
                    sum--;
                }
                map2.set(s2[left], map2.get(s2[left]) - 1);
            }
            left++;
        }
    }
    return false;
};

console.log(checkInclusion('abb', "eidbbaooo"));