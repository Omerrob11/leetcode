/*

the idea of hashing - 
is to think about:
1. what should be the key
2. what should be the value 
that help us answer the question.

3. if we need efficient lookup


to undestand patterns:
- you really need to think about the question and the idea, and why this is the correct pattern to use


brute force:
- brute force solution should give you hints on how to solve the problem


Time complexity:
- the idae is that - if at most we iterate each element once, its O(n) overall
// outer loop - iterate over the set
// inner loop each number checked only once across all iterations - meaning, over the entire execution
// innter loop will run at tmost n times for all nnumbers, not n times for each iteartion of the outer loop
// so the inner loop in general will do O(n) work, so we need to add O(n) work to what ever the end result give us


// the idea - if inner loop does total of O(n) work, we just add it to the end result
*/
