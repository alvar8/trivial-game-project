function Player(position) {
  this.image = position;
  //$('#main').append(this.element);
  this.position = [0, 0];
  this.possiblePosition = 0;
  this.quesitos=[false,false,false,false,false,false];
  this.answer = "8";
}

Player.prototype.createHtml = function(location) {
  $(location).append(this.image);
};

Player.prototype.updatePosition = function(number,whichplayer) {
  var go = "#0-" + this.possiblePosition;
  $(go).remove("#player1");
  this.possiblePosition+=number;
  if (this.possiblePosition > 23) {
    var start = 0;
    var res = this.possiblePosition - 23;
    start += res;
    this.possiblePosition = start;
  }
  var moving = "#0-" + this.possiblePosition;
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
