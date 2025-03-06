// contains duplicate

function hasDuplicate(nums) {
  // so main idea

  // go over the array
  // create a hash map for occurnces
  // if exist, if bigger than one, return true
  // otherwise, return false
  const map = new Map();

  // we can also create an array but it will be way bigger
  // array is better to use on letters i assume
  for (let i = 0; i <= nums.length - 1; i++) {
    if (map.has(nums[i])) {
      return true;
    }
    map.set(nums[i], 1);
  }

  return false;
}

// can also be done with set, adding it to the set
// checking if set is the same length as nums
// if not, then it means there is duplicate, so return true

// set vs map

// set: unique values only - each value appear once
// maintain insertion orders
// no index

// O(s+t)
// O(1) for contstant array

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const sArr = [];

  // const arr = new Array(26).fill(0)
  for (let i = 0; i <= 25; i++) {
    sArr[i] = 0;
  }

  for (let i = 0; i < s.length; i++) {
    const index = s[i].charCodeAt(0) - "a".charCodeAt(0);
    sArr[index] += 1;
  }

  const tArr = new Array(26).fill(0);

  for (let j = 0; j < t.length; j++) {
    const index = t[j].charCodeAt(0) - "a".charCodeAt(0);
    tArr[index] += 1;
  }

  const isAnagrams =
    tArr.length === sArr.length && sArr.every((val, i) => val === tArr[i]);

  return isAnagrams;
}
