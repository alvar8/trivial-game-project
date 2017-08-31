function Player(position,score) {
  this.image = position;
  this.score=score;
  this.position = [0, 0];
  this.possiblePosition = 0;
  this.quesitos=[false,false,false,false,false,false];
  this.answer = "8";
}

Player.prototype.createHtml = function(location) {
  $(location).append(this.image);
};

Player.prototype.updatePosition = function(number) {
  var go = "#0-" + this.possiblePosition;
  $(go).remove("#player1");
  console.log("estoy sumando "+ number + " a " + this.possiblePosition);
  this.possiblePosition+=number;
  if (this.possiblePosition > 23) {
    var start = 0;
    var res = this.possiblePosition - 23;
    start += res;
    this.possiblePosition = start;
  }
  if(this.possiblePosition < 0) {

    var subs = 24+this.possiblePosition;

    this.possiblePosition = subs;
  }
  console.log(this.possiblePosition);
  var moving = "#0-" +this.possiblePosition;
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
