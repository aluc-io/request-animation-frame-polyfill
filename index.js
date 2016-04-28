/**
 * Thanks for following 
 * requestAnimationFrame polyfill by Erik Möller & Paul Irish et. al.
 * https://gist.github.com/1866474
 * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
**/

/**
 *	(c) 2015 Alfred UC
 *	raf-uc may be freely distributed under the MIT license.
 *	For all details and documentation:
 *	https://github.com/b6pzeusbc54tvhw5jgpyw8pwz2x6gs/raf-uc
**/

/*jshint asi: false, browser: true, curly: true, eqeqeq: true, forin: false, newcap: true, noempty: true, strict: true, undef: true */

(function( factory ) {

	'use strict';

	// We use `self` instead of `window` for `WebWorker` support.
	var root = (typeof self == 'object' && self.self == self && self) ||
			(typeof global == 'object' && global.global == global && global);

	// Set up raf-uc appropriately for the environment. Start with AMD.
	if (typeof define === 'function' && define.amd) {

		define(['exports'], function(exports) {
			// Export global even in AMD case in case this script is loaded with
			// others that may still expect a global rafUC.
			root.rafUC = factory( root, exports );
		});

	// Next for CommonJS.
	} else if (typeof exports !== 'undefined') {
		factory( root, exports );

	// Finally, as a browser global.
	} else {
		root.rafUC = factory( root, {} );
	}

}( function( root, exports ) {

	'use strict';
	
	var previousRafUC = root.rafUC;
	exports.noConflict = function() {
		root.rafUC = previousRafUC;
		return this;
	};

	var lastTime = 0;
	var prefixList = 'webkit moz ms o'.split(' ');
	// get unprefixed rAF and cAF, if present
	var requestAnimationFrame = root.requestAnimationFrame;
	var cancelAnimationFrame = root.cancelAnimationFrame;
	// loop through vendor prefixList and get prefixed rAF and cAF
	var prefix;
	for( var i = 0; i < prefixList.length; i++ ) {
		if ( requestAnimationFrame && cancelAnimationFrame ) {
			break;
		}
		prefix = prefixList[i];
		requestAnimationFrame = requestAnimationFrame || root[ prefix + 'RequestAnimationFrame' ];
		cancelAnimationFrame  = cancelAnimationFrame  || root[ prefix + 'CancelAnimationFrame' ] ||
		root[ prefix + 'CancelRequestAnimationFrame' ];
	}

	// fallback to setTimeout and clearTimeout if either request/cancel is not supported
	if ( !requestAnimationFrame || !cancelAnimationFrame ) {

		requestAnimationFrame = function( callback ) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
			var id = root.setTimeout( function() {
				callback( currTime + timeToCall );
			}, timeToCall );
			lastTime = currTime + timeToCall;
			return id;
		};

		cancelAnimationFrame = function( id ) {
			root.clearTimeout( id );
		};
	}

	// put in global namespace
	root.requestAnimationFrame = requestAnimationFrame;
	root.cancelAnimationFrame = cancelAnimationFrame;

	exports.raf = requestAnimationFrame;
	exports.caf = cancelAnimationFrame;

	return exports;
}));
