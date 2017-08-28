var player1 = new Player();
var player2 = new Player();
var board = new Board();
var question = new QuestionAndAnswers();
var myDice =new Dice();


var div = $("<div>");

 for(var i=0; i<40; i++){
 $("#main").append(div);
 }


$( document ).ready(function() {

   for(var i=0; i<42; i++){

   $("#main").append("<div></div>");

   }

 });
