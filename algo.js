// 46. Permutations

// Given an array "nums" of distinct integers, return all the possible permutations. 
// You can return the answer in any order.





/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let results = [];

    function backtrack(start, end) {
        if (start === end) {
            results.push([...nums]);
            return;
        }
        for (let i = start; i < end; i++) {
            // Swap the current element with the start element
            [nums[start], nums[i]] = [nums[i], nums[start]];
            // Recurse for the next position
            backtrack(start + 1, end);
            // Backtrack (swap the elements back)
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }

    backtrack(0, nums.length);
    return results;
};
