function Player(){
  this.position = 0;
  this.points= 0;
  this.answer = "8";
}




Player.prototype.canMove = function(){
  return true;
};

Player.prototype.move = function(){

};

Player.prototype.getAnswer = function(){
  return this.answer;
};

Player.prototype.updatePoints = function(){

};

Player.prototype.updatePosition = function(){

};

var player1 = new Player();
