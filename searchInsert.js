/**
 * 35.搜索插入位置
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。

示例 1:

输入: nums = [1,3,5,6], target = 5
输出: 2
示例 2:

输入: nums = [1,3,5,6], target = 2
输出: 1
示例 3:

输入: nums = [1,3,5,6], target = 7
输出: 4

 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let ans = nums.length;
    while (left <= right) {
        let mid = Math.floor((right - left) / 2)+ left;
        if(nums[mid] >= target) {
            ans = mid;
            right = mid - 1;
        } else if(nums[mid] < target) {
            left = mid + 1;
        }
    }
    return ans;
};

console.log(searchInsert([-1,0,3,5,9,12], 2));