function Player(name, x, y){
  this.element = $('<div>').attr('id',name);
  this.x = x;
  this.y = y;
  this.element.css({top:this.y, left:this.x, position:'absolute', height:'30px', width:'30px', background:'grey'});
  $('#main').append(this.element);
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
