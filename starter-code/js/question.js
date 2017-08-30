function QuestionAndAnswers() {
  this.art = [{
      question: 'Who painted the Mona Lisa?',
      answer: 'Da Vinci'
    },
    {
      question: 'Who wrote Julius Caesar, Macbeth and Hamlet?',
      answer: 'Shakespeare'
    },
    {
      question: 'Who wrote Lazarillo de Tormes?',
      answer: 'Anonymous'
    },
    {
      question: 'What nationality was Chopin?',
      answer: 'Polish'
    },
    {
      question: 'Who lived at 221B, Baker Street, London?',
      answer: 'Sherlock Holmes'
    }
  ];
  this.geography = [{
      question: 'Where are the Dolomites??',
      answer: 'Italy'
    },
    {
      question: 'Which is the largest ocean?',
      answer: 'Pacific'
    },
    {
      question: 'What is the capital of Finland?',
      answer: 'Helsinki'
    },
    {
      question: 'How many states are there in the United States of America?',
      answer: '50'
    },
    {
      question: 'Which mountains are between Spain and France?',
      answer: 'Pyrenees'
    }
  ];
  this.history = [{
      question: 'What nationality was Marco Polo?',
      answer: 'Italian'
    },
    {
      question: 'When did the Second World War end?',
      answer: '1945'
    },
    {
      question: 'Who was the first president of America?',
      answer: 'Washington'
    },
    {
      question: 'When did the First World War start?',
      answer: '1914'
    },
    {
      question: 'Where did the first atomic bomb explode for the first time in Japan?',
      answer: 'Hiroshima'
    }
  ];
  this.science = [{
      question: 'How many legs has a spider got?',
      answer: '8'
    },
    {
      question: 'Which is the only mammal that cannot jump?',
      answer: 'Elephant'
    },
    {
      question: 'Which planet is nearest the sun?',
      answer: 'Mercury'
    },
    {
      question: 'How much does a litre of water weigh?',
      answer: '1kg'
    },
    {
      question: 'Where is the smallest bone in the body?',
      answer: 'Ear'
    }
  ];
  this.sport = [{
      question: 'Who starts first in chess?',
      answer: 'White'
    },
    {
      question: 'What is the highest score in a gymnastics exercise?',
      answer: '10'
    },
    {
      question: 'Who won the the Tour de France of 2007?',
      answer: 'Contador'
    },
    {
      question: 'How many lanes does an olympic swimming pool have?',
      answer: '8'
    },
    {
      question: 'Which sport use the Spirit of the Game?',
      answer: 'Ultimate Frisbee'
    }
  ];
  this.programming = [{
      question: 'In which year appeared javascript?',
      answer: '1995'
    },
    {
      question: 'Inside which HTML element do we put the JavaScript?',
      answer: '<script>'
    },
    {
      question: 'In javascript is cero equal to false?',
      answer: 'Yes'
    },
    {
      question: 'In javascript is null === undefined?',
      answer: 'No'
    },
    {
      question: 'In javascript, what means NaN?',
      answer: 'Not a number'
    }
  ];
  this.currentAnswer = "";
}

QuestionAndAnswers.prototype.getQuestion = function(category) {
  var randomNumber = Math.floor(Math.random() * 5);

  var theQuestion = category[randomNumber].question;

  this.currentAnswer = category[randomNumber].answer;
  console.log(this.currentAnswer);

  return theQuestion;

};

QuestionAndAnswers.prototype.compareAnswer = function(answer, playerAnswer) {
  //answer.toUpperCase();
  //playerAnswer.toUpperCase();
  if (answer == playerAnswer) {
    return true;
  } else {
    return false;
  }
};

QuestionAndAnswers.prototype.getCategory =function(id){
  var category;
  if($( id ).hasClass( "art" )){
    category= this.art;
  }else if ($( id ).hasClass( "sport" )) {
    category= this.sport;
  }else if ($( id ).hasClass( "history" )) {
    category= this.history;
  }else if ($( id ).hasClass( "geography" )) {
    category= this.geography;
  }else if ($( id ).hasClass( "programming" )) {
    category= this.programming;
  }else if ($( id ).hasClass( "science" )) {
    category= this.science;
  }


  return category;

};
