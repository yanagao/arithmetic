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
    let ans = [-1, -1];
    const leftBorder = getBorder(nums, target, true);
    const rightBorder = getBorder(nums, target, false) - 1;
    console.log(leftBorder, rightBorder)
    if(leftBorder <= rightBorder && nums[leftBorder] === target && nums[rightBorder] === target) {
        return [leftBorder, rightBorder];
    }
    return ans;
};

const getBorder = function(nums, target, isGetLeft) {
    let left = 0;
    let right = nums.length - 1;
    let ans = nums.length;

    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        if (nums[mid] > target || (isGetLeft && nums[mid] >= target)) {
            right = mid - 1;
            ans = mid;
        } else {
            left = mid + 1;
        }
    }
    return ans;
}

console.log(searchRange([1], 1));
