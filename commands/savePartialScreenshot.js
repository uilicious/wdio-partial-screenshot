const cropAndSaveImage = require('../utils/cropAndSaveImage')
const base58guid = require("../utils/base58guid")

// Note: function name must be async to signalize WebdriverIO that this function returns a promise
 async function async(fileName, options){

	// Prepare variables
	let tmpName =  "/tmp/" + base58guid() + ".png";

	// Grab the current view of the browser
 	let windowDetails = await this.execute("return [ window.pageXOffset, window.pageYOffset, window.innerWidth, window.innerHeight];")

	let settings = {
		xOffSet: windowDetails.value[0],
		yOffSet: windowDetails.value[1],
		width : windowDetails.value[2],
		height: windowDetails.value[3]
	}

	// Save screenshot to temporary file
	await this.saveScreenshot(tmpName);

	// Crop image and save it
	await cropAndSaveImage(tmpName, fileName, settings);

	// Return arbitrary value
	return true;

}

module.exports = async;