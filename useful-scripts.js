/* REMOVE ANGLE HANDLES FROM SHAPE */
var elmt = Rena.keyframes[0].state;
	for (i = 0; i < elmt.handleIn.length; i++) { 
	    elmt.handleIn[i].x = 0;
			elmt.handleIn[i].y = 0;
	};
	for (i = 0; i < elmt.handleOut.length; i++) { 
	    elmt.handleOut[i].x = 0;
			elmt.handleOut[i].y = 0;
	};
	
	
/* CREATE KEYFRAME FOR GROUP */
/* MUST NAVIGATE TO DESIRED FRAME FIRST */
	var group = caps;
	for (i=0; i < group.length; i++) {
	group[i].strokeWidth(0);
	};	

/* TRANSLATE ALL ELEMENTS OVER AN AXIS BY N PIXLES ON I KEYFRAME */
	var N = 100;
	for (j = 0; j < all.shapes.length; j++) {
		for (i = 0; i < all.shapes[j].keyframes[1].state.point.length; i++) { 
			all.shapes[j].keyframes[1].state.point[i].y += N;
		}
	};
	
/* TRANSLATE ALL ELEMENTS FROM A GROUP OVER AN AXIS BY N PIXLES ON I KEYFRAME */
	var N = 100;
	var group = shades_1;
	var k = 0;
	for (j = 0; j < group.length; j++) {
		for (i = 0; i < group[j].keyframes[k].state.point.length; i++) { 
			group[j].keyframes[k].state.point[i].x += N;
		}
	};	
	
/* TRANSLATE ONE ELEMENT OVER AN AXIS BY N PIXLES ON I KEYFRAME */
	var names = [
	Marc,
	Willie,
	Francis,
	Lilly,
	Christian,
	Scott,
	Ivan,
	Estella,
	Edith,
	Lester,
	Henry,
	Lula,
	Dale,
	Beulah,
	Kyle,
	Carlos,
		Adeline];
	var n = 349.2;
	for (j = 0; j < names.length; j++) {
		for (i = 0; i < names[j].keyframes[0].state.point.length; i++) { 
			names[j].keyframes[0].state.point[i].x += n;
		};
	};	
	
	
/* MOVE THE WHOLE STRUCTURE, MINUS BASE, BY N PIXELS */
	var n = 349.2;
	for (k = 0; k < structure.length; k++) {
		for (j = 0; j < structure[k].length; j++) {
			for (i = 0; i < structure[k][j].keyframes[0].state.point.length; i++) { 
				structure[k][j].keyframes[0].state.point[i].x += n;
			};
		};		
	};

/* APPROX CENTER COORDINATES OF GOOGLE LOGO */
	G = (460, 244);
	O = (570, 280);
	O = (645, 280);
	G = (715, 280) , (715, 350);
	L = (768, 280);
	E = (812, 272);


/* NEW SESSION */
	helloWorld();
	hint();
	puzzle();
	document.getElementById('rabbit').className += 'turtle';
	weird();
	decode('Y3JlYXRpdmVsYWI1LmNvbS9yYWJiaXRob2xl');	
	activatePen(104743);
	finalTest(function checkColor(color) {
	
	var color = color.toUpperCase();	//make sure all is capital
	
	var colorsGoogle = [ //name, hex_value, red_decimal, green_decimal, blue_decimal
		['#4285F4', 66, 133, 244],
		['#34A853', 52, 168, 83],
		['#FBBC05', 251, 188, 5],
		['#EA4235', 234, 69, 53],
	];

	function convertColorWanted(c) {

		c = c.substring(0,1) === '#' ? c.substring(1,c.length) : c; //remove the # symbol
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
	
	
	return closestColor;
	
});