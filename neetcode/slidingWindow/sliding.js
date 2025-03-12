// why 2 pointers? only reference 2 indecies, so sliding window won't fit here
// why same direciton? because we might lose options if we have opposite direction
// how to know about it? at the end of the day, you need to think about when does the next possible outcome
// of max, for example, you know that the next possible outcome of max is only if there is an eleemnt smaller than me
// so you need to think about the posibilitied
function maxProfit(prices) {
  let slow = 0;
  let fast = 1;
  let max = 0;
  // fast - sell value
  // slow - buying price
  // we want the minimum of slow as the left index in fast
  // so if we are progress in fast, and it is smaller, and then keep progrressing in fast
  // we always want the minimum value
  // so we will always update it

  for (; fast <= prices.length - 1; fast++) {
    const currentProfit = prices[fast] - prices[slow];

    if (currentProfit >= max) {
      max = currentProfit;
    } else {
      if (prices[fast] < prices[slow]) {
        slow = fast;
        // no need to update fast, it will just be in the next iteration
      }
    }
  }
  return max;
}

const prices = [10, 8, 7, 5, 2];
console.log(maxProfit(prices));

/* longest repeating char */

function characterReplacement(s, k) {
  let tmp = k;
  let window = new Map();
  let longest = 0;

  let prevChar = s[0];
  window.set(prevChar, 1);
  let left = 0;
  for (let right = 1; right < s.length; right++) {
    const cur = s[right];
    // adding to the window, now we might violate the condition
    window.set(cur, window.has(cur) ? window.get(cur) + 1 : 1);

    if (s[right] !== prevChar) {
      tmp -= 1;
    }

    if (tmp < 0) {
      let checkCondition =
        s[left] !== s[prevChar] && window.get(s[left]) >= left - right + 1 - k;

      while (
        s[left] !== s[prevChar] &&
        window.get(s[left]) >= left - right + 1 - k
      ) {
        window.set(s[left], window.get(s[left]) - 1);
        prevChar = s[left];
        left++;
      }

      tmp = k - (right - left + 1 - window.get(s[left]));

      longest = Math.max(longest, right - left + 1);
    }
  }

  return longest;
}
