# Objects as Arguments Practice

## Set up:
1. `clone` down the repo
2. `cd` into the repo's root directory
3. run `npm install`
4. run `npm test` to run tests

There are multiple test files available for practice. 
- complete the warm up exercises before moving to the boardGames class.


NOTES FROM DANI 07/29
I found the General-tests to be activating andn thoughtful. they really did teach me how to reconceptualize my understanding about calling on functions without the use of class.

The filter Scores was my favorite, as whoever created the tests forgot to remove the numbers less than 70 during the assertion tests. so we had to remove those manually in order for this test to make sense. we also used bracket notation for this example and learned that you can access an array while using bracket notation, as shown below

if(scores[subject][i] >= 70){
      // scores.splice(i, 1);
      // i--;
      //there will be times when we'll need to mutate the original array
      newContainer.push(scores[subject][i]);

line 21 takes note of Jeremiahs use of splic and decrementing the var i by 1 because decrementing this will reset the i counter to go back one to where it was counting, because splice shift things around while still iterating through the for loop in the array.