/*

- preforming on the entire interval between the two pointers instead 2 positions
- keep track of the result
- insert /remove an item, manipulate the result to the window
- function that check the values (ths one inside the if statment) - instead check 2 positions, check all the window

idetntify:

- sub arrays / sub strings
- when you need somthing consecutive
- something consectuive + more than one result
- find the longest subarray/subbstring ( consecutive) -> dynamic longest
- find the smallest subbarrray/substring (consectuive) -> dynamic, shortest


fixed size:
- start with the inital window
- we will look for the optimal solution


string work:

- can be done with objects
- or array size 26 - a lot of time of more convienet to do array of size 26

min dynamic tamplate:
- window  is not valid at first
- once we reach a valid window
- remove all elements from the left until we get to a non valid window again

dynamic tempalte:
 the idea of a valid substring/subarray - is if we find an invalid window at certain start index
 it will be invalid for that index from the point we found
 and between the start index and the end index
 there might be more invalid oppritunities 
 so we need to check for the next valid start index between the current start and the end of the window
 so we loop until we found the next valid start index
 and then, we check for dynamic window at the new start
*/
