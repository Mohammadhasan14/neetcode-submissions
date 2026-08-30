class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""
        for (let str of strs) {
            result += str.length + "#" + str
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = []
        // console.log("str.length",str.length)
        for (let i =0; i<str.length; i++){
            // console.log("hdhdhdhdhdhdhdhdhdhdhdhdhdhdhdh",i)
            // console.log("str initial",str[i])
            let isHashfound = false 
            let totalStr = "";
            let retry = 1
            while (!isHashfound){
                // console.log("str[retry]",str[retry])
                if (str[i + retry] == "#") {
                    isHashfound = true
                    for (let ic =0; ic<retry;ic++){
                        totalStr += str[i+ic]
                    }
                } else {
                    retry++    
                }
                
            }
            // console.log("retry",retry)
            // console.log("totalStr",totalStr)
            let processStr = ""
            for (let j = 0; j < Number(totalStr); j++){
                processStr += str[i + retry + 1 + j]
            }
            // console.log("next phase", Number(i+retry+Number(totalStr)))
            i = Number(i + retry + Number(totalStr))
            result[result.length] = processStr
            // console.log("result",result)
        }
        return result
    }
}