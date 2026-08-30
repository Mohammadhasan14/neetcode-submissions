class Solution {
    productExceptSelf(nums) {

        const result = new Array(nums.length)

        let data = 1

        for (let i = 0; i < nums.length; i++) {
            result[i] = data
            data = data * nums[i]
        }

        data = 1

        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] = result[i] * data
            data = data * nums[i]
        }

        return result
    }
}