var player1 = new Player();
var player2 = new Player();
var board = new Board();
var question = new QuestionAndAnswers();

var div = $("<div>");

for(var i=0; i<40; i++){
$("#board").append(div);
}

$( document ).ready(function() {

  for(var i=0; i<40; i++){

  $("#board").append("<div></div>");

  }

});
