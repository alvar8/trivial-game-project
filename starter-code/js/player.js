function Player(position,score) {
  this.image = position;
  this.score=score;
  this.position = [0, 0];
  this.possiblePositionX = 0;
  this.possiblePositionY = 0;
  this.quesitos=[false,false,false,false,false,false];
  this.answer = "8";
}

Player.prototype.createHtml = function(location) {
  $(location).append(this.image);
};

Player.prototype.updatePosition = function(number) {
  var go = "#"+this.possiblePositionY +"-"+ this.possiblePositionX;
  $(go).remove("#player1");
  // for(var i=this.possiblePositionX;i<i+number;i++){
  //   if(i==3){
  //     $("#inside").css("visibility","visible");
  //   }
  //   if(i==9){
  //
  //   }
  //   if(i==15){
  //
  //   }
  //   if(i==21){
  //
  //   }
  // }
  console.log("estoy sumando "+ number + " a " + this.possiblePositionX);
  this.possiblePositionX+=number;
  if (this.possiblePositionX > 23) {
    var start = 0;
    var res = this.possiblePositionX - 23;
    start += res;
    this.possiblePositionX = start;
  }
  if(this.possiblePositionX < 0) {

    var subs = 24+this.possiblePositionX;

    this.possiblePositionX = subs;
  }
  console.log(this.possiblePositionX);
  var moving = "#"+this.possiblePositionY +"-"+ this.possiblePositionX;
  $(moving).append(this.image);

};


Player.prototype.getAnswer = function() {
  return this.answer;
};



Player.prototype.updateQuesito = function(id) {

  if($( id ).hasClass( "art" )){
    this.quesitos[0] = true ;

  }else if ($( id ).hasClass( "sport" )) {
    this.quesitos[1] = true ;

  }else if ($( id ).hasClass( "history" )) {
    this.quesitos[2] = true ;

  }else if ($( id ).hasClass( "geography" )) {
    this.quesitos[3] = true ;

  }else if ($( id ).hasClass( "programming" )) {
    this.quesitos[4] = true ;

  }else if ($( id ).hasClass( "science" )) {
    this.quesitos[5] = true ;

  }
};




Player.prototype.checkWin = function() {

};
