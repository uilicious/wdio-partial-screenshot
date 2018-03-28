const gm = require("gm")

// Crop the image to the respective width and height of the view port while offsetting the correct x and y coordinates
async function cropAndSaveImage(tmpFileName, pathName, options){
	try{

		return gm(tmpFileName)
			.crop(options.width, options.height, options.xOffSet, options.yOffSet)
			.write(pathName, (err) => {
				if(err){
					throw err;
				}
				// return an arbitrary value
				return true;
			})
	}catch(e){
		console.log(e)
	}

}

module.exports = cropAndSaveImage;