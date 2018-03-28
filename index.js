const savePartialScreenshot = require('./commands/savePartialScreenshot')

class WDIOSafariExt{
	constructor(webdriverInstance, options){
		if(!webdriverInstance){
			throw new Error("A WebdriverIO instance is required for this module.");
		}
		// Add the command to the webdriver instance
		webdriverInstance.addCommand("savePartialScreenshot", savePartialScreenshot);
	}
}

module.exports = {
	init: function (webdriverInstance, options){
		return new WDIOSafariExt(webdriverInstance, options);
	}
}