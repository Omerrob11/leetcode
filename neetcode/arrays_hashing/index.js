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

/* 2 sum */
/*

in a map first approahc:
oh, and it only make sense if we have a number, that is divisible by 2, and its dividor in the array.

meaning:

if the target is 8, and we have 4, it might happen

or 10 and 5

or 12 and 6

and so on


*/
function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i <= nums.length - 1; i++) {
    if (map.has(target - nums[i])) {
      const res = [];
      const firstIndex = map.get(target - nums[i]);

      res.push(firstIndex);
      res.push(i);
      return res;
    }

    map.set(nums[i], i);
  }

  return null;
}

/* ******** Medium problems ******** / */

function topKFrequenst(nums, k) {
  const res = [];

  const map = new Map();

  for (let i = 0; i < nums; i++) {
    //1. put him in the map. - check if it is there, is so add 1, otherwise, put 1
    map.has(nums[i])
      ? map.set(nums[i], map.get(nums[i]) + 1)
      : map.set(nums[i], 1);

    if (res.length < k) {
      res.push(nums[i]);
    } else {
      for (let j = 0; j < k; j++) {
        // iterate over the res array
        // if the current element, is frequencies is bigger than the value of th res array
        // we subtitute them

        // first check if it is there, if it is, continue

        // the problem with my approach, that i might subtitue an element, that yes im bigger than him, but he is bigger than another one
        // so i subtitue, but its wrong
        if (map.get[nums[i]] > map.get(res[j])) {
          res[j] = nums[i];
        }
      }
    }
  }
  return res;
}
