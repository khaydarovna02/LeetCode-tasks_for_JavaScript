// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  ans = "";
  if (strs.length == 1) {
    ans += strs[0];
  } else {
    for (i = 1; i < strs.length; i++) {
      ans = "";
      for (j = 0; j < strs[i].length; j++) {
        if (strs[0][j] == strs[i][j]) {
          ans += strs[i][j];
        } else {
          break;
        }
      }
      strs[0] = ans;
    }
  }
  return ans;
};

strs = ["flower", "flow", "flight"];
strs2 = ["dog", "racecar", "car"];
strs3 = ["aaa", "aa", "aaa"];
console.log(longestCommonPrefix(strs));
console.log(longestCommonPrefix(strs2));
console.log(longestCommonPrefix(strs3));
