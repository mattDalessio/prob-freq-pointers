// add whatever parameters you deem necessary & write docstring
function averagePair(numbers, targetAvg) {


  const getAvg = avgNums(numbers, targetAvg);

}


//
/** helper function to traverse array from the ends to the middle */

function avgNums(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const avg = (nums[left] + nums[right]) / 2;
    if(avg===target){
      return true
    }
    else if (avg !==target) {
      right--;
    }
    if(left===right){
      right=nums.length-1
      left ++
    }
    return false

    }







  throw new Error("Pair not found");
}