var myGamePiece;
var myObstacles = [];
var mySound;
var myMusic;

function startGame() {
  myGamePiece = new component(30, 30, "red", 10, 120);
  mySound = new sound("so");
  myMusic = new sound("gametheme.mp3");
  myMusic.play();
  myGameArea.start();
}