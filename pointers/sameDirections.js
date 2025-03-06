function removeDuplicates(arr) {
  let slow = 0;
  let fast = 0;

  for (; fast <= arr.length - 1; fast++) {
    if (arr[fast] !== arr[slow]) {
      slow++;
      arr[slow] = arr[fast];
    }
  }

  return slow + 1;
}

function middleOfLinkedList(head) {
  let slow = head;
  let fast = head;

  // we want to stop when fast is at the end , meaning, fast.next is not exist - so we continue as long is it existed
  //null.next is giving you error
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow.val;
}

function moveZeroes(nums) {
  const slow = 0;
  const fast = 0;

  for (; fast <= nums.length - 1; fast++) {
    if (fast === slow) {
      continue;
    }
    if (nums[fast] !== 0) {
      slow++;
      const temp = arr[fast];
      arr[fast] = arr[slow];
      arr[slow] = temp;
    }
  }
}

function moveZeroes2(nums) {
  let slow = 0;
  const swtich = false;
  for (let fast = 0; fast <= nums.length - 1; fast++) {
    if (nums[fast] != 0) {
      if (!swtich) {
        slow++;
      } else if (slow + 1 <= nums.length - 1) {
        const tmp = arr[fast];
        arr[fast] = 0;
        arr[slow + 1] = tmp;
        slow++;
      }
    }

    if (nums[fast] === 0) {
      swtich = true;
    }
  }
}

function isPalindrome(s) {
  let l = 0;
  let r = s.length - 1;
  // im not really good with strings method, kinda forgot.
  // so lets just convert it to array and chack there

  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }

  return true;
}
