class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const head = new ListNode(4, null);
// next will be an object of type ListNode feel me ?
const node1 = new ListNode(5, head);

console.log(node1);

function reverseList(head) {
  let node = null;
  let curr = head;
  while (curr !== null) {
    const nextNode = curr.next;
    curr.next = node;
    node = curr;
    curr = nextNode;
  }

  return node;
}
