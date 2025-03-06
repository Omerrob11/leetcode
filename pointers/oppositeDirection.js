/*
An algorithmic technique is a reusable problem-solving strategy 
or pattern that can be applied to various problems. 
It's like a template for solving certain types of computational challenges efficiently, 
similar to how a chef might use basic cooking techniques (sautéing, braising, etc.) 
across different recipes.


Quick sort is a specific algorithm - a defined set of steps to sort data. The algorithmic technique it uses is "divide-and-conquer" (breaking a problem into smaller subproblems). This technique is also used in binary search, merge sort, and other algorithms.
Think of it like:

Algorithmic technique = general strategy (like "divide-and-conquer")
Algorithm = specific implementation (like quicksort)

An algorithm is a clear, step-by-step procedure to solve a problem. 
Like a recipe, it takes inputs and produces desired outputs through specific steps.

"Learning algorithms" typically means:

Understanding common problem-solving procedures (like sorting, searching, graph traversal)
Learning to recognize which algorithm fits which problem
Understanding time/space complexity to choose efficient solutions
Practicing implementing these solutions in code

Think of it as learning standard tools and approaches to solve computational problems efficiently.
*/

function twoSumSorted(arr, target) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    const twoSum = arr[r] + arr[l];
    if (arr[l] + arr[r] === target) {
      return [l, r];
    }

    if (twoSum < target) {
      l++;
    } else {
      r--;
    }
  }
  return [];
}

// main idea if equal -
// the hegith determine by the smallest number
// meaning, if we will get a smaller number there, it will be the one that determine the hegiht ,not the larger number
// we are in pursiot of a larger number if they are not equal, to have a chance to increase the size
// smaller number determine the acutal result
// so if they are equal, and there is no more than 1 number that is bigger than both of them
// then while reducing the width, the result will be no longer than the equal numbers, because we will always determine the result
// by the smallest number, so if they have up to 1 there, the size is the width*smallest number, and it will be less
// in order for us to have a change to get to a hiegher result
// just one number that is bigger than the equal numbers wil not enough
// because than his counter number will be smaller than those, and he will determine the result
// so we get a smaller width with an even smaller number
// so in order to get a bette result, we need 2 new nubmers that bigger than equal to the equal numbers
/// and then, we might have a reduced width, but a bigger number, so this is give us a chance
// so the goal is to just find a new number that is bigger than the number that determine the result (which is the minimum)
// in hope for a bigger width*number = result.
// and it will happen in euqal numbers, only if there is 2 numbers that are larger than them, otherwise the number
// that will determine the result in the new width will always be less than the equal number
// that will trun to a smaller result
// and if there is 2 numbers than bigger we can get a better result, and we will get to both of them no matter
// the order of progress
function containerWithMostWater(arr) {
  let l = 0;
  let r = arr.length - 1;
  let result = 0;
  while (l <= r) {
    let min = Math.min(arr[r], arr[l]);

    let newResult = min * (r - l);
    if (newResult > result) {
      result = newResult;
    }

    if (arr[r] > arr[l]) {
      l++;
    } else {
      r++;
    }
  }
  return result;
}
