/**
 * 34. 在排序数组中查找元素的第一个和最后一个位置
给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

 

示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
示例 2：

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
示例 3：

输入：nums = [], target = 0
输出：[-1,-1]
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1; // 7
    let leftBorder = -1;
    let rightBorder = -1;
    while (left <= right) {
        let mid = Math.floor((right - left) / 2) + left; // 3 | 1 | 2
        if (nums[mid] >= target) {
            right = mid - 1; // right = 2
            leftBorder = right; // leftborder = 2
        } else {
            left = mid + 1; // left = 2
            rightBorder = left; // rightborder = 2
        }
    }
    return [leftBorder, rightBorder];
};

console.log(searchRange([-1,0,3,3,3,5,9,12], 3));
