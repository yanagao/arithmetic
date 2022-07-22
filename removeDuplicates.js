/**
 * 26. 删除有序数组中的重复项
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let slow = 0;
    let fast = 1;
    const len = nums.length;
    while (fast < len) {
        if (nums[slow] !== nums[fast]) {
            slow = slow + 1;
            nums[slow] = nums[fast];
        }
        fast = fast + 1;
    }
    return slow + 1;
};

console.log(removeDuplicates([1, 1, 2]));