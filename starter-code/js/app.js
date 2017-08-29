var a = $('<div>').attr('id', 'player1').css({
  top: 30,
  left: 30,
  position: 'absolute',
  height: '30px',
  width: '30px',
  background: 'grey'
});

$("#0-0").append(a);
var player1 = new Player();
//var player2 = new Player();
var board = new Board();
var question = new QuestionAndAnswers();
var myDice = new Dice();

$(document).ready(function() {


  $("#dice").on("click", function() {

    var go = "#0-" + player1.possiblePosition;
    player1.possiblePosition += myDice.throwDice();
    if (player1.possiblePosition > 23) {
      var start = 0;
      var res = player1.possiblePosition - 23;
      start += res;
      player1.possiblePosition = start;
    }
    player1.updatePosition();
    var moving = "#0-" + player1.possiblePosition;
    console.log(moving);
    $(go).remove("div");
    $(moving).append(a);
    //console.log(a);
  });


});
