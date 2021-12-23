// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

var isPalindrome = function (x) {
  var i = 1;
  var b = true;
  var y = "";
  y = y + (x % 10);
  console.log(y);
  while (b) {
    if (parseInt(x / (i * 10)) == 0) b = false;
    else {
      y = y + (parseInt(x / (i * 10)) % 10);
      i *= 10;
    }
    console.log(y);
  }
  if (y >= 0 && y == x) return true;
  else if (y < 0 && y == -x) return true;
  else return false;
};

x = 1001;
console.log(isPalindrome(x));
