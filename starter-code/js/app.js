
var player1 = new Player($('<div>').attr('id', 'player1').css({
  top: 30,
  left: 30,
  position: 'absolute',
  height: '30px',
  width: '30px',
  background: 'grey'
}));
//var player2 = new Player();
var board = new Board();
var question = new QuestionAndAnswers();
var myDice = new Dice();

$(document).ready(function() {
  player1.createHtml();
  $("#dice").on("click", function() {
    //first we eliminate the text if you were wrong previously
    board.cleanQuestion();
    player1.updatePosition(myDice.throwDice());
    //we show the question
    board.writeQuestion(player1);
  });


  $("#send").on("click", function() {
    $("#answer p").empty();
    player1.answer=$("input:text").val();
     if(question.compareAnswer(question.currentAnswer,player1.answer)==true){
        $("#answer p").append("Correct! You can continue");
        player1.updateQuesito("#0-" + player1.possiblePosition);
     }else{
        $("#wrong").css('visibility','visible');
        $("#wrong h3").append("Sorry, you are wrong");
        $("#questionAndAnswers").css('visibility','hidden');
     }

  });


});
