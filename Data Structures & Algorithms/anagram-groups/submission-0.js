class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let obj = {}
     
        for (let i = 0; i<strs.length; i++) {
            let isMatchedKeyPresent = false;
            for (const objK in obj) {
                 if (strs[i].length === objK.length){
                        const str1 = objK;
                        const str2 = strs[i];
                        const sorted1 = str1.split("").sort().join("");
                        const sorted2 = str2.split("").sort().join("");
                        if (sorted1 == sorted2){
                            isMatchedKeyPresent = true
                            obj[objK] = [...obj[objK],strs[i]]
                        }
                }
            }
            if (!isMatchedKeyPresent){
                obj[strs[i]] = [strs[i]]
            }
        }
        const newArr = []
        Object.entries(obj).forEach(([key,value]) => {
            newArr.push(value)
        }) 
        return newArr
    }
}
