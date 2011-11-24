var Player = function() {
	this.feldBreite = 500;
	this.feldHoehe = 500;
	this.radius = 10;
	this.x = 150;
	this.y = 150;
	this.xspeed = 5;
	this.yspeed = 5;
	this.ctx;
	this.rechts = false;
	this.links = false;
	this.runter = false;
	this.hoch = false;
}

Player.prototype.Init = function() {
	this.ctx = $('#canvas')[0].getContext("2d");
	this.SpielerZeichnen();
}

Player.prototype.SpielerZeichnen = function() {
	this.ctx.clearRect(0, 0, this.feldBreite, this.feldHoehe);
	this.ctx.beginPath();
	this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
	this.ctx.closePath();
	this.ctx.fill();
}

Player.prototype.SpielerBewegen = function() {
	
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
	
	this.SpielerZeichnen();
}

Player.prototype.KeyDown = function(evt) {
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
	this.SpielerBewegen();
	
}

Player.prototype.KeyUp = function(evt) {
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


