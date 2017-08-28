function Dice(){
  this.number = 0;
}

Dice.prototype.throwDice = function(){
  this.number = Math.floor(Math.random()* 6)+1;

  return this.number;
};
