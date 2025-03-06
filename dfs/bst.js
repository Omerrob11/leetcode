function validBst(root) {
  return validBstDfs(root, -9999999, 99999999);
}

function validBstDfs(root, min, max) {
  if (root === null) {
    return true;
  }

  if (root.val < min || root.val > max) {
    return false;
  }

  // it must be for every one - everyone sohuld be smaller than the current node
  // if they go left
  // so we need to update it

  const left = validBstDfs(root.left, min, root.val);
  const right = validBstDfs(root.right, root.val, max);

  // let the recursion do its thing
  // think about it there is only one node ok
  // and the recurion does it things
  // so you basically think of it like a tree of 3 and there is not recursion
  //   1. what you need to check
  // 2. and check if
  return left && right;
  // are you a valid bst.
}

// template:
// 1. return value - what i need to return
// for boolean: if the condition is not met, you need to return false
// so you need to check for the condition, if its not met, return false
// otherwise, continue check in your sube trees
// and return both of them with && or || , depends on the questions
// so in boolean, we have a different template, where we might need to check the current node
// see if its valid
// and continue the recursion only if valid

// so the tample for boolean?
// 1. if condition not met - return false
// 2. if contidtion met, than the condition met for this node
// so - let the recursion do its thing, and continue check for your sons.
// so you will go to the next node, and once again, it will check for it

// template:
// 1. declare the problem in big :"insert to bst"
// 2. declrate the problem in small :"check if i need to insert now"
function insertBst(bst, val) {
  if (bst === null) return new Node(val, null, null);

  return insertBstDfs(bst, val);
}

function insertBstDfs(root, val) {
  if (root.val < val && root.right === null) {
    root.right = new Node(val, null, null);
    return root;
  }

  if (root.val > val && root.left === null) {
    root.left = new Node(val, null, null);
    return root;
  }

  if (root.val < val) {
    // we must return it because its a frame on the stack
    return insertBstDfs(root.right, val);
  } else {
    // also, we must return a root, and here, each time we return a root
    return insertBstDfs(root.left, val);
  }
}

function insertBstDfs2(root, val) {
  // getting the result as a child reference, and return the current node

  if (root === null) {
    return new Node(val, null, null);
  }

  // we do something, each time
  //   look for a "do something pattern"
  if (val < root.val) {
    // we return the node, each time, so we will go on one track
    // and return the node, so we bascilly simplify
    root.left = insertBstDfs2(root.left, val);
  } else if (val > root.val) {
    root.right = insertBstDfs2(root.right, val);
  }
  //   return value
  // return the current node
  // so at the end, we will return each node to his father
  // and left with the parent node
  return root;
}

function getMin(q, p) {
  if (q.val > p.val) {
    lcaOnBstDFS(p, q);
  } else {
    lcaOnBstDFS(q, p);
  }
}

function lcaOnBst(bst, p, q) {
  // base case empty tree
  if (bst === null) return null;
  if (q.val > p.val) {
    return lcaOnBstDFS(bst, p, q);
  } else {
    return lcaOnBstDFS(bst, q, p);
  }
}

function lcaOnBstDFS(bst, min, max) {
  if (bst === null) return null;

  // case1: im the lca
  // ***** early return - all the frames will return this *****
  // *** also - you must use an example, and use the frame to help you solve those questions ***
  // in bst, we ofetn use cases
  // otherwise, continue, and we will return from the bext one

  if (bst.val >= min.val && bst.val <= max.val) {
    return bst;
  }

  // case2: lca in the right side

  if (bst.val < min.val) {
    return lcaOnBstDFS(bst.right, min, max);
  } else {
    return lcaOnBstDFS(bst.left, min, max);
  }

  // 1. return the lca
}

/*
Summary dfs:
1. recursion  in boolean-
  - in case we have an early return, usualy when we have cases and we return some node
  - than the early return, basiclly means, that we found what we were looking for / OR find an error
  - and we return this or the error, and this will be return in the stack
  - so its basiclly boils down to a boolean questions:
    - is exist
    - find the first
    ther are all boolean, and we have early returns, where if we found an early return
    all the frames will return this
    other wise continue searching, until we find an early return
    and then again, all those stuff return the early return once find
    or null if not found.
  an early returns means - we might not check everything or all the "מסלול"

  else - we continue in the recursion, look for the value where we need to look on
  - it could be only on right sub tree, or left sub tree, or go do the recursion in both.

  so the state will be - what we need to solve it - think of a tree of 1
  and return - what i need to return so the root tree will solve it - think of a root of 3, and you are a child

  
tips - create the call stack in your mind


TODO: go over all the stuff you said, and bring it into the summary



*/
