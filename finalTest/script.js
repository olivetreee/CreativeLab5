/*Call finalTest() with a function of your own that returns the closest Google logo color hex for any hex given."),void i("For example, for #FF7BAC, it should return #EA4235. Make sure to accept and return uppercase hex.

What are the Google colors?
#4285F4 - blue
#34A853 - green
#FBBC05 - yellow
#EA4335 - red

Object with all Google Colors;
Object with all differences between GC and WC;

	$("#test").text(closestColor + ' (diff = ' + colorDiff[indexClosestColor] + ')');
	

	$(".wanted-color").css("background-color",color);
	$(".google-color").css("background-color",closestColor);
	


*/



function checkColor(color) {

// WHEN SUBMITTING, REMOVE THIS 'IF'
if ((color.search('#')==0 && color.length==7) || (color.search('#')==-1 && color.length==6)) { // Execute only when color has been input correctly
		
	
	var color = color.toUpperCase();	//make sure all is capital
	
	var colorsGoogle = [ //name, hex_value, red_decimal, green_decimal, blue_decimal
		['#4285F4', 66, 133, 244],
		['#34A853', 52, 168, 83],
		['#FBBC05', 251, 188, 5],
		['#EA4235', 234, 67, 53],
	];
		
	function convertColorWanted(c) {

		c = c.substring(0,1) == '#' ? c.substring(1,c.length) : c; //remove the # symbol
//		c = c.length === 3 ? c.substring(0,1).repeat(2) + c.substring(1,2).repeat(2) + c.substring(2,3).repeat(2) : c; //converts compact hex into full hex

		return [
			c,
			parseInt('0x'+c.substring(0,2),16),
			parseInt('0x'+c.substring(2,4),16),
			parseInt('0x'+c.substring(4,6),16)
			];		
	};

	var colorWanted = convertColorWanted(color);

	function calcDiff(cG, cW) {
		var diff = [];
		for (var i = 0; i<4; i++) {
		diff[i] = Math.sqrt(
			Math.pow((cG[i][1]-cW[1]),2) + //square R
			Math.pow((cG[i][2]-cW[2]),2) + //square G
			Math.pow((cG[i][3]-cW[3]),2) //square B						
		);
	};
		
		return diff;
		
	};

	var colorDiff = calcDiff(colorsGoogle, colorWanted);
	
	var indexClosestColor = colorDiff.indexOf(Math.min(...colorDiff));
	
	var closestColor = colorsGoogle[indexClosestColor][0];
	
	
	//WHEN SUBMITTING, REMOVE FROM HERE...
	$('.wanted-color').css('background-color', '#'+colorWanted[0]);	
	$('.google-color').css('background-color', closestColor);
	$('#closest-to span').text(closestColor);
	//...UNTIL HERE
	
	return closestColor;
	
};
	
}