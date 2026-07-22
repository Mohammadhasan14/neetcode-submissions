class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {}
        for (let i =0; i <nums.length; i++){
            obj[nums[i]] = (obj[nums[i]] || 0) + 1
        }
        let result = [];
        const sortedArr = Object.entries(obj).sort((a,b) =>  a[1] -b[1])
            for (let i = sortedArr.length-1; i>=0; i--){
                if (result.length <k){
                    result[result.length] = Number(sortedArr[i][0])
                }
            }
        return result;
    }
}