var player1 = new Player();
var player2 = new Player();
var board = new Board();
var question = new QuestionAndAnswers();
var myDice =new Dice();


$( document ).ready(function() {
  $( document ).on( "click", function( event ) {

$("#try").text( "pageX: " + event.pageX + ", pageY: " + event.pageY );

});
});
