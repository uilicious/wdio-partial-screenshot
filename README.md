# wdio-partialscreenshot
This is a WebdriverIO extension to take partial screenshot.

# Installation
```
$ npm install wdio-partialscreenshot
```

# Configuration
### NodeJS
```javascript
	let config = {
		desiredCapability : {
			"browserName": "Safari",
			"version"    : "11",
			"platform"   : "HIGH-SIERRA"
		}
		host              : "127.0.0.1",
		port              : 4444, 
		protocol          : "http",
		path              : "/wd/hub"
	}
	
	// initialize webdriver
	this.webdriver = require("webdriverio").remote(config);

	// calls module to add command to webdriver
	require("wdio-partialscreenshot").init(this.webdriver);
```

# Functionality

This module adds in an additional command to webdriver
 - savePartialScreenshot(fileName, [{options}]) 
 
```javascript
	this.webdriver.savePartialScreenshot("/path/to/save/image");
```

Some browsers' current implementation takes entire web page rather than just the current viewport when screenshot function is called.

Hence, in order to save only the current viewport of the browser, GraphicsMagick is used in this function's implementation.

The end result of the function would be an image that contains only the current visible area in the browser.

# Browsers Tested

- `Safari 11` on `High-Sierra`

# Installing GraphicsMagick
Without GraphicsMagick, this extension will fail to work as it requires GraphicsMagick to process the images.

Mac OS X using Homebrew
```
$ brew install graphicsmagick
```
Ubuntu
```
$ sudo apt-get install graphicsmagick
```