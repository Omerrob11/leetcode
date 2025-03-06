// when to use prefix sum?
// when its not make sense to use for example sliding window
// if you have positive and negative numbers, its not make sense
// because adding extenstind the window does not gurantee that you have a bigger sum
// you could get a negative number
// sliding window means that if you extend or minimize the window
// it means one thing only - that you either decrease of increaes it
// if its not, you should use prefix sum

function subarraySum(arr, target) {
  let prefixSum = [0];
  let start = 0;

  for (let end = 0; end <= arr.length - 1; end++) {
    prefixSum.push(prefixSum[end] + arr[end]);
  }

  console.log(prefixSum);
}
subarraySum([1, -20, -3, 30, 5, 4]);

// prefix sum: sub array sum solution

// how it works:
// 1. we go to an element
// 2. we take the last prefix sum element, and we push to the end the last sum + current index value
//3. than we keep going to the next element, and so forth

// we get:

function subArraySum2(arr, target) {
  const prefixSums = new Map();
  prefixSums.set(0, 0);
  let curSum = 0;

  debugger;
  for (let i = 0; i < arr.length; i++) {
    // sum until i+1 element in the array
    // is the current sum + the previous element of the array, yes
    curSum = curSum + arr[i];

    if (prefixSums.has(curSum - target)) {
      const start = prefixSums.get(curSum - target);
      console.log(start, i + 1);
      return [start, i + 1];

      // return: i, j+1
      // in our code: value of itm i +1
    }

    // why i +1?
    // so prefix sum is the sum of all elements until index i.
    // than, we push to it
    // the cur sum - meaning, the sum of all elements until index i
    // and we add to the curent sum, the value of index i
    // so with our new sum which includes the value at index i
    // we push it to the next index in the prefix sums array
    // because if we map i to i in the array vs the prefix sum array
    // than the i index in the prefix sum array is the value of sum of all elements
    // until index i, not inclusive
    // so we push the value of the prefix sum inclusive i to be the next elements in the array ,meaning the next index
    // to the end of the array , to be the prefix sum of the element of i +1
    prefixSums.set(curSum, i + 1);
    // console.log(prefixSums);
  }
  return [];
}
// subArraySum3([1, 3, -3, 8, 5, 7], 5);

// altenratnive solution
// we first check, than add
// which result in: we will check the current element addon
// only in the next iteartion
// so instead of providing  i +1, i provide it
// because next iteration, 5, the cur sum will actually be the prefix sum
// and not the cur sum including 5
function subArraySum3(arr, target) {
  const prefixSums = new Map();
  prefixSums.set(0, 0);
  let curSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (prefixSums.has(curSum - target)) {
      const start = prefixSums.get(curSum - target);
      console.log(start, i);
      return [start, i];
    }
    curSum = curSum + arr[i];
    prefixSums.set(curSum, i + 1);
    console.log(prefixSums);
  }
}
subArraySum3([1, 3, -3, 7, 6, -1, 7], 5);

// how prefix sum works
// i start with 0
// when i reach your eleemnt, i set in the prefix sum current array
// i take the element before you and i add to you, yes?

function subarraySumTotal(arr, target) {
  const prefixSums = new Map();
  prefixSums.set(0, 0);
  let totalSubArrays = 0;
  let curSum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    curSum += arr[i];
    if (prefixSums.has(curSum - target)) {
      totalSubArrays = totalSubArrays + 1;
    }
    prefixSums.set(curSum, i + 1);
  }

  return totalSubArrays;
}

console.log("before");
console.log(subarraySumTotal([1, 2, 3], 3));

function subArraySumTotal2(arr, target) {}

/*


so the main idea is:

that in a given index, and a targt of 5 for example.

there might be many sub-arrays that ends in the given index with a target of 5, right?

for example:

lets say our index is 6, yes?

and we have:

[3,6] sum is 5:
[2,6] sum is 5

but if we are not counting freuqnecies, we will lose one of them.

meaning, we must count frequencies, to find all the subarrays that ends in this index and have the sum of target, right?

*/

function rangeSumQueryImmutable(nums, left, right) {
  const prefixSums = new Map();
  prefixSums.set(0, 0);
  let curSum = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    curSum += nums[i];
    prefixSums.set(i + 1, curSum);
  }

  const rightVal = prefixSums.get(right + 1);
  const leftVal = prefixSums.get(left);

  console.log(rightVal - leftVal);
  return rightVal - leftVal;
}

rangeSumQueryImmutable([1, 5, 7, 9, -3], 1, 2);

function initSumArray(nums) {
  const prefixSum = new Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }
  console.log(prefixSum);
  return prefixSum;
}

initSumArray([1, 5, 7, 9, -3]);
