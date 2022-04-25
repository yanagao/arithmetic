/**
 * https://leetcode-cn.com/problems/reverse-words-in-a-string/
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let sArray = Array.from(s);
    let slowIndex = 0;
    let fastIndex = 0;
    // 移除开头空格
    while(fastIndex < sArray.length) {
        if (sArray[fastIndex] === ' ' && (fastIndex === 0 || sArray[fastIndex - 1] === ' ')) {
            fastIndex += 1;
        } else {
            sArray[slowIndex++] = sArray[fastIndex++];
        }
    }

    // 移除末尾空格
    sArray.length = sArray[slowIndex - 1] === ' ' ? slowIndex - 1 : slowIndex;
    
    // 翻转
    reverse(sArray, 0, sArray.length - 1);

    let start = 0;
    for(let i = 0; i <= sArray.length; i++) {
        if(sArray[i] === ' ' || i === sArray.length) {
            reverse(sArray, start, i - 1);
            start = i + 1;
        }
    }

    return sArray.join('');
};

var reverse = (sArray, start, end) => {
    let left = start;
    let right = end;
    while(left < right) {
        [sArray[left], sArray[right]] = [sArray[right], sArray[left]];
        left += 1;
        right -= 1;
    }
}

console.log(reverseWords('  hello wdf  dfd  '));