/**
 * Returns a base58 string
 * @param n Desired length of the string. Defaults to 22.
 * @return {string}
 */
function  base58guid(n = 22) {

	let base58 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".split("")
	let result = ""
	let char
	while (result.length < n) {
		char = base58[Math.random() * 57 >> 0]
		if (result.indexOf(char) === -1) {
			result += char
		}
	}
	return result

}

module.exports = base58guid
