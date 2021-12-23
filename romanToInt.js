// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  m = 0;
  for (i = 0; i < s.length; i++) {
    if (s[i] == "I") {
      if ("V" == s[i + 1]) m += 4;
      else if ("X" == s[i + 1]) m += 9;
      else m += 1;
    } else if (s[i - 1] != "I" && s[i] == "V") m += 5;
    else if (s[i - 1] != "I" && s[i] == "X") {
      if ("L" == s[i + 1]) m += 40;
      else if ("C" == s[i + 1]) m += 90;
      else m += 10;
    } else if (s[i - 1] != "X" && s[i] == "L") m += 50;
    else if (s[i - 1] != "X" && s[i] == "C") {
      if ("D" == s[i + 1]) m += 400;
      else if ("M" == s[i + 1]) m += 900;
      else m += 100;
    } else if (s[i - 1] != "C" && s[i] == "D") m += 500;
    else if (s[i - 1] != "C" && s[i] == "M") m += 1000;
  }
  return m;
};

s = "MCMXCIV";
console.log(romanToInt(s));
