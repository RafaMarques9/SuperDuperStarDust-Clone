/*
* Title: Canvas Game
* Author: Rafael Marques
* Version: 1.0
* Description: This is a little Game with HTML Canvas.
*/

/*
* The Game Object.
* This Object Saves all the Data that the Game needs.
* Tasks of this function: save the canvas element and its context, fps, the hero objekt!
* TODO 1: Change the way it is saved.
*/

var game = function(){
	this.canvas;
	this.ctx;
	this.fps = 30;
	this.hero   = { speed: 7, x: 50, y: 50, moveLeft: false, moveUp: false, moveRight: false, moveDown: false, shootFired: false};
	this.shoot  = { x: this.hero.x, y: this.hero.y, speed: 5 };
	this.heroImage = new Image();
	this.shootImage = new Image();
	this.heroImage.src = "bilder/hero.png";
	this.shootImage.src = "bilder/testShoot.png";
}

/*var game = {
	canvasCTX: document.getElementById("playground").getContext("2d"),
	fps: 30
}*/

/*
* The Game main function
* This is where the game starts
*/
game.prototype.main = function() {
	this.canvas = document.getElementById("playground");
	this.ctx    = this.canvas.getContext("2d");
	setInterval(function() {
		game.update();
		game.draw();
	}, 1000/this.fps);
}

/*
* ALT WIRD NEU GEMACHT!
* The Game draw function
* This function simple draw's the hero to the field
*/
game.prototype.draw = function() {
	this.ctx.drawImage(this.heroImage, this.hero.x, this.hero.y);
	if(this.hero.shootFired) {
		this.ctx.drawImage(this.shootImage, this.shoot.x, this.shoot.y);
	}
}

/*
* ALT WIRD NEU GEMACHT!
* The Game update function
* This function is called in the main function loop
* it updates the coordinates of the hero.
*/
game.prototype.update = function() {
	if(this.hero.moveLeft && this.hero.x > 0)    { this.hero.x -= this.hero.speed; }
	if(this.hero.moveRight && this.hero.x < 571) { this.hero.x += this.hero.speed; }
	if(this.hero.moveUp && this.hero.y > 0)      { this.hero.y -= this.hero.speed; }
	if(this.hero.moveDown && this.hero.y < 369)  { this.hero.y += this.hero.speed; }
}

/*
* ALT WIRD NEU GEMACHT!
* The Game keyDown function
* This function detects which key was pressed and put's
* the direction Bool true.
*/
game.prototype.keyDown = function(evt) {
	console.log(evt.keyCode);
	switch(evt.keyCode) {
		case 37:
			this.hero.moveLeft = true;
			break;
		case 38:
			console.log("Up");
			this.hero.moveUp = true;
			break;
		case 39:
			console.log("Right");
			this.hero.moveRight = true;
			break;
		case 40:
			console.log("Down");
			this.hero.moveDown = true;
			break;
		case 65:
			console.log("ShootFire Left!");
			game.shootFire('left');
			this.hero.shootFired = true;
			break;
	}
}

/*
* ALT WIRD NEU GEMACHT!
* The Game keyUp function
* This function detects which key is going up 
* and puts the bool to false
*/
game.prototype.keyUp = function(evt) {
	switch(evt.keyCode) {
		case 37:
			console.log("/Left");
			this.hero.moveLeft = false;
			break;
		case 38:
			console.log("/Up");
			this.hero.moveUp = false;
			break;
		case 39:
			console.log("/Right");
			this.hero.moveRight = false;
			break;
		case 40:
			console.log("/Down");
			this.hero.moveDown = false;
			break;
		/*
		case 65:
			this.hero.shootFired = false;
			break; */
	}
}

game.prototype.shootFire = function(fire) {
	if(fire === 'left') {
		this.shoot.x = this.hero.x;
		this.shoot.y = this.hero.y;
		console.log("FIRE");
		console.log("X: " + this.shoot.x);
		console.log("Y: " + this.shoot.y);
		game.draw();
		/*
		while(this.shoot.x > 0) {
			game.draw();
			setTimeout('', 5000);
			this.shoot.x--;
		} */
	}
}

/*
* This function will later show the enemys on the battlefield
*/
game.prototype.showEnemy = function() {
	
}
