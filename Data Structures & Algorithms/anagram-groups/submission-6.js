class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const obj = {}

        for (const str of strs) {
            
            const key = str.split("").sort().join("")

            if (!obj[key]){
                obj[key] = []
            }

            obj[key][obj[key].length] = str
        }

        return Object.values(obj)
    }
}
