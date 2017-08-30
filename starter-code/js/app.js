var player1 = new Player($('<div>').attr('id', 'player1').css({
  top: 30,
  left: 30,
  position: 'absolute'
}));
var player2 = new Player($('<div>').attr('id', 'player2').css({
  top: 30,
  left: 30,
  position: 'absolute'
}));
var player3 = new Player($('<div>').attr('id', 'player3').css({
  top: 30,
  left: 30,
  position: 'absolute'
}));
var player4 = new Player($('<div>').attr('id', 'player4').css({
  top: 30,
  left: 30,
  position: 'absolute'
}));

player2.possiblePosition=6;
player3.possiblePosition=12;
player4.possiblePosition=18;


var board = new Board();
var question = new QuestionAndAnswers();
var myDice = new Dice();

$(document).ready(function() {
  player1.createHtml("#0-0");
  player2.createHtml("#0-6");
  player3.createHtml("#0-12");
  player4.createHtml("#0-18");

  $("#dice").on("click", function() {
    board.cleanQuestion();
    board.turn.updatePosition(myDice.throwDice(),board.turn);
    board.writeQuestion(board.turn);
  });


  $("#send").on("click", function() {
    board.cleanAnswer();
    board.checkAnswer(board.turn);
  });


});
