// time complexity: O(n) -> every node is visited once
// space complexity: O(h) -> space required for the recursive call stack in the worse case

function dfs(root, dpethLevel) {
  if (root === null) {
    return dpethLevel - 1;
  }

  // we add, before we go to the next node, because next node need to be with one more
  const currentDepthLevel = dpethLevel + 1;
  // state to maintain to compute the return value for the current node
  const leftMaxDepth = dfs(root.left, currentDepthLevel);
  const rightMaxDepth = dfs(root.right, currentDepthLevel);

  // once the recursion finish, we will get here

  // what we want to return after visting a node
  return Math.max(leftMaxDepth, rightMaxDepth);
  // we want to return the max depth, so send the recusring to look it
}
function treeMaxDepth(root) {
  return dfs(root, 0);
}

let maxDepth = 0;

// think in a node prespsecitve
function globalDfs(root) {
  if (root === null) {
    return;
  }

  // but we only need to add based on something, that i cant think fo
  maxDepth = maxDepth + 1;
  globalDfs(root.left);
  globalDfs(root.right);
}

function getDpeth() {
  globalDfs(root);
  return maxDepth;
}

// visible tree node

function visibleTreeNode(root) {
  return dfsVisible(root, root.val);
}

function dfsVisible(root, maxVal) {
  if (root === null) {
    return 0;
  }

  // state: to determine if the current node value is larger than all his parentes
  // we will need to maintain the maxval of the roe route
  const updatedMax = Math.max(maxVal, root.val);
  const leftNumOfVisible = dfsVisible(root.left, updatedMax);
  const rightNumOfVisible = dfsVisible(root.right, updatedMax);

  //   you are a node - you need to return the sum of left + right + determine if you are visible
  // for each node -> what the problem asks, and what each node needs to check to help it?
  // at the end its a recursion, if each node do its job, and check the sub problem, it will work
  if (root.val >= updatedMax) {
    return leftNumOfVisible + rightNumOfVisible + 1;
  }

  return leftNumOfVisible + rightNumOfVisible;
}

function dfsVisible2(root, maxVal) {
  if (!root) return 0;
  let total = 0;

  if (root.val >= maxVal) total++;

  total += dfsVisible2(root.left, Math.max(maxVal, root.val));
  total += dfsVisible2(root.right, Math.max(maxVal, root.val));

  return total;
}

function dfsVisible3(root, maxVal) {
  if (root === null) return 0;

  // check the condition for the root
  //   usually when have state, we will need to check something about the root
  // to be later calculated on the result
  let isVisible = root.val >= maxVal ? 1 : 0;

  const left = dfsVisible3(root.left, Math.max(maxVal, root.val));
  const right = dfsVisible3(root.right, Math.max(maxVal, root.val));

  return left + right + isVisible;
}

function isBalancedDfs(root, height) {
  if (root === null) {
    return 0;
  }

  // the states we need to maintain to compute the return value for the current node
  // state are coming from the parent - we use it to pass data from parent to children
  // here, we need to maintain the current height of the node

  let currentHeightLevel = height + 1;
  const leftSubTreeBalanced = isBalancedDfs(root.left, currentHeightLevel);
  const rightSubTreeBalanced = isBalancedDfs(root.right, currentHeightLevel);

  // you are a node
  // problem asks if the tree is balanced
  // mini problem for this node - if the subtree of you (the current node) are balanced
  // so to solve the mini problem that will help to solve the bigger one
  // return true / false if your sub tree is balanced
  return Math.abs(leftSubTreeBalanced - rightSubTreeBalanced) <= 1;
}

function isBalancedDfs2(root, height) {
  // calculate the node count from this root to left and right sub trees
  // the height will be node count - 1 will give us the edge cuont
  //   so:
  // 1. calculate the hegit of each sub tree
  // 2. see if they are balaanced, smaller than 1 basically
  //   height - number of edges on the longest path
  // so calculate the number of nodes, and subtract 1

  //   state: to compute the return value of the current node
  // we need to maintain the height of each node / maintain the numbe of nodes in each sub tree
  // height and number of nodes in the sub trees (either left or right) is the same
  // height is just to subtract 1

  //   you are a node
  // check if the abs value of the sub trees are smaller than one

  //   return Math.abs(leftSubTreesNodes - 1 - (rightSubTreesNodes - 1)) <= 1;

  return (
    Math.abs(isBalancedDfs2(root.left) - 1 - (isBalancedDfs2(root.right) - 1)) +
    1
  );
}

function isBalanced(root) {
  // Helper function to check balance and return the height of the tree

  // If dfs returns -1, the tree is not balanced, otherwise it is balanced
  return dfs4343(root) !== -1;
}

function dfs4343(node) {
  if (node === null) {
    return 0; // Height of null node is 0
  }

  // Recursively get the height of the left and right subtrees
  const leftHeight = dfs(node.left);
  const rightHeight = dfs(node.right);

  // If left or right subtree is unbalanced, or their height difference is more than 1
  if (
    leftHeight === -1 ||
    rightHeight === -1 ||
    Math.abs(leftHeight - rightHeight) > 1
  ) {
    return -1; // Return -1 if unbalanced, which will propagate up
  }

  // Return the height of the current node (1 + max height of its subtrees)
  return 1 + Math.max(leftHeight, rightHeight);
}

// TODO: why treeheIGHT(tree.left) brings the height? really think about how to compute heights

function isBalanced2(node) {
  return isBalancedDfs2(node) !== -1;
}

function isBalancedDfs2(node) {
  if (node === null) {
    return 0;
  }

  // so basically this is just the subtree
  // number of nodes in the left subtree and the right subtree
  const left = isBalancedDfs2(node.left);
  const right = isBalancedDfs2(node.right);

  // if we get unbalanced tree somewhere, keep returning -1
  if (left === -1 || right === -1) {
    return -1;
  }

  // if non balanced
  if (Math.abs(left - right) > 1) {
    return -1;
  }

  // if tree is balanced, keep returning the number of nodes
  // which is just adding 1 to the maximum
  // why? because we care about the maximmum because of the height, height is the maximum path
  // so the height of the current ndoe is the maximum between his children +1 for him

  // this gives us the number of nodes in the longest root to leaft
  // because we take the maximum of numfer of nodes in left and right
  // and we add one for the current node
  // and than, each node reutnr -1 if height is not balanced
  // and the current height for if he is balanced, to check for the parent node

  // so this is just the height of the node
  return Math.max(left, right) + 1;

  // in summary:
  // if he is balanced, we return the height, so my fater could solve his
}

function isSameTree(tree1, tree2) {
  // if both null, meaning we went left and both are null, awesome!
  if (!tree1 && !tree2) {
    return true;
  }

  // if we get here
  // than it mean both of them are not null
  // but if one of them is null
  // than return false
  if (!tree1 || !tree2) {
    return false;
  }

  if (tree1.val !== tree2.val) {
    return false;
  }

  const left = isSameTree(tree1.left, tree2.left);
  const right = isSameTree(tree1.right, tree2.right);

  return left && right;
}

function subTreeOfAnotherTree(root, subRoot) {
  // if root is actually subRoot
  // if we are the same tree here
  // and we also check
  // if maybe not here, than the left or right is sub tree

  const sameTree = isSameTree(root, subRoot);
  const isRightSameTree = subTreeOfAnotherTree(root.right, subRoot);
  const isLeftSameTree = subTreeOfAnotherTree(root.left, subRoot);

  // we will check

  return sameTree || isRightSameTree || isLeftSameTree;
}

// invert binary tree

function invertBinaryTree(tree) {
  if (tree === null) return null;
  return invertBinaryTreeDfs(tree);
}

// get the root of the tree
function invertBinaryTreeDfs(tree) {
  // do not need to do anything here
  if (tree === null) {
    return null;
    // return null for if you want to handle the base case
    // when tree is empty
  }

  // swtich between the trees
  const tempRoot = tree.left;
  tree.left = tree.right;
  tree.right = tempRoot;

  // for each node, we invert the tree
  // so we basically swap then invert
  // you can think of it that each node needs to return the inverted sub tree
  // so he will need to call the recursive function
  invertBinaryTreeDfs(tree.left);
  invertBinaryTreeDfs(tree.right);

  return tree;
}

// their solution

/*


tree.val: The value of the current node.
invertBinaryTree(tree.right): The function recursively inverts the right subtree.
invertBinaryTree(tree.left): The function recursively inverts the left subtree.
After the recursion, they create a new Node where:

The current node's value (tree.val) stays the same.
The left and right children are swapped.s

what you get from the right, you put it now as ayour left childs
so this is their idea
so for each node, we create a new node, and return the inverted sub tree
why its inverted sub tree? becaes we iterate on the right and the left in this order
but we put the right as the left child, and the left as the right child
*/

/*

Pre-order Algorithm (Recursively):
Process the current node.
Recursively traverse the left subtree.
Recursively traverse the right subtree.


Traverse the left subtree.
Visit the node (i.e., process the node).
Traverse the right subtree.

Recursively traverse the left subtree.
Process the current node.
Recursively traverse the right subtree.

pre order: node -> left -> right
in order: left ->node -> right
post order: : left->right->node

DFS is a tree or graph traversal strategy where you start at the root (or an arbitrary node) and explore 
as far as possible along each branch before backtracking. 
It explores nodes by going deep into one branch of the tree and only backtracks when it reaches a 
leaf node or a dead end.

In all of pre-order, in-order, and post-order traversals, DFS is the underlying concept because all of 
them explore a branch deeply (i.e., going down to leaf nodes) before backtracking. 
The difference lies in the order in which the node itself is visited.

we use pre order, because we process the ndoe before going to is children

back trainking: when not found, retract your step
We go as deep as we can to look for a value, and when there is nothing new to discover,
 we retrace our steps to find something new

*/
