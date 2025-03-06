/*
constarins :
The constraints essentially set expectations about what optimizations are necessary and what edge cases you need to handle.

*/

function search(nums, target) {
  const left = 0;
  const right = nums.length - 1;
  while (left <= right) {
    // might have integer oerflow, if left + right is extremley large
    let mid = Math.floor((left + right) / 2);
    // other mid: where you can prove it algebrally by open it up
    // left + Math.floot((right-left) / 2)
    if (feasble(nums[mid], target)) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

function feasble(mid, target) {
  if (mid === target) {
    return true;
  } else {
    return false;
  }
}

// most of binary search question is about finding the boundary in boolean array
// best is to track with an index
// and the idea is binary search is when you can make a binary desicion to shrink the search range
// the feasible function - signifay where the element at the current index is feaisble or not to meet problem constarins

// *** most if the questions is about finding the boundary in a boolean array ******
// feasible function will basiclly check look for the boundary, meaning we will get the boundary at the end
// while the feasible function determine the key aspect in relation to the boundary - so we will look for the boundary
// if the number is bigger or smaller than 3, meaning we will have aboundary of all numbers bigger than 3
// and the feasible fuction for each one will check if its bigger or smaller than 3

// - array must be monotonic in some shape or form - so the array is the monotonic function
// and we check if for any given element, it is true or false
// meaning the array is the monotonic function, is if we can have FFFTTT, and the feasible function
// is just checking for every index if you are F or T
