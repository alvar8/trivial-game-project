var player1 = new Player($('<div>').attr('id', 'player1').css({
  top: 30,
  left: 30,
  position: 'absolute',
  height: '30px',
  width: '30px',
  background: 'grey'
}));
var player1 = new Player($('<div>').attr('id', 'player1').css({
  top: 30,
  left: 30,
  position: 'absolute',
  height: '30px',
  width: '30px',
  background: 'grey'
}));
//var
var board = new Board();
var question = new QuestionAndAnswers();
var myDice = new Dice();

$(document).ready(function() {
  player1.createHtml();
  $("#dice").on("click", function() {
    board.cleanQuestion();
    player1.updatePosition(myDice.throwDice());
    board.writeQuestion(player1);
  });


  $("#send").on("click", function() {
    board.cleanAnswer();
    board.checkAnswer(player1);
  });


});
