function hasTargetSum(array, target) {
  // Write your algorithm here
  for (i=0;i<array.length;i++)
  {
    var num1=array[i];
    for (j=i+1;j<array.length;j++)
    {
      var num2=array[j];
      if (num1+num2 === target)
      {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Have to do a lot of addition to see if the array at some point equals the target. 
  Best way to do this is starting with the first element of the array and going down the line.
*/

/* 
  Add your pseudocode here
  for array length (ensures that every number is viewed)
  for array length add the second-nth numbers of array to find the target
  No reason to go through the whole array once its found so return true the instance the target is reached.

*/

/*
  Add written explanation of your solution here
  i just go through 2 for loops to add each number to find the target in the array.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
