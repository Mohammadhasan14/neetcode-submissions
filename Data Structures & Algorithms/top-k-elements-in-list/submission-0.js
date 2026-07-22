class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};

        for (const num of nums) {
            freq[num] = (freq[num] || 0) + 1;
        }

        return Object.entries(freq)
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(([num]) => Number(num));
    }
}

const sol = new Solution();

console.log(sol.topKFrequent([1,2,2,3,3,3],2)); // [3,2]