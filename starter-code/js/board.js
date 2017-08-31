function Board() {
  //this.player1 = player1;
  //this.player2 = player2;
  this.turn = player1;
  this.currentQuesito=quesito1;
}


Board.prototype.cleanQuestion = function() {
  $("#wrong h3").empty();
  $("#wrong").css('visibility', 'hidden');
  $("#question p").empty();
};

Board.prototype.writeQuestion = function(player) {
  console.log(question);
  $("#questionAndAnswers").css('visibility', 'visible');
  //$("#question p").append(question.getQuestion(question.getCategory(moving)));
  $("#question p").append(question.getQuestion(question.getCategory("#0-" + player.possiblePosition)));
};

Board.prototype.cleanAnswer = function() {
  $("#answer p").empty();
};


Board.prototype.wrongAnswer = function() {
  $("#wrong").css('visibility', 'visible');
  $("#wrong h3").append("Sorry, you are wrong");
  $("#questionAndAnswers").css('visibility', 'hidden');
};

Board.prototype.checkAnswer = function(player) {
  player.answer = $("input:text").val();
  if (question.compareAnswer(question.currentAnswer, player.answer) == true) {
    $("#answer p").append("Correct! You can continue");
    player.updateQuesito("#0-" + player.possiblePosition);
    this.currentQuesito.markAsSuccess(player);
  } else {
    board.wrongAnswer();
    board.changeTurn();
  }
};

Board.prototype.changeTurn = function(){
  if(this.turn==player1){
    this.turn=player2;
    this.currentQuesito=quesito2;
  }else if (this.turn==player2) {
    this.turn=player3;
    this.currentQuesito=quesito3;
  }else if (this.turn==player3) {
    this.turn=player4;
    this.currentQuesito=quesito4;
  }else if (this.turn==player4) {
    this.turn=player1;
    this.currentQuesito=quesito1;
  }
};
