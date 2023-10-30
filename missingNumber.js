var missingNumber = function(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0); 
    return expectedSum - actualSum;

};

console.log(missingNumber([3, 0, 1])); // expected result 2
console.log(missingNumber([0, 1])); // expected result 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // expected result 8
console.log(missingNumber([1, 2, 3, 4, 5])); // expected result 0
console.log(missingNumber([10, 8, 6, 7, 9, 5, 0, 4, 3, 2])); // expected result 1


module.exports = missingNumber;