/*

tips:
- usualy on a sorted array, we should use 2 pointers
    in contrast to hashing, which we usualy use for strings and non sorted arrays
- usualy without extra memory, we cant use hashing. as hashing i O(n) extra memory, so its binary earch (when seraching) or 2 pointers
- palindrom - usualy involved in 2 pointers, because we need to iterate from both side - 
    compare to hashing, where the order does not matter!

    linked lists:
    - usualy invloved a while loop!


how to know if it is a 2 pointer?
    - if you have more than one right answer but you look for the optimal one
    - its 100% not a hash map

when to use:
1. sorted array
2. O(1) space complexity
3. in place operation
4. palindroms
5. sliwiding window
6. linked lists for cycle detection
7. has to be in that order - for example, trapped between 2 indixes
    for hash map - if position is crucial, you cant use itt



hash map:
1. quick lookups
2. freuqiences
3. looking for complements/paris in unsorted data
4. can use extra space
5


template:
1. decide that it is a 2 pointer problem
2. decide on who to advance when
3. try both opposite / same direction and see which one you miss oppritunities
unicode:
    1. assign a uinque number for each characters
    2. so we have a unicode, we assign a unique code to it, and convert it to decimal using charCodeAt()

    A-Z: 65-90

    a-z: 97 - 122



opposite direction vs non opposite:

opposite:
    1. when its sorted - than, it is easier to know which pointer to move
    2. when the next best possibillity / or to get the next possibillity,
    you can only solve it in opposite direction

    if you can't get to the next solid oppritunity that solve the problem in opposite or same direction, 
    than its the other way arround
*/
