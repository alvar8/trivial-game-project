function Board(){
  //this.player1 = player1;
  //this.player2 = player2;
  this.game = [];
  this.square = "";
  this.dice = 0;
}


Board.prototype.startGame = function(){

};


Board.prototype.throwDice = function(){
  this.dice = Math.floor(Math.random()* 7);

  return this.dice;
};
