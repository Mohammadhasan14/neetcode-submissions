class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (!strs.length){
            return "empty_array"
        }
        if (strs.length == 1 && strs[0] == ""){
            return "empty_quotes"
        }
        const data = strs.join("!2e")
        return data
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str == "empty_array"){
            return []
        }
        if (str == "empty_quotes"){
            return [""]
        }
        const data = str.split("!2e")
        return data
    }
}