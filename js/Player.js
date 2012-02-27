/*
* The Player Class
*/
var Player = function() {
	// TODO: This is not part of the player class anymore! GameField Class
	this.feldBreite = 500;
	this.feldHoehe = 500;
	
	// the attributes of the Player 
	this.radius = 10;
	this.x = 150;
	this.y = 150;
	this.xspeed = 5;
	this.yspeed = 5;
	this.leben = 5;
	this.punkte = 0;
	
	// The Canvas element to draw the player 
	this.ctx;
	
	// TODO: This is not part of the player class anymore! Controlles Class
	this.rechts = false;
	this.links = false;
	this.runter = false;
	this.hoch = false;
}

/*
* This Method saves the Canvas element to use it in the future
* and fires the drawPlayer() Method
*/
Player.prototype.init = function() {
	this.ctx = $('#canvas')[0].getContext("2d");
	this.drawPlayer();
}

/*
* This Method is used to clear the field and to draw the Player on it
*/
Player.prototype.drawPlayer = function() {
	this.ctx.clearRect(0, 0, this.feldBreite, this.feldHoehe);
	this.ctx.beginPath();
	this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
	this.ctx.closePath();
	this.ctx.fill();
}

/*
* TODO: This Method is not part of this class anymore! PlayerMove Class
* This Method is launched when a key is pressed. Than it moves the Player x and y coordinates
* and launches the drawPlayer() Method
*/
Player.prototype.movePlayer = function() {
	
	if (this.rechts) {
		if (!(this.x >= (this.feldBreite - this.radius))) {
			this.x += this.xspeed;
		}
	}
	 
	else if (this.links) {
		if (!(this.x <= (0 + this.radius))) {
			this.x -= this.xspeed;
		}
	}
	 
	else if (this.hoch) {
		if (!(this.y <= (0 + this.radius))) {
			this.y -= this.yspeed;
		}
	}
	 
	else if (this.runter) {
		if (!(this.y >= (this.feldHoehe - this.radius))) {
			this.y += this.yspeed;
		}	
	}
	
	this.drawPlayer();
}

/*
* TODO: This Method is not part of this class anymore! Controlles Class
* When a Key is pressed this Method gets the Key and set's the corresponding Variable to true
* and launches the movePlayer() Method 
*/
Player.prototype.keyDown = function(evt) {
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
	this.movePlayer();
	
}

/*
* TODO: This Method is not part of this class anymore! Controlles Class
* When the pressed key is released this Method set's the corresponding Variable to false 
*/
Player.prototype.keyUp = function(evt) {
	switch(evt.keyCode) {
		case 37:
			this.links = false;
			break;
		case 38:
			this.hoch = false;
			break;
		case 39:
			this.rechts = false;
			break;
		case 40:
			this.runter = false;
			break;
	}
} 

/*
* returns the life of the player
*/
Player.prototype.getLeben = function() {
	return this.leben;
}

/*
* adds a life to the player
*/
Player.prototype.addLeben = function() {
	this.leben++;
}

/*
* removes one life of the player
*/
Player.prototype.looseLeben = function() {
	this.leben--;
}

/*
* returns the points of the player
*/
Player.prototype.getPunkte = function() {
	return this.punkte;
}


