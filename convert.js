/**
 * 6. Z 字形变换
 * 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
 * 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
 * 请你实现这个将字符串进行指定行数变换的函数：
 * 
 * 输入：s = "PAYPALISHIRING", numRows = 3
 * 输出："PAHNAPLSIIGYIR"
 * 
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }
    let newArr = '';
    const multiple = (numRows - 1) * 2; // 6
    const groupNum = Math.floor(s.length / multiple); // n

    for (let i = 0; i < numRows; i++) {
        if (groupNum === 0) {
            newArr = newArr + s.charAt(i);
            (multiple - i) < s.length && (multiple - i !== i) ? newArr = newArr + s.charAt(multiple - i) : null;
            (i + multiple) < s.length ? newArr = newArr + s.charAt(i + multiple) : null;
        }
        for (let j = 1; j <= groupNum; j++) {
            if(i === 0 || (i === multiple - i)) {
                j === 1 ? newArr = newArr + s.charAt(i) : null;
                (multiple * j + i) < s.length ? newArr = newArr + s.charAt(multiple * j + i) : null;
            } else {
                j === 1 ? newArr = newArr + s.charAt(i) : null;
                (multiple * j - i) < s.length ? newArr = newArr + s.charAt(multiple * j - i) : null;
                (i + multiple * j) < s.length ? newArr = newArr + s.charAt(i + multiple * j) : null;
            }
            if(i===3) {
                console.log('a', multiple * j - i, i + multiple * j)
            }
        }
    }
    return newArr;
};

console.log(convert('0123456789abcd', 5));
