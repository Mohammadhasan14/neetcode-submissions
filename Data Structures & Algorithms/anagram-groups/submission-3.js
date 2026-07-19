class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const obj = {}
        
        for (const word of strs){
            
            const key = word.split("").sort().join()
            
            if (!obj[key]){
                obj[key] = []
            }
            
            obj[key].push(word)
        }
        
        return Object.values(obj)
    }
}