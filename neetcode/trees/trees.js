class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/*
when to use bfs vs dfs:

- try to understand if it is a bfs problem first, if not, than its dfs
: "Am I looking for something close to the root or something that requires exploring deep paths
dfs: finding nodes far away from the root

    - explore all possible paths or checking path existense
    - invovles backtracking
    - maximmum depth
    - full subtree exploration
bfs: finding nodes close/closest to the root
    - proccessing level by lavel
    - shortest path or minimum steps
    - "closets to the rootes" - searching stuff closer to the root
    - finds stuff at distance k


*/

// dfs - if not calculating anything, i will not preserve state.

// you can also do everything in bfs, as it is also go over the all tree
function invertTree(root) {
  if (root === null) return null;
  return invertTreeDfs(root);
}

function invertTreeDfs(root) {
  // base case
  if (root === null) {
    return root;
  }
  // recursion

  // the actual inversion - pre ordder, root, left, right
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  // do same dfs order
  invertTreeDfs(root.left);
  invertTreeDfs(root.right);

  // return value - the inverted tree
  return root;
}

// how to think recursivley:
// the method recursively solves for each node, it inverts the node child
// so you should: assume the recursion works, that it inverts the sub tree
// so, you start by creating new node with value of root (1)
// than set 1.right = invertTreeDfsNeet(root.left), which you trust that the recurious give you the inverted tree
// 1.left = invertTreeDfsNeet(root.right) - where you turst that for each node it will give you recursivley the inverted tree
// so you just invert between them, by doing the actual work in this step! and trust that it will do it recursivelys
function invertTreeDfsNeet(root) {
  if ((root = null)) {
    return null;
  }

  // so you:
  // create a new node with the current value
  // define the right side of the tree,

  // creating a new node: - creating a new tree
  const node = new TreeNode(root.val);

  // right child of this node - becomes the inverted left sub tree of the original

  // this if it is a method inside a class
  // it will refer to the instance of the class instance containg
  node.right = this.invertTreeDfsNeet(root.left);

  // left chiild - becomes  the inverted right sub tree of the original
  node.left = this.invertTreeDfsNeet(root.right);

  return node;
}

// this will be the insatnce of the class solution, where invertTree is defined on
// const solution = new Solution();  // Create instance
// const result = solution.invertTree(originalTree);  // Call method
// so when you call the invertTree, this will refer to the solution instance
// than when we this.inertTree(root.left), its calling the method on the solution object, which is an insatnce of this class
// so the method, its inside a class, and it will turn a result, the inverted tree
// and the solution, well, it is not just an insatnce of the solution class, which has the method and thats is
// at the end to  get the method we need an instance, so we create an instance, and we keep calling it recuosrelivey
// so each time we keep calling it recuourseilvey, in order to call it we need an instance, so this is the instance of the solution
// because we must use this.methodnAME() TO CALL OTHER METHODS WITHIN the same class - its just acess the method
/*
so basiclly, if we want to use a class method, we need an instance right?

and each time we call a class method, we need an instance of it, so this will be that instance.

we can't call a class method without an instance

because you need to unseratnd which invertTree method to call, yes?
well, this will refer to call the method in this instance, well the method avialbele in this instanec is the method of the class
its just a way to undertand which method to keep calling

class Solution {
    invertTree(root) {
        if (root === null) return null;
        
        const node = new TreeNode(root.val);
        
        this -> refer to this instance, basiclly this class
        so we will look for a invertTree function in this instance, which has avilable the method on the class
        node.right = this.invertTree(root.left);
        node.left = this.invertTree(root.right);
        
        return node;
    }
}
*/
function invertTreeDfsAlgo(tree) {
  if (tree === null) return null;

  new TreeNode(
    tree.val,
    // same as previous, but instead of doing node.right, right here i put the recursive call
    invertTreeDfsNeet(tree.right),
    invertTreeDfsNeet(tree.left)
  );
}

/* question 2 - maximum depth of binary tree */

function maxDepth(root) {
  // edge case root is empty
  if (root === null) {
    return 0;
  }
  return maxDepthDfs(root, 0);
}

function maxDepthDfs(root, depth) {
  if (root === null) {
    return depth;
  }

  // each time we visit a node, we will just update the depth
  depth++;

  // recursion step: partition

  const leftSubTreeDepth = maxDepthDfs(root.left, depth);
  const rightSubTreeDepth = maxDepthDfs(root.right, depth);

  // return value - maximum number of nodes in the longest path for me
  // assume that the recursion works, and give me the leftsubtree depth and the right sub tree depth

  return Math.max(leftSubTreeDepth, rightSubTreeDepth);
}

function maxDepth2(root) {
  // lets just count the edges, and return the maximum?
  // meaning, lets just return the maxium of edges, and return +1?

  if (root === null) {
    return 0; // you are not adding any depth
  }

  // both wil return me the actual מסלול
  const leftSubTreeDepth = maxDepth2(root.left);
  const rightSubTreeDepth = maxDepth2(root.right);

  // the idea herre is quite amazing
  //we assume that the recursion give me the larget depth between them
  // and i add +1 for me
  // so i dont need states, i trust that it will give me the right solution, as each node add one for him
  // and i also add one for me

  // the idea is that here we add something to the return value, and we don't bring the recursion state that we update
  // in the last function, we always update the state, here, we bring update the return value
  return Math.max(leftSubTreeDepth, rightSubTreeDepth) + 1;
}

/* question 3: sub tree of another tree*/

// time complexity O(m*n) - because we might check for each node, we will go over the entire sub tree
// meaning it will be: n+n+n+n+n.... +n+n... (m times, for each node)
// as isSubTrees time coplexity is O(m) and there you call for each node a function of O(n) time complexity, so n*m

// space compleixty: O(m+n)
// height could be M in the worse case and N in the worse case
// so we might do: left, left ,left, left,left (call stack of m), and then, in the last left, before we remove frames from the call stack
// we call the isEqual, and add n more frames
// so we have at the most deep node, n+m frames
function isSubTrees(root, subRoot) {
  // empty tree
  if (subRoot === null) {
    return true;
  }
  // if empty its bad
  if (root === null) return false;

  // boolean question - if we found wearly return here
  // if we dont find, keep looking in the tree with the recursion step
  if (root.val === subRoot.val) {
    if (isEqual(root, subRoot)) {
      // i will check is euqal for me
      return true;
    }
  }

  // if for me it is not true
  // i will check left and right

  // recursion stem - check if it is in my left or right sub tree
  const isInLeftSubTree = isSubTrees(root.left, subRoot);
  const isInRightSubTree = isSubTrees(root.right, subRoot);

  // assuming the recursion step solve the problem, i need to return if it is in the left or the right
  return isInLeftSubTree || isInRightSubTree;
}

// code implementation- to implement the recursion step, i need to check if this node equal until i get to null
function isEqual(node, subRootNode) {
  if (node === null && subRootNode === null) {
    return true; // we get here only if we did not have early return
  }

  if (node === null || subRootNode === null) return false;

  if (node.val !== subRootNode.val) {
    return false;
  }

  // check for other nodes
  // we need both of them return true
  // assume the recursion basiclly give us the right solution...
  // we only check of course, if we classfiy all the conditions otherwise we will return false
  return (
    isEqual(node.left, subRootNode.left) &&
    isEqual(node.right, subRootNode.right)
  );
}

function isBalanced(root) {
  // empty tree is balances
  if (root === null) return true;

  return isBalancedDfs(root);
}

function isBalancedDfs2(root) {
  if (root === null) {
    return 0;
  }

  // recursion step - compute left and child height
  // recursion step code implementaion - just go right, and check their heigts

  const leftNumOfNodes = isBalancedDfs(root.left);
  const rightNumOfNodes = isBalancedDfs(root.right);

  // return value - return true if it is balanced, othersiwer false
  // in code - return true if the height of the left and right are less than 1 in absolute value

  const maximumDepth = Math.max(leftNumOfNodes, rightNumOfNodes);

  // this is the height of this node
  const heightOfThisNode = Math.max(leftNumOfNodes, rightNumOfNodes) + 1;

  if (maximumDepth > 1) {
    return false;
  }

  return true;
}

// what is the idea - its a boolean question
// we need to have cases of:
// early return - the height is not balanced
// not early return - greate, continue looking

// early return - heigt is not balanced, so we return -1
// return value - return the height of the current tree
// if the value is not -1, it means it balanced, all good then,

// so what the idea of a boolean?

// you need to understand if there is an early return or not
// early return - when you found something you look for (if looking for something)
// or you found a bad option that give you false
// if not early return, we keep looking, so there is 2 options in boolean:

//1. looking for something specificly if exist, an early return will be good if we found, if not found we will keep looking
// if getting to null, than it means its not there, and we return false
// in this case, the worst case is to go all over the tree, it means we don't find something earlier

//2. needing to go all over the tree is a must - which means, we need to check all nodes of the tree
// for example, if all nodes of the tree is smaller than 50
// and early return it means that we found a bad option, so we will return false or any other variance from it
// if we continue looking it is good, if we get to null it means that we dont find something bad before, so we return true

// in short:
//1. found a good option so we return true and stop looking, if not found keep looking for a good option until hit null, than return false in null
//2. found a bad option and return false and stop looking, if not found keep looking for a bad option until hit null, than return true in null
function isBalanced(root) {
  return isBalancedDfs(root) === -1 ? false : true;
}
function isBalancedDfs(root) {
  if (root === null) {
    return 0;
  }

  const leftHeight = isBalancedDfs(root.left);
  // -1 means it not balanced
  if (leftHeight === -1) {
    return -1;
  }

  const rightHeight = isBalancedDfs(root.right);

  // early return
  if (rightHeight === -1) {
    return -1;
  }

  // now, they are not -1, right? so we need to check if it is balanced or not

  // this is the check for each tree if it is balanced
  // its a simple question, we need to check
  // recursion step - to compute if its balance, compute the height difference
  // return value - -1 if not balanced, otherwise the height

  // check here if the tree is balanced, if not return -1
  // each tree needs to return -1 or height, we have 2 return value, and -1 is the early return
  // here we first check if it is not balanced, otherwise we return the height
  if (Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  }

  // return the height of each current node
  return Math.max(leftHeight, rightHeight) + 1;
}

/// Same tree questio

function isSameTree(p, q) {}

// same tree?

// Time complexity : O(n) - we do a single traversal, not procesing each tree independetnly, so its not O(2n)
// space complexity: O(h) recursion stack - never more than h frames
function isSameTreeDfs(p, q) {
  if (p === null && q === null) {
    return true;
  }

  // one is null and one is not, bad case
  //looking for one bad case
  if (p === null || q === null) {
    return false;
  }

  // another bad case
  if (p.val != q.val) {
    return false;
  }

  // no bad case found, both equal, continue looking for another bad case or null
  const isLeftTreeEqual = isSameTreeDfs(p.left, q.left);
  const isRightTreeEqual = isSameTreeDfs(p.right, q.right);

  return isLeftTreeEqual && isRightTreeEqual;
}

// diamater of binary tree

// idea: at each time we visite a node - which is before doing the recursive call (this is the idea of dfs) -
// where you visite a node before the recursive calls
// the subtree tree, what you get after the recursive call - it return their height - the left subtree height and the right subtree height
// will be in the leftNumOfNodes and RightSumOfNodes
// so we just math.max between your currentmax and their sum of heights
// we dont need to do minus 1, becase they will return their number of nodes in that subtree
// and you will also be a node, so the +1 account you, so we dont need to reduce a node
function diameterOfBinaryTree(root) {}

let currentMax = 0;
function diameterOfBinaryTreeDfs(root) {
  if (root === null) {
    return 0;
  }
  // here we visit the node

  const leftNumOfNodes = diameterOfBinaryTreeDfs(root.left);
  const rightNumOfNodes = diameterOfBinaryTreeDfs(root.right);

  // here will be what the subtree returns you

  // my height
  // is the number of nodes from not included to me, to the heighest leaf
  // so leftNumOfNodes + rightNumOfNodes is the height of me
  currentMax = Math.max(currentMax, leftNumOfNodes + rightNumOfNodes);

  // this is the number of nodes from me to the futheest leaf
  // than, when i go to the next iteration, before adding 1, then in the current node
  // leffNumt of nodes + right num ofnodes is the height of the current node
  // adding height one, is going to be the height of my father, and it reperesnets the number of nodes from me to a leaf
  // so when you return +1, you return the number of nodes, not the height
  return Math.max(leftNumOfNodes, rightNumOfNodes) + 1;
}

// brute force solution:
// for each node finds its height using a routine to find its height using dfs
// than, do this for each node, do a dfs on each node
// so it will be O(n^2)
// beacuse before doing dfs for weach node we calculate height in a routine that takes O(n) for each node
// than we go to the next node, also does that rountine
// the diference here is that dfs dont call a new routine for each node
// it just traverse on his children
// we do a single traversal
// meaning, in the O(n^2), we go on each node, and do a routine that takes O(n), and we do that for n nodes
// in dfs, we dont do a rtouine, we just traverse it
