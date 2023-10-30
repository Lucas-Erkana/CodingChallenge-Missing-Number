var missingNumber = function(nums) {
    const n = nums.length;
const expectedSum = (n * (n + 1)) / 2; // Step 1
const actualSum = nums.reduce((sum, num) => sum + num, 0); // Step 2
return expectedSum - actualSum; // Step 3
};

console.log(missingNumber([3,0,1])); // Output: 2