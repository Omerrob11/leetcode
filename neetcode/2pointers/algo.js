// middle of a linked list

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function middleOfLinkedList(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.val;
}

// move zeroes

function moveZeros(nums) {
  let slow = 0;
  let fast = 0;

  let firstZero = -1;
  while (fast <= nums.length - 1) {
    if (nums[fast] === 0) {
      firstZero = fast;
      break;
    }
    fast++;
  }

  // we have the first zero

  if (firstZero === -1) {
    return nums;
  }

  fast = firstZero;
  slow = firstZero;

  while (fast <= nums.length - 1) {
    if (nums[fast] !== 0) {
      // swap
      nums[slow] = nums[fast];
      nums[fast] = 0;
      slow++;
    }

    fast++;
  }

  return nums;
}

function moveZeroes2(nums) {
  let slow = 0;

  for (let fast = 0; fast < nums.length; fast++) {
    // the slow will always point current zero
    // if we get a non zero element, we  just update it.
    // and update zero - by just swaping, not overriding, you see

    if (nums[fast] !== 0) {
      // swapping both elemetns
      const temp = nums[slow];
      nums[slow] = nums[fast];
      nums[fast] = temp;
      slow++;
    }
  }
  return nums;
}

function moveZeros3(nums) {
  // copy in-place
  let i = 0;
  // i - will always result of the number of elements that we "arrange" so far
  // meaning, if i is index 3, than we have arrange 3 elements allready, and the current position is reserved for the next non zero element
  // so, after we put another element, than we have 4 elements that allready arranged so far, and we need to advance i by one to account for the next element
  for (const n of nums) {
    if (n !== 0) {
      nums[i] = n;
      i++;
    }
  }
  // fill rest with zeros
  for (; i < nums.length; i++) {
    nums[i] = 0;
  }
}

/// two sum sorted
// auxility spacee + pointers, of course we should do 2 pointers
// than its just a matter of choice between sliding window and opposite direction and same direction
function twoSumSorted(arr, target) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    if (arr[l] + arr[r] === target) {
      return [l, r];
    } else if (arr[l] + arr[r] > target) {
      r--;
    } else {
      l++;
    }
  }

  return -1;
}

// valid palindrome
// 1. we need to ignore non aplhanumeric character and case.
//so we need to check if it is a non alpha-numeric characters and ignore stuff
// first we can trim
// 2. than, check if current l or right is not alpha numeric
// if not, lets just adavnce it to be an alpha numeric character! until we find one, because we don't want to compare it
// than, we can compare their async values (codes)
// and see if it is good -if yes, continue, as long as l < r;
// and return true if we actually eneded the while loop

function isPalindrome(s) {
  // we should not do this, as this is creating a new string size n.
  // so we have O(n) space complexity
  const lowerCaseStr = s.trim().toLowerCase();

  let l = 0;
  let r = lowerCaseStr.length - 1;

  while (l < r) {
    // getting to char code

    while (l < r && !isAlphaNumeric(s[l])) {
      // getting to alpha numeric
      l++;
    }
    while (l < r && !isAlphaNumeric(s[r])) {
      // getting to alpha numeric
      r--;
    }

    // check if it is equal

    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

function isAlphaNumeric(char) {
  if (
    char.charCodeAt() >= "a".charCodeAt() &&
    char.charCodeAt() <= "z".charCodeAt()
  ) {
    return true;
  }

  // check for numbers as well
  if (
    char.charCodeAt() >= "0".charCodeAt() &&
    char.charCodeAt() <= "9".charCodeAt()
  ) {
    return true;
  }

  return false;
}

// container with most water

function containerWithMostWater(arr) {
  if (!(arr.length > 0)) {
    return 0;
  }
  let currentMostWater = 0;

  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    const curretTrappedWater = (r - l) * Math.min(arr[r], arr[l]);

    if (curretTrappedWater > currentMostWater) {
      currentMostWater = curretTrappedWater;
    }

    if (arr[l] < arr[r]) {
      l++;
    } else {
      r--;
    }
  }

  return currentMostWater;
}
