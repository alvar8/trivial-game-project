function Quesito(parent){
  this.art = $('<div class="quesito">').addClass('art').text('Art');
  this.sport = $('<div class="quesito">').addClass('sport').text('Sport');
  this.history= $('<div class="quesito">').addClass('history').text('History');
  this.geography = $('<div class="quesito">').addClass('geography').text('Geography');
  this.programming = $('<div class="quesito">').addClass('programming').text('Programming');
  this.sciences = $('<div class="quesito">').addClass('sciences').text('Sciences');

  this.element = $('<div>').addClass('quesitoHolder');
  this.element.append(this.art)
              .append(this.sport)
              .append(this.history)
              .append(this.geography)
              .append(this.programming)
              .append(this.sciences);

  this.element.appendTo(parent);
}


Quesito.prototype.markAsSuccess = function(player){
  if(player.quesitos[0] == true){
    this.art.addClass('success');
  }
  if(player.quesitos[1] == true){
    this.sport.addClass('success');
  }
  if(player.quesitos[2] == true){
    this.history.addClass('success');
  }
  if(player.quesitos[3] == true){
    this.geography.addClass('success');
  }
  if(player.quesitos[4] == true){
    this.programming.addClass('success');
  }
  if(player.quesitos[5] == true){
    this.sciences.addClass('success');
  }
};
