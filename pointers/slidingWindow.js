function longestSubstringWithoutRepeatingCharacters(s) {}

// 2 kind of windiows:
// fixed size - we will always move it right by 1
// dynamic size - we will insert second or first
function subarraySumFixed(nums, k) {
  let i = 0;
  let j = 1;
  let sum = nums[i] + nums[j];
  while (j <= nums.length - 2) {
    if (j - i + 1 < k) {
      sum = sum + nums[j + 1];
      j++;
      continue;
    }
    j++;
    let newSum = sum - nums[i] + nums[j];
    if (newSum > sum) {
      sum = newSum;
    }
    i++;
  }

  return sum;
}

// each time, move window right by 1
// reduce sum at i
// add sum at j
function sub2(nums, k) {
  let sum = 0;
  // assume k < nums.length
  for (let i = 0; i < k; i++) {
    sum = sum + nums[i];
  }
  let largest = k;

  for (let smallest = 0; largest < nums.length; largest++) {
    if (largest >= nums.length - 1) {
      break;
    }

    // check current sum anda compare to the previous maximum sum
    const newSum = sum - nums[smallest] + nums[largest];
    if (newSum > sum) {
      sum = newSum;
    }

    smallest++;
  }
  return sum;
}

// fixed size sliding window:
// function slidingWindowFixed(input, windowSize) {
//   ans = window = input.slice(0, windowSize);
//   for (const right = windowSize; right < input.length; ++right) {
//       const left = right - windowSize;
//       remove input[left] from window
//       append input[right] to window
//       ans = optimal(ans, window);
//   }
//   return ans
// }

// TODO: do the newspaper problem, to better understand about the constarins
// TODO: watch what you wrote about the newspaper problem

function findAllAganrams(original, check) {
  // lets converThemTo ARRAY, easier
  const originalToArray = original.split("");
  const checkArray = check.split("");
  const windowSize = checkArray.length;
  let window = [];
  for (let i = 0; i < windowSize; i++) {
    window.push(originalToArray[i]);
  }

  let result = [];

  if (compareAnagram(window, checkArray)) {
    result.push(0);
  }

  for (let right = windowSize; right < original.length; right++) {
    const left = right - windowSize;
  }
}

function compareAnagram(subArray, checkArray) {
  // sort to alphabetical order
  // than, check if euqal

  if (subArray.length !== checkArray.length) {
    return false;
  }

  subArray.sort();
  checkArray.sort();

  return subArray.every((letter, index) => (letter = checkArray[index]));
}

// ok, so if we have it, than we will just add to it
// a hash map is
// key:value pairs,
// preserve the order of keys

// map preserver the insertion order always

// very simple:
// we use array as to map each letter to a key value - so basicaly, map each letter to the index
// so we have: a (key,value) pair inside the string, where the key is the letter and the value is the number of occurunce
// its a very simple hash map solution, where we map the key to a hash value, in this case, a number
// and store the value, number of occurnce, in the hash table
// than we check if both equal
// and when we go to the next window, we get the hash value of the key, and remove the the value inside that key in the hash table by one
// than we compare again the arrays

// solve barely -> think about edge cases -> refactor
function subarraySumLongest(nums, target) {
  let i = 0;
  let j = 1;

  let windowSum = nums[i] + nums[j];
  let largestSubArray = 0;
  while (j < nums.length) {
    // windowSum = windowSum + arr[j];
    if (windowSum <= target) {
      const currentWindow = j - i + 1;
      largestSubArray = Math.max(currentWindow, largestSubArray);
      j++;
      if (j < nums.length) {
        windowSum = windowSum + nums[j];
      }
    } else {
      windowSum = windowSum - nums[i];
      i++;
    }
    if (i === j) {
      j++;
    }
  }

  return largestSubArray;
}

// idea  - we want to extend the window
// we always want to keep a valid window
// by extending the window we can break it
// so if we break it, we increment left until the window valid again
// at the end of the while loop, its a valid window again
// invariant - the condition that holds before and after the loop - window is valid
function subArraySumLongest2(nums, target) {
  let left = 0;
  let windowSum = 0;
  let longest = 0;

  // so the algorithem:
  // alawys look for a valid window sum
  // start with window size 0, it is valid
  // add 1 to the right
  // continue adding while valid, and store the longest in the variable
  // if not valid, because you add to much, reduce the window size until you get to a valid window
  // that valid window could be 0 btw
  // than calculate max
  // and restart again

  // why it works?
  // because for each entry, you calculate the maximum length of the window size
  // meaning, you look for another one that is bigger sub aray, by extend the window to the right
  // but when you got to much, make the window invalid
  // you need to shrink the window, and 100% you will get a length that is smaller than what you got, because you shrink it
  // you shrink it until so far, so from that praticular index, you cant get a bigger window
  // so you look for another window starting from indexes to the right of you
  // they will be smaller or equal to the current maximum window, equal if by the next one the window become valid
  // and they do the same approach, but for them, try to look for the valid subarray, the longest one from their position
  // and if they found, great
  // if for example your number is huge, and we will get a window size of 0, it means, that the first index was the longest one
  // until the number we got to, none of the index could have the longest sub array until that number, because you are the left of them
  // so we start again by looking from that number
  for (let right = 0; right < nums.length; right++) {
    // meaning, we will remove from the left, until we get to a good window sum
    // so we make a pgroress in the window by 1 each time
    windowSum = windowSum + nums[right];

    // we might bigger than the target because the number we added up
    // so we remove all the numbers from the left until we get to a valid window sum

    while (windowSum > target) {
      windowSum = windowSum - nums[left];
      left++;
    }

    // than we calculate the longest between our own valid window and the current longest
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}

/*
The brute-force  - o(n^2) - take all subarrays
 algorithm looks like this: Start at index 0, then scan ahead until all target characters are found. 
 Record the length of that substring. Repeat for index 1, 2, etc. and take the overall minimum.

 sliding window - we iterate only once very element
//  at the end, you need to count how many operation, yes?
// so if you have 2 quadratic loop, each time you will do n operations, and you havae n times, so n*n
// here, you have a loop, that iterate n times
// but, what is the toal of operation?
// why? because non of the input go backward
// so for each element, you do constant tmie of oepartions

The brute-force  
O
(
n
2
)
 algorithm looks like this: Start at index 0, then scan ahead until all target characters are found. Record the length of that substring. Repeat for index 1, 2, etc. and take the overall minimum.
*/

/*
diffference:
- in quadratic, i do for each element, for each j, i do n operations. i have n elemetsn, so its n*n
- here, for each j, i maximum do constant amount of work, in the worse case. so its O(n*k) = O(n)
*/
const arr = [1, 6, 3, 1, 2, 4, 5];

//  question 4:

function longestSubStringWithoutRepeatingCharacters(s) {
  let array = s.split("");
  let window = new Set();
  let left = 0;
  let longest = 0;
  debugger;
  for (let right = 0; right < array.length; right++) {
    window.add(array[right]);
    // invariant might be invalide
    while (right - left + 1 !== window.size) {
      window.delete(array[left]);
      left++;
    }

    // invatianrt return to be valid
    longest = Math.max(longest, window.size);
  }

  return longest;
}
function longestSubStringWithoutRepeatingCharacters2(s) {
  let array = s.split("");
  let window = new Set();
  let left = 0;
  let longest = 0;

  for (let right = 0; right < array.length; right++) {
    while (window.has(array[right])) {
      window.delete(array[left]);
      left++;
    }
    // you are not long exist there
    window.add(array[right]);

    longest = Math.max(longest, window.size);
  }
  console.log(longest);
}

("aabb");

function longestSubStringWithoutRepeatingCharactersWithMap(s) {
  let array = s.split("");
  let window = new Map();
  let left = 0;
  let longest = 0;
  for (let right = 0; right < array.length; right++) {
    window.set(
      array[right],
      window.has(array[right]) ? window.get([array[right]] + 1) : 1
    );
    while (window.get(array[right]) > 1) {
      window.set(array[left], window.get(array[left] - 1));
      left++;
    }
    longest = Math.max(longest, window.size);
  }
  return longest;
}

// question nmber 5: sliding window, shortest.

// we can also check for a condition that if element is bigger
// we update left to right + 1, and reset the window sum, and it will only happen
// if we are on the same element, yes?
// so it will be the shortest 100%, we can even exist the loop and return 1
function subarraySumShorest(nums, target) {
  let windowSum = 0;
  let shortest = 99999;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    windowSum = windowSum + nums[right];

    while (windowSum >= target) {
      shortest = Math.min(right - left + 1, shortest);
      windowSum = windowSum - nums[left];
      left++;
    }
  }
  console.log(shortest);
  return shortest;
}

// subarraySumShorest([1, 4, 1, 7, 3, 0, 2, 5], 10);

/*
for regular sliding window with dynamic size:
start that already contains one duplicate character, we want to stop checking more substrings with the start index. 
When this occurs, we want to increment start and look at the next set of substrings.

its very important - the idea is that once the window is not valid, we dont need to check for more substrings to the start index
so we increemet start and look at the next set of substrings, until we find a valid window with an index.
than , this index will be the next start index

why we might move more than one?
because until we find our new start, the window remain invalid
what does it mean?
that for example they are bigger than the target number
so there is not point in look for a subarray for it
because our first index has a better result than this
so we go until the next start index, next valid index

in between our current start and the next start, we should pass on check all of this indexes
why? because the optimal result will come from our current start, and the new optipal result will only be from the next start
that indicates the next time the window is valid
why/
because if we start from 1 ->5, than if 2 ->5 is invalid, than no point in look for sub arrays from
2 , because the maximum of the window could be until 5, and 1->5 is more optimal
*/

// problem 6 - least consecutive cards

// time complexity(O(n))
// n iteration for the for loop, and at most n inceremets to the left pointer
// complexity - O(n), hash mah will contain at most n cards if no duplicates, so o(n)
function leastConsecutiveCardsToMatch(cards) {
  let length = cards.length + 1;
  let left = 0;
  let window = new Map();
  // the window  - is what we are looking for
  for (let right = 0; right < cards.length; right++) {
    window.set(
      cards[right],
      window.has(cards[right]) ? window.get(cards[right]) + 1 : 1
    );

    while (window.get(cards[right]) > 1) {
      length = Math.min(length, right - left + 1);
      window.set(cards[left], window.get(cards[left]) - 1);
      left++;
    }
  }

  console.log(length);
  return length;
}
leastConsecutiveCardsToMatch([3, 4, 2, 3, 4, 7]);
