/*
dfs:
return value:
1. What is the bigger problem i solve?
2. what is the same smaller problem i solve for each node/subtree? (this will be the return value)
    for the smaller problem - to be able to solve it, solve it on the example tree, and try to intuatively come up with the answer by the example
3. what do i need to return to my father in order for him to solve the problem? or in order for him to reutnr the corret answer
    //(i need to bring to my father.... the maximum depth so he can dedice the maximum depth betwen his children)
    // left side neeed to bring x, right side need to bring y, so father can decide the maximum depth
    // what i need to bring to my father so he can solve the problem?
4. assuming that the recursion step solve the problem and give me the good solution (maximum depth of a tree),
what do i need to return to my father?
    // (think in code - do you need to use Math.max? boolean? etc)
5. recursion step - what you acutaly do to compute the solution and give the good solution?
    (how you actually solve the problem, what you need to do?)
    -- should be before step 4 - this is actually what we need to do to compute the return value
    maybe not because we first needs to relaize the return value
6. code implementation - think on how to implement  the recursion step

    base case:
    - always needs to have a base case for if root === null
    1. what should i return if i get to null?



states:
1. what do i need to get from my father, to be able to solve the problem for me?
    - what do i need to get from my father to compute the return value? 
    what do i need to get to compute the solution for the smaller proble of me?
- (state is usualy for computation problem, not boolean / chaning the tree with operation)

visulaise:
1. pick a tree, and visualise - go frame by frame, and return values from there

boolean:
1. boolean question - if we found you will have a case for early return - no need to look
 2.  if we dont find, keep looking in the tree with the recursion step


 boolean template:
 1. bad case -> early return is false(if found bas case), otherwise continue looking for bad case and return ture if get to null
 2. good case -> early return is true, otherwise continue looking and return false if get to null

 early return comes before the recursion step


 some tips:
 1. the height of the root is the number of nodes from him to the longest leaf, not including him in the count
 so returning the maximum between the number of nodes from his left to the right is his height, and returning +1 will return the parent height


 some knoolwedge:
 1.O(n^2) - for each node we traverse the entire left and right sub treen, than recursivley do that for each node
    // so we first traverse on this node, than go to traverse on the left node and right node
    // so we traverse a lot of time, n times in the tree, for each node, so it will be a lot of repeated calcuaitonk

2. O(n) - you traverse each node once, you go on ecah node exactly once!
    imageine the call stack, you go on each node once, go to left sub tree and right sub tree traverse on each node once
    than when finish, we go up and never come back
    in regard to O(n^2), that we traverse ecah node multiple times we will reach him, here only once
*/
