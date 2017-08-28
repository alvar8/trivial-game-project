function Player(){
  this.position = Board.game[0][0];
  this.points= 0;
  this.answer = " ";
}

Player.prototype.canMove = function(){
  return true;
};

Player.prototype.move = function(){

};

Player.prototype.updatePoints = function(){

};

Player.prototype.updatePosition = function(){

};
