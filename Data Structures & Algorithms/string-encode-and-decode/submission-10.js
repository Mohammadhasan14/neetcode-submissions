class Solution {
    encode(strs) {
        let encoded = "";
        for (let i = 0; i < strs.length; i++) {
            encoded = encoded + strs[i].length + "#" + strs[i];
        }
        return encoded;
    }

    decode(str) {
        let result = [];
        let i = 0;
        let count = 0
        while (i < str.length) {
            console.log("count...................................................",count)
            
            let lengthString = "";
            console.log("1st lengthString: ",lengthString," i: ",i)

            while (str[i] !== "#") {
                console.log("str[i].....",str[i])
                lengthString += str[i];
                i++;
            }
            console.log("2nd lengthString: ",lengthString," i: ",i)

            let length = Number(lengthString);

            i++;

            let word = "";

            for (let j = 0; j < length; j++) {
                word += str[i];
                i++;
            }
            console.log("3rd lengthString: ",lengthString," i: ",i)
            result.push(word);
            count++
        }

        return result;
    }
}