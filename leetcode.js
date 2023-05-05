let nums = [2, 7, 11, 15];
let target = 9;

function twoSum(nums, target) {
  const complementMap = new Map();
  console.log(complementMap);
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complementMap.has(complement)) {
      console.log(complementMap.has(complement), i);
      console.log('=>', complementMap.get(complement), i);
      return [complementMap.get(complement), i];
    }
    console.log('complementMap', complementMap);

    complementMap.set(nums[i], i);
    console.log(
      ' complementMap.set(nums[i], i)',
      complementMap.set(nums[i], i)
    );
    console.log('complementMap', complementMap);
  }

  // Return empty array if no solution found
  return [];
}

console.log(twoSum(nums, target));
