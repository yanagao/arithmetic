/**
 * 前K个高频单词
 * 
 * 输入: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
 * 输出: ["i", "love"]
 * 解析: "i" 和 "love" 为出现次数最多的两个单词，均为2次。
 * 注意，按字母顺序 "i" 在 "love" 之前。
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const occ = new Map();
    /**
     * for in 一般用来遍历对象的key
     * for of 一般用来遍历数组的value
     */
    for (const word of words) {
        occ.set(word, (occ.get(word) || 0) + 1);
    }
    const rec = [];
    for (const entry of occ.keys()) {
        rec.push(entry);
    }
    rec.sort((word1, word2) => {
        return occ.get(word1) === occ.get(word2) ? word1.localeCompare(word2) : occ.get(word2) - occ.get(word1);
    });
    return rec.slice(0, k);
};

topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2);