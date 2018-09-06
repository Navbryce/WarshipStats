webpackJsonp(["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/CSS/main-style.css":
/***/ (function(module, exports) {

module.exports = "\r\n#ship-gallery{\r\n\topacity: 0; /*Starts with a hidden opacity so it can fade in*/\r\n\t-webkit-transition: opacity .5s !important;\r\n\ttransition: opacity .5s !important; /*For some reason, the photo gallery plugin automatically removes all transitions. Thus, important is needed. */\r\n\twidth: 60%;\r\n\tmargin: auto;\r\n\r\n}\r\n#ships{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-ms-flex-wrap: wrap;\r\n\t    flex-wrap: wrap;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\tpadding-left: 5%;\r\n\tpadding-right: 5%;\r\n\twidth: 100vw;\r\n}\r\n#ships>div{\r\n\tmargin: 20pt;\r\n\tcursor: pointer;\r\n}\r\n#ships img{\r\n\t-o-object-fit: contain;\r\n\t   object-fit: contain;\r\n\twidth: 400px;\r\n\theight: 200px;\r\n\r\n}\r\n.active-tab{\r\n}\r\n.active-tab>a{\r\n\tbackground-color: #c19307 !important;\r\n}\r\n.allow-y-scroll{\r\n\toverflow-y: scroll;\r\n\twidth: 100%;\r\n}\r\n.content-of-selected-box{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-ms-flex-wrap: wrap;\r\n\t    flex-wrap: wrap;\r\n\theight: 100%;\r\n}\r\n.gallery-wrapper{\r\n\tpadding-top: 25px;\r\n\tmargin-bottom: 25px;\r\n\tbackground-color: rgb(35, 35, 35);\r\n\tborder-bottom: solid 2px rgba(200, 200, 200, 1);\r\n}\r\n.glass-pane{\r\n\tdisplay: block;\r\n\tcontent: '';\r\n\tposition: fixed;\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\ttop: 0px;\r\n\tleft: 0px;\r\n\tz-index: 1;\r\n}\r\n.icon-info-box{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n}\r\n.icon-info-box > div:first-child{\r\n\tmargin-right: 3%;\r\n}\r\n.icon-info-box img{\r\n\t-o-object-fit: contain;\r\n\t   object-fit: contain;\r\n\tmax-height: 200px;\r\n}\r\n.info-box p{\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n}\r\n.ship-content{\r\n\tpadding: 0pt;\r\n}\r\n.ship-header{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n}\r\n.ship-header-divider{\r\n\tdisplay: inline-block;\r\n\theight: 3px;\r\n\tcontent: '';\r\n\twidth: 100%;\r\n\tbackground-color: rgba(1, 74, 191, .7);\r\n\r\n}\r\n.ship-header-text{\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n}\r\n.ship-header-text h3{\r\n\tdisplay: inline-block;\r\n\twhite-space: nowrap;\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n}\r\n.ship-header-background{\r\n\tdisplay: block;\r\n\tposition: relative;\r\n}\r\n.selected-dialogue{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: end;\r\n\t    -ms-flex-align: end;\r\n\t        align-items: flex-end;\r\n\tposition: fixed;\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\ttop: 0px;\r\n\tleft: 0px;\r\n\tz-index: 100;\r\n}\r\n.selected-box{\r\n\tposition: relative;\r\n\tz-index: 2;\r\n\tbackground: rgba(20, 44, 81, 1);\r\n}\r\n.selected-box-main{\r\n\tbackground-color: white;\r\n\theight: 90vh;\r\n\twidth: 70vw;\r\n\tposition: relative;\r\n\tz-index: 2;\r\n}\r\n.selected-frame{\r\n\tposition: relative;\r\n\tz-index: 2;\r\n\tmargin: 20px;\r\n\tmargin-bottom: 0px;\r\n\r\n}\r\n.selected-box-header{\r\n\twidth: 100%;\r\n\tz-index: 2;\r\n\tposition: relative;\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n}\r\n.selected-box-header>h1{\r\n\tdisplay: inline-block;\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n}\r\n.selected-ship-tabs{\r\n\tmargin-left: auto;\r\n\tborder: none;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n}\r\n.metallic-text{\r\n\tbackground: -webkit-gradient(linear, left top, right top, from(#ada996), color-stop(#f2f2f2), color-stop(#dbdbdb), to(#eaeaea)) !important;\r\n\tbackground: linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea) !important;\r\n\t-webkit-background-clip: text !important;\r\n\t-webkit-text-fill-color: transparent !important;\r\n}\r\n.title-font{\r\n\tfont-family: 'Russo One', sans-serif;\r\n}\r\n.selected-box-stats{\r\n\tmin-width: 300px;\r\n\t-webkit-box-flex: 1;\r\n\t    -ms-flex: 1;\r\n\t        flex: 1;\r\n\twidth: 50%;\r\n\r\n}\r\n.selected-box-info{\r\n\tmin-width: 300px;\r\n\twidth: 50%;\r\n\t-webkit-box-flex: 1;\r\n\t    -ms-flex: 1;\r\n\t        flex: 1;\r\n\theight: 100%;\r\n\tpadding-top: 2%;\r\n\toverflow-y: scroll;\r\n\tborder-left: solid 2px rgba(200, 200, 200, 1);\r\n\r\n}\r\n.info-section{\r\n\tpadding-left: 2%;\r\n\tpadding-right: 2%;\r\n\tpadding-bottom: 20px;\r\n\r\n}\r\n.blue-underline{\r\n\ttext-decoration: underline;\r\n\t-webkit-text-decoration-color: rgba(1, 74, 191, .7);\r\n\t        text-decoration-color: rgba(1, 74, 191, .7)\r\n}\r\n.selected-box-shipimg{\r\n\twidth: 400px;\r\n\theight: 300px;\r\n\t-o-object-fit: contain;\r\n\t   object-fit: contain;\r\n}\r\n.tab-1{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n}\r\n.tab-1>div{\r\n\tmin-width: 200px;\r\n\t-webkit-box-flex:1;\r\n\t    -ms-flex:1;\r\n\t        flex:1;\r\n}\r\n.tab-1{\r\n\tpadding-top: 2%;\r\n}\r\n.info-box{\r\n\tmargin: 2px;\r\n\tpadding: 2%;\r\n\tborder-bottom: solid 2px rgba(200, 200, 200, 1);\r\n}\r\n.visualization-button{\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\tfloat: right;\r\n}\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Roboto');\r\n@import url('https://fonts.googleapis.com/css?family=Russo+One');\r\napp-navbar {\r\n\tz-index: 3;\r\n}\r\napp-root {\r\n\tz-index: 0;\r\n}\r\nbody{\r\n\tfont-family: 'Roboto', sans-serif;\r\n\tbackground-color: white;\r\n\tcolor: black;\r\n\toverflow-x: hidden;\r\n\r\n}\r\nfooter{\r\n\tmargin-top: 300px;\r\n\twidth: 100%;\r\n\theight: 300px;\r\n\tbackground:  -webkit-gradient(linear, right top, left top, from(rgba(1, 74, 191, 1)) , to(rgba(20, 44, 81, 1)));\r\n\tbackground:  linear-gradient(to left, rgba(1, 74, 191, 1) , rgba(20, 44, 81, 1));\r\n\tposition: relative;\r\n\tz-index: 0;\r\n}\r\nnav{\r\n\tposition: relative;\r\n}\r\n#background{\r\n\ttop: 0px;\r\n\tleft: 0px;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tz-index: 0;\r\n\tdisplay: block;\r\n\tcontent: '';\r\n\tposition: absolute;\r\n}\r\n#background::after{\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttop: 0px;\r\n\tleft: 0px;\r\n\tz-index: 1;\r\n}\r\n#content{\r\n\tposition: relative;\r\n\tz-index: 0;\r\n\tpadding-top: 250px;\r\n\r\n}\r\n#ship-graph > svg { /* If I choose to not use the WebGL renderer */\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n.brand-wrapper{\r\n\tmargin-bottom: 20px;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\tpadding-bottom: 30px;\r\n}\r\n.credits {\r\n\tbottom: 0;\r\n\tfont-size: 20pt;\r\n\tposition: absolute;\r\n\r\n\r\n}\r\n.footer-content{\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\theight: 100%;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\tz-index: 2;\r\n}\r\n.load-wrapper {\r\n\tposition: fixed;\r\n\tz-index: 500;\r\n}\r\n.not-dialogue{\r\n\r\n}\r\n.wrapper-background{\r\n\tdisplay: block;\r\n\ttop: 0px;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tz-index: 1;\r\n\tbackground-image: URL(\"/Pictures/Backgrounds/pixelate.png\");\r\n}\r\n.wrapper-content{\r\n\tz-index: 2;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\tposition: relative;\r\n\tpadding-top: 20px;\r\n\tbackground: -webkit-gradient(linear, right top, left top, from(rgba(1, 74, 191, 1)) , to(rgba(20, 44, 81, 1)));\r\n\tbackground: linear-gradient(to left, rgba(1, 74, 191, 1) , rgba(20, 44, 81, 1));\r\n}\r\n.wrapper-content>img{\r\n\tposition: relative;\r\n\tz-index: 2;\r\n\twidth: 75px;\r\n\tmin-height: 50px;\r\n\t-o-object-fit: contain;\r\n\t   object-fit: contain;\r\n}\r\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/CSS/main-style.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/CSS/main-style.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/raw-loader/index.js!../../node_modules/postcss-loader/lib/index.js??embedded!./main-style.css", function() {
			var newContent = require("!!../../node_modules/raw-loader/index.js!../../node_modules/postcss-loader/lib/index.js??embedded!./main-style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css", function() {
			var newContent = require("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/styles.css");
module.exports = __webpack_require__("./src/CSS/main-style.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map