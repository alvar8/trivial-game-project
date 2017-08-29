function Player(position){
  this.element = position;
  //$('#main').append(this.element);
  this.position = [0,0];
  this.possiblePosition=0;
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

Player.prototype.updatePosition = function(){
  this.position[0, this.possiblePosition];
console.log(this);
};

Player.prototype.updateQuesito = function(){

};

Player.prototype.win = function(){

};
