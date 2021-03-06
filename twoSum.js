// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
var twoSum = function (nums, target) {
  var n = nums[0];
  for (i = 0; i < nums.length; i++) {
    for (j = 1; j <= nums.length; j++)
      if (i != j && nums[i] + nums[j] == target) return [i, j];
  }
};

nums = [2, 5, 5, 11];
target = 10;
console.log(twoSum(nums, target));
