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

function isnagarm2(s, t) {
  // go over in a map, for the first string
  // a map of occurunces

  if (s.length !== t.length) {
    return false;
  }
  const countS = new Map();
  const countT = new Map();

  for (let i = 0; i < s.length; i++) {
    countS.set(s[i], countS.has(s[i]) ? countS.get(s[i]) + 1 : 1);
    countT.set(t[i], countT.has(t[i]) ? countT.get(t[i]) + 1 : 1);
  }

  // now need to check if everything is valid.

  for (let [key, value] of countT) {
    if (!countS.has(key) || countS.get(key) !== value) {
      return false;
    }
  }

  return true;
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

/* group anagarms */

function groupAnagrams(strs) {
  const res = [];

  let maximumStr = 0;

  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length > maximumStr) {
      maximumStr = strs[i].length;
    }
  }

  // let currentSizeString = maximumStr;

  for (
    let currentSizeString = maximumStr;
    currentSizeString > 0;
    currentSizeString--
  ) {
    const arrayOfStringsCounter = [];

    for (let i = 0; i < strs.length; i++) {
      if (strs[i].length === currentSizeString) {
        arrayOfStringsCounter.push(strs[i]);
      }
    }

    let filteredArray = arrayOfStringsCounter;
    while (filteredArray.length > 0) {
      const currentGroup = [arrayOfStringsCounter[0]];
      filteredArray = arrayOfStringsCounter.filter((str, index) => {
        if (index === 0) {
          // go next
          return false;
        }
        if (isnagarm2(str, arrayOfStringsCounter[0])) {
          // if anagram, push to the current group
          // and don't keep in the array
          currentGroup.push(str);
          return false;
        }

        // we only left with anagarms that are not in this group
        return true;
      });

      res.push(currentGroup);
    }
  }

  return res;
}

function groupAnagrams2(strs) {
  // can use new Map(), with the has() method, and set it
  const res = {};
  for (let s of strs) {
    const count = new Array(26).fill(0);
    for (let c of s) {
      count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    const key = count.join(",");
    if (!res[key]) {
      res[key] = [];
    }
    res[key].push(s);
  }
  return Object.values(res);
}

/* encode and decode strings*/

// time complexity -  O(k) -> k is the size of lists array
// space complexity - O(m+n) (m is the size of all strins, n is the number of strins) - Length information and delimiters for each string (approximately n)
// because we add more numbers and delimiters there

/*

Encode Time Complexity
The time complexity is indeed O(m) where m is the total length of all strings combined, not just O(n) where n is the number of strings. Here's why:

We do iterate through n strings, which would suggest O(n)
However, for each string, we also:

Need to calculate its length (proportional to string length)
Perform string concatenation operations



String concatenation is key here - when we do str += list[i].length + "#" + list[i], we're creating a new string that includes all previous characters plus the new ones. The work done is proportional to the total length of all strings processed so far.
While modern JavaScript engines optimize this, the time complexity analysis considers the operations performed on each character, which is why we express it as O(m).
*/

// m is the
function encode(list) {
  //1. taking a list of string
  //2. go on the array, appeand it to a result string.
  //3. appeand the length of each word
  //4. return the str

  if (list.length === 0) return "";
  let str = "";
  for (let i = 0; i < list.length; i++) {
    str += list[i].length + "*" + list[i];
  }

  return str;
}

function decode(str) {
  let res = [];

  let length;
  let cur = 0;

  let currentStr = "";
  for (let i = 0; i < str.length; i++) {
    if (cur === 0) {
      length = +str[i];
      cur = length + 2;
    }

    if (cur > length) {
      cur--;
      continue;
    }
    currentStr += str[i];
    cur--;

    if (cur === 0) {
      res.push(currentStr);
      currentStr = "";
    }
  }
  return res;
}

function decode2(str) {
  // i signifay the starting index of the length number each time
  let i = 0;
  let res = [];

  while (i < str.length) {
    const delimiterindex = str.indexOf("*", i);
    const charsLength = +str.subString(i, delimiterindex);

    let startIndex = delimiterindex + 1;

    const extractedStr = str.subString(startIndex, startIndex + charsLength);

    res.push(extractedStr);

    i = startIndex + charsLength;

    // their solution - j signifay the end , the start index + chars lengt
  }

  return res;
}

/* longest consecituve sequence */

// outer loop - iterate over the set
// inner loop each number checked only once across all iterations - meaning, over the entire execution
// innter loop will run at tmost n times for all nnumbers, not n times for each iteartion of the outer loop
// so the inner loop in general will do O(n) work, so we need to add O(n) work to what ever the end result give us
function longestConsecutive(nums) {
  const numsSet = new Set(nums);

  let res = 0;
  for (let i = 0; i < numsSet.length; i++) {
    if (!numsSet.has(nums[i] - 1)) {
      let curr = nums[i];
      let tmpRes = 0;

      /* 
the idae is that - if at most we iterate each element once, its O(n) overall
However, the key point is that each number is checked at most once in the Set. This is because once you move past a number in the sequence, you never revisit it.
Therefore, even though the while loop may appear to iterate many times, across all iterations of the outer loop, each number will only be processed once, leading to an overall time complexity of O(n) for the inner loop.

      */
      while (numsSet.has(curr)) {
        tmpRes += 1;
        curr++;
      }
      res = Math.max(res, tmpRes);
    }
  }

  return res;
}

function longestConsecutive2(nums) {
  const numsSet = new Set(nums);
  let res = 0;

  for (let num of numsSet) {
    if (!numsSet.has(num - 1)) {
      let cur = num;
      let tempRes = 0;

      while (numsSet.has(cur)) {
        tempRes++;
        cur++;
      }

      res = Math.max(tempRes, res);
    }
  }

  return res;
}
