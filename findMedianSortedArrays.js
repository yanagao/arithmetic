/**
 * 4. 寻找两个正序数组的中位数
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 * 
 * 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2.00000
 * 解释：合并数组 = [1,2,3] ，中位数 2
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let newNum = nums1.concat(nums2);
    newNum.sort((num1, num2) => {
        return num1 - num2;
    });
    console.log(newNum);
    let n = newNum.length;
    // let medianNum = 0;
    if(n % 2) {
        return newNum[Math.floor(n / 2)];
    }
    return (newNum[n / 2 - 1] + newNum[n / 2]) / 2;
};

console.log(findMedianSortedArrays([3], [-2, -1]));