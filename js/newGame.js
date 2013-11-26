/*
* Title: Canvas Game
* Author: Rafael Marques
* Version: 2.0
* Description: This is the Captain Rafa Game Main.
* This will save the Game, Hero and Enemies Object and will draw it all
* to the Battlefield.
*/

/*
* The game object saves the thing the game needs
*/
var game = function() {
	var gameObj = {
		canvasCTX: '',
		fps: 30,
		hero: heroObj
	}

	/*
	* The hero object
	*/
	var heroObj = {
		posX: 50,
		posY: 10,
		speed: 5,
		name: 'Captain Rafa',
		img: function() {this = new Image(); this.src ='bilder/hero.png';}
	}
}

game.prototype.main = function() {
	this.gameObj.canvasCTX = document.getElementById("playground").getContext("2d");
	setInterval(function() {
		drawGame();
	}, 1000/gameObj.fps);
}

var drawGame = function() {
	gameObj.canvasCTX.clearRect(0, 0, 600, 400);
	gameObj.canvasCTX.drawImage(gameObj.hero.img, gameObj.hero.posX, gameObj.hero.posY);
}
