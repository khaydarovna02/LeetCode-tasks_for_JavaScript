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

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
var addTwoNumbers = function (l1, l2) {
  var l1s = "";
  var l2s = "";
  for (i = 0; i < l1.length; i++) {
    l1s = l1s.concat(l1[i]);
    l2s = l2s.concat(l2[i]);
  }
  var s = (parseInt(l1s) + parseInt(l2s)).toString();
  answer = "";
  for (i = s.length - 1; i >= 0; i--) {
    answer = answer.concat(s[i]);
  }
  return answer;
};

(l1 = [2, 4, 3]), (l2 = [5, 6, 4]);

console.log(addTwoNumbers(l1, l2));
