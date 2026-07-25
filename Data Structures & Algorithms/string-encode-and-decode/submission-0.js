class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";

        for (let str of strs) {
            result += str.length + "#" + str;
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            // Find the '#' that separates length and string
            let j = i;

            while (str[j] !== "#") {
                j++;
            }

            // Extract the length
            const length = Number(str.slice(i, j));

            // Move to the beginning of the actual string
            j++;

            // Extract exactly 'length' characters
            result.push(str.slice(j, j + length));

            // Move to the next encoded string
            i = j + length;
        }

        return result;
    }
}