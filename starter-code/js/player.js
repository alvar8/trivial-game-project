function Player(){
  this.position = 0;
  this.quesitoArt = false;
  this.quesitoSport = false;
  this.quesitoHistory = false;
  this.quesitoGeography = false;
  this.quesitoProgramming = false;
  this.quesitoScience = false;
  this.answer = "8";
}




Player.prototype.canMove = function(){
  return true;
};


Player.prototype.getAnswer = function(){
  return this.answer;
};

Player.prototype.updatePosition = function(dice){
  //console.log(dice);
  //console.log(this.position);
  this.position += dice;
  return this.position;

};

Player.prototype.updateQuesito = function(){

};

Player.prototype.win = function(){

};
