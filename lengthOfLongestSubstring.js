/**
 * 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
//  var lengthOfLongestSubstring = function(s) {
//     const occ = new Set();
//     let n = s.length;
//     let rk = -1;
//     let ans = 0;
//     for(let i = 0; i < n; i++) {
//         if(i !== 0) {
//             occ.delete(s.charAt(i - 1));
//         }
//         while(rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
//             occ.add(s.charAt(rk + 1));
//             ++rk;
//         }
//         ans = Math.max(ans, rk - i + 1);
//     }
//     return ans;
// };

var lengthOfLongestSubstring = function(s) {
    const occ = new Set();
    let left = 0,
        right = 0
        maxLength = 0;
    if(s.length <= 1) {
        return s.length;
    }
    for(right; right < s.length; right++) {
        if(!occ.has(s[right])) {
            occ.add(s[right]);
            maxLength = Math.max(maxLength, right - left + 1);
        } else {
            while(occ.has(s[right])) {
                occ.delete(s[left]);
                left++;
            }
            occ.add(s[right]);
        }
    }
    return maxLength;
};
