class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let productLeft = []
        let intialLeft = 1;
        let result = []

        for (let i=0; i<nums.length; i++){
            productLeft[productLeft.length] = intialLeft
            intialLeft *= nums[i]
        }
        let productRight = []
        let intialRight = 1;
        for (let j=nums.length-1; j >= 0; j--){
            productRight[j] = intialRight
            result[j] = productRight[j] * productLeft[j];
            intialRight *= nums[j]
        }

        return result;
    }
}