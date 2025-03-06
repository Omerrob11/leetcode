function isPalindrome(s) {
  debugger;
  const updatedString = s.toLowerCase().trim();
  console.log(updatedString);
  let start = 0;
  let end = updatedString.length - 1;

  while (start < end) {
    debugger;
    if (updatedString[start] !== updatedString[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

const s = "Was it a car or a cat I saw?";
const g = "tab a cat";
const c = " sf  fs ";
console.log(isPalindrome2(s));

function isPalindrome2(s) {
  // is building a new string, actually makes it o(n) space complexity
  let result = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase();

    if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
      result = result + char;
    }
  }

  console.log(result);

  let start = 0;
  let end = result.length - 1;

  while (start < end) {
    if (result[start] !== result[end]) {
      return false;
    }

    start++;
    end--;
  }
  return true;
}
