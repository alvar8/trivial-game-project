function Board(){
  //this.player1 = player1;
  //this.player2 = player2;
  this.turn = 0;

}


Board.prototype.cleanQuestion = function(){
  $("#wrong h3").empty();
  $("#wrong").css('visibility','hidden');
  $("#question p").empty();
};

Board.prototype.writeQuestion = function(player){
  console.log(question);
  $("#questionAndAnswers").css('visibility','visible');
  //$("#question p").append(question.getQuestion(question.getCategory(moving)));
  $("#question p").append(question.getQuestion(question.getCategory("#0-" + player.possiblePosition)));
};
