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

// brute force: iterate over the array in nested loops, found for each index
// if we have a matchin index, return if we found
function twoSumTwo(numbers, target) {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    const currentSum = numbers[l] + numbers[r];

    if (currentSum === target) {
      return [l + 1, r + 1];
    } else if (currentSum > target) {
      r--;
    } else {
      l++;
    }
  }
}

/*
 intereseted approach:
for each element, because it is a sorted array, make a bianry search to found is complemenet.
which is really interested

*/
//twoSum(numbers, target) {
//   for (let i = 0; i < numbers.length; i++) {
//       let l = i + 1, r = numbers.length - 1;
//       let tmp = target - numbers[i];
//       while (l <= r) {
//           let mid = l + Math.floor((r - l) / 2);
//           if (numbers[mid] === tmp) {
//               return [i + 1, mid + 1];
//           } else if (numbers[mid] < tmp) {
//               l = mid + 1;
//           } else {
//               r = mid - 1;
//           }
//       }
//   }
//   return [];
// }

/* 3 sum */

function threeSum(nums) {
  const res = [];
  let k = -1;
  for (let i = 0; i < nums.length; i++) {}

  // need to check all solutions
  return res;
}
