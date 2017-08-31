var player1 = new Player($('<div>').attr('id', 'player1').css({
  top: 30,
  left: 30,
  position: 'absolute'
}),"#score1");
var player2 = new Player($('<div>').attr('id', 'player2').css({
  top: 30,
  left: 30,
  position: 'absolute'
}),"#score2");
var player3 = new Player($('<div>').attr('id', 'player3').css({
  top: 30,
  left: 30,
  position: 'absolute'
}),"#score3");
var player4 = new Player($('<div>').attr('id', 'player4').css({
  top: 30,
  left: 30,
  position: 'absolute'
}),"#score4");

player2.possiblePosition=6;
player3.possiblePosition=12;
player4.possiblePosition=18;

var quesito1 = new Quesito(player1.score);
var quesito2 = new Quesito(player2.score);
var quesito3 = new Quesito(player3.score);
var quesito4 = new Quesito(player4.score);

var board = new Board();
var question = new QuestionAndAnswers();
var myDice = new Dice();

$(document).ready(function() {
  player1.createHtml("#0-0");
  player2.createHtml("#0-6");
  player3.createHtml("#0-12");
  player4.createHtml("#0-18");

var resultDice;

  $("#dice").on("click", function() {
    board.cleanQuestion();
    $("#left").css('visibility','visible');
    $("#right").css('visibility','visible');
     resultDice= myDice.throwDice();
    return resultDice;
  });

  $("#right").on("click", function (){
    board.turn.updatePosition(resultDice,board.turn);
    board.writeQuestion(board.turn);
    $("#right").css('visibility','hidden');
    $("#left").css('visibility','hidden');
  });
   $("#left").on("click", function (){

     board.turn.updatePosition(-resultDice,board.turn);
     board.writeQuestion(board.turn);
     $("#left").css('visibility','hidden');
     $("#right").css('visibility','hidden');
   });


  $("#send").on("click", function() {
    board.cleanAnswer();
    board.checkAnswer(board.turn);
  });


});
