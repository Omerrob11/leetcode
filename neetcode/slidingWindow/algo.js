function subarraySumFixed(nums, k) {
  let maxSubArraySum = 0;
  let window = 0;
  for (let i = 0; i < k; i++) {
    window += nums[i];
  }

  maxSubArraySum = window;

  for (let right = k; right < nums.length; right++) {
    const left = right - k;
    window -= nums[left];
    window += nums[right];

    if (window > maxSubArraySum) {
      maxSubArraySum = window;
    }
  }

  return maxSubArraySum;
}

// built upon valid anagaram
// that we store in a hash and check if it is valid anagaram
// we just do it for sliding window
function findAllAnagrams(original, check) {
  //1. put the check and the first original in a hash table
  //2. loop, and compare if their equal
  //3. if they are equal, get the current index, and put in the result index
  //4. continue to the next window of original, update the hash map
  // we will create 3 solutions:
  //1. hash table, objects, and arrrays, start with hash table

  // base case: - if both are empty, return true
  // if check is empty and original not, return false

  debugger;
  const originalLength = original.length;
  const checkLength = check.length;

  if (originalLength < checkLength) {
    return [];
  }
  const checkMap = new Array(26).fill(0);
  const originalMap = new Array(26).fill(0);

  // initlaize the array
  for (let i = 0; i < check.length; i++) {
    // 1. get the letter charcode and substract a
    checkMap[check[i].toLowerCase().charCodeAt() - "a".charCodeAt()] += 1;
    originalMap[original[i].toLowerCase().charCodeAt() - "a".charCodeAt()] += 1;
  }

  let res = [];
  // check if the array are solid

  if (isHashEqual(checkMap, originalMap)) {
    res.push(0);
  }

  for (let right = check.length; right < original.length; right++) {
    let left = right - check.length;

    const leftCharCode =
      original[left].toLowerCase().charCodeAt(0) - "a".charCodeAt(0);
    originalMap[leftCharCode]--;

    const rightCharCode =
      original[right].toLowerCase().charCodeAt(0) - "a".charCodeAt(0);
    originalMap[rightCharCode]++;

    if (isHashEqual(originalMap, checkMap)) {
      // we have just removed the left most character
      // so the starting index of the current window, should be left+1, not left
      // left is the item we remove, so the item now on the window is left + 1
      // it just that the idea is that the first element is just left +1, not left
      res.push(right - checkLength + 1);
    }
  }

  return res;
}

function isHashEqual(arr1, arr2) {
  // run both of the array, each item, and compare it to each item in arr1

  // we can just run throuth the lengths, and compare, but we can also use every

  return arr1.every((item, index) => item === arr2[index]);
}

// dynamic sized window
function subArraySumLongest(nums, target) {
  let maxLen = 0;

  let window = 0;

  let left = 0;

  // invariant - before each loop, window is valid

  for (let right = 0; right < nums.length; right++) {
    // adding new window, might remove validity
    window += nums[right];

    // make the window valid again
    while (window > target) {
      window -= nums[left];
      left++;
    }

    // here window will be valid again, so we can update it
    // r-l + 1, is the current window size
    // so i check the current window size, before adding new element to the widnow, and before removing
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// idea:
//1. in a new iteration, i have new element, r, which i need toa add
// and the element that i need to remove, is r-k (k === window size) - which will be the left most element i need to remove
// so, my new  first inddex will be r-k +1, ok

//
function longestSubStringWithoutRepeaetCharacters(s) {
  let left = 0;
  let window = new Map();
  let longest = 0;

  for (let right = 0; right < s.length; right++) {
    window.set(s[right], window.get(s[right]) ? window.get(s[right]) + 1 : 1);

    // adding a char can make the window invalid
    // for this char, if it is bigger than 1, we remove the char at the left until we remove the char we add here
    // that cause for invalid window
    while (window.get(s[right]) > 1) {
      const leftCharNumOfOccurences = window.get(s[left]);

      window.set(s[left], leftCharNumOfOccurences - 1);

      left++;
    }
    // now window is valid
    // so i can just check it length

    // right - left + 1 (why now window.size? beacsue it counts all keys, also the one thae removed)
    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}

// check why they return 0...
function subArraySumShortest(nums, target) {
  let left = 0;
  let window = 0;
  let res = nums.length + 1;

  // window is not valid currently,
  for (let right = 0; right < nums.length; right++) {
    //and we add a new number, which might make him valid

    window += nums[right];

    // while window is valid - so we make him un valid again
    while (window >= target) {
      // window is now valid, inside this loop, so we need to check the length of the current window
      res = Math.min(res, right - left + 1);

      // make him un valid again by removing elements
      window -= nums[left];
      left++;
    }

    //
  }

  // if
  if (length > nums.length) {
    return 0;
  }
  return res;
}
