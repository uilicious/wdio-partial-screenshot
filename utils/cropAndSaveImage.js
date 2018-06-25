const gm = require("gm")

// Crop the image to the respective width and height of the view port while offsetting the correct x and y coordinates
function cropAndSaveImage(tmpFileName, pathName, options) {
	try {

		return new Promise((resolve, reject) => {
			gm(tmpFileName)
			.crop(options.width, options.height, options.xOffSet, options.yOffSet)
			.write(pathName, (err) => {
				if (err) {
					reject(err);
				}
			resolve(true);
		})
	});

	} catch (e) {
		console.log(e)
	}

}

module.exports = cropAndSaveImage;