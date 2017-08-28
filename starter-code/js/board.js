function Board(player1, player2){
  this.player1 = player1;
  this.player2 = player2;
  this.game = [];
  this.square = 

}


Board.prototype.throwDice = function(){
  var number = Math.floor(Math.random()* 6);
  return number;
};
var board = new Board();
