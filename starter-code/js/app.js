
var a =$('<div>').attr('id','player1').css({top:30, left:30, position:'absolute', height:'30px', width:'30px', background:'grey'});

$("#0-0").append(a);
var player1 = new Player();
//var player2 = new Player();
var board = new Board();
var question = new QuestionAndAnswers();
var myDice =new Dice();

$(document).ready(function(){


  $("#dice").on("click", function (){
    player1.possiblePosition += myDice.throwDice();
    player1.updatePosition();
    var po = "#0-" + player1.possiblePosition;
    console.log(po);
    $("#0-0").remove("div");
    $(po).append(a);
    //console.log(a);
  });


});
