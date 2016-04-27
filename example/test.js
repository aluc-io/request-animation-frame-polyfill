var rafUC = require('../raf-uc.js');

var stateList = [{pos: 0}];

function step() {

	console.log( 'hi' );

	var lastState = stateList[ stateList.length-1 ];
	newPos = lastState.pos+1;
	stateList.push({ pos: newPos });

	if( newPos < 10 ) {
		
		rafUC.raf( step );

	} else {

		console.log('count hi: ' + stateList.length );
		console.log( stateList );
	}
}

rafUC.raf( step );
