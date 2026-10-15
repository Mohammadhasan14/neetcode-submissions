class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let intialLeft = 1;
        let result = []

        for (let i=0; i<nums.length; i++){
            result[result.length] = intialLeft
            intialLeft *= nums[i]
        }
        let intialRight = 1;
        for (let j=nums.length-1; j >= 0; j--){
            result[j] = intialRight * result[j];
            intialRight *= nums[j]
        }

        return result;
    }
}
