// question 1:

function levelOrderTraversal(root) {
  const levelOrder = [];

  if (root === null) return null;
  const queue = [root];

  let counter = 1;

  while (queue.length > 0) {
    const levelArray = [];

    for (i = 0; i <= counter; i++) {
      levelArray.push(queue[i]);
      --counter;
      const node = queue.shift();
    }
    const node = queue.shift();
    --counter;
    // assume binary tree
    if (node.left) {
      queue.push(node.left);
      counter++;
    }

    if (node.right) {
      queue.push(node.right);
      counter++;
    }
  }
}

function levelOrderTraversal(root) {
  if (!root) return [];

  const res = [];

  const queue = [root];

  // o(n) - as long queue exist
  // each node is inserted to the queue once
  // so its o(n) - process al nodes
  while (queue.length > 0) {
    // when deque an element, before adding its children
    // the queue size only have one level of nodes, yes?
    // so currently, before enqueue, we have one level of nodes
    // so n is the number of elements in that level

    const n = queue.length;
    const newLevel = [];

    // time complexity - we will run this loop total iterations of N times
    // in quadratic loop, the inner loop total iteraions is O(n^2), meanin the overall total is n^2
    // not n times, like there
    // total iteraitons - if we count the inner loop body exeruces, is n, and not n^2 in nestes los

    /*

For example, in a tree with:

1 node at level 0
2 nodes at level 1
4 nodes at level 2

The inner for loop will:

Execute 1 time for level 0
Execute 2 times for level 1
Execute 4 times for level 2

Total: 1 + 2 + 4 = 7 iterations (equal to the total number of nodes)
This is why it's O(n) and not O(n²). In a true O(n²) algorithm, we would process each node n times. But here, each node is processed exactly once.


you understand? in o(n^2), each node, or each element in the array
will be proccessed n times
because we have 2 nested loop, and the inner loop runs for each element n times
but here, we process each once
    */
    for (let i = 0; i < n; i++) {
      // deque each node in the current level
      // when we deque the left element we only have  1 level in the tree
      // so, before adding their children
      // just count the number of elements in this level
      // and this is n
      // so we will just go through n
      // and deque and push them into the new level
      // and enque its children
      const node = queue.shift();
      newLevel.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    res.push(newLevel);
  }
  return res;
}

// do an example to see if your approach works!
// example of smalle tree, 3 levels
function zigZagTraversal(root) {
  // idea is bfs yes?
  // so we just needs to start from the end when the modulu is equal one yes
  // how we start from the end this is the question?

  // well for regular level add to the end
  // for non regular, add to the start
  // so the algorithem will be the same in terms of new Level
  // but, we will just add to the start / end depends on it

  if (!root) return [];
  const res = [];
  const queue = [root];

  while (queue.length > 0) {
    // number of elements in here
    const n = queue.length;
    const newLevel = [];

    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      newLevel.push(node);

      if (res.length % 2 === 0) {
        // if we are currently in a regular one
        // next one, should be non regular
        if (node.right) {
          queue.push(node.right);
        }
        if (node.left) {
          queue.push(node.left);
        }
      } else {
        // the idea - just put them in different order ok
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
    }
    res.push(newLevel);
  }
  return res;
}

// key idea

// we just add a flag from when is left to right, and when is rigt to left
// and the main idea is that
//that we push we will still push the nodes in the same order to the queue
// just to the the each level array
// if its right to left, we will take the node, and put it just at the end, of the level array
// and thats it

/*



Exactly right! Here's the main idea broken down:
Keep consistent BFS traversal:

Always add nodes to the queue in the same order (left child then right child)
Always process nodes in queue order (first in, first out)

Create zigzag pattern in the output:

For even levels: Add values to the end of the level array (push)
For odd levels: Add values to the beginning of the level array (unshift)

This way:

The tree traversal remains stable and predictable
The zigzag pattern is created only in how we construct each level in the final result

This approach is clean because it separates:

The traversal logic (standard BFS with queue)
The presentation logic (alternating direction in the output)

*/

// time complexity: o(n)
// space complexity: O(h)
function binaryTreeRightSideView(root) {
  if (!root) return [];

  const queue = [root];

  const rightSideArr = [];

  while (queue.length > 0) {
    const n = queue.length;

    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      if (i + 1 === n) {
        rightSideArr.push(node.val);
      }

      for (const child of [node.left, node.right]) {
        if (child) queue.push(child);
      }
    }
  }

  return rightSideArr;
}

//

function binaryTreeMinDepth(root) {
  if (!root) return 0;

  const queue = [root];
  // let foundShallowestNode = false;
  const levels = [];
  while (queue.length > 0) {
    const n = queue.length;
    const newLevel = [];

    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      newLevel.push(node);

      if (!node.right && !node.left) {
        // foundShallowestNode = true;
        return levels.length;
      }

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    levels.push(newLevel);
  }
}

// tell them their levels
// you are currently projected as junior level mathematichan
// currently projected to get around 70-80 in the test, practice more to ace it!
