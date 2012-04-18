/*
* The Controlles Class
*/
var Controlles = function() {}

Controlles.prototype.keyDown = function(evt) {
	switch(evt.keyCode) {
		case 37:
			this.links = true;
			break;
		case 38:
			this.hoch = true;
			break;
		case 39:
			this.rechts = true;
			break;
		case 40:
			this.runter = true;
			break;
	}
}
