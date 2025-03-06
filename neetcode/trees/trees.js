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
