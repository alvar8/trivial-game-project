function Dice(){
  this.number = 0;
}

Dice.prototype.throwDice = function(){
  this.number = Math.floor(Math.random()* 6)+1;
  $("#numberDice span").empty();
  $("#numberDice span").append(this.number);

  return this.number;
};
