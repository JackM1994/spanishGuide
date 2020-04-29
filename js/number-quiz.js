(function(){
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="checkbox" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('number-quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "What is the Spanish word for Three?",
      answers: {
        a: "tree",
        b: "tres",
        c: "tras"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the Spanish word for Six?",
      answers: {
        a: "seis",
        b: "siez",
        c: "seise"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the Spanish word for One(feminine)?",
      answers: {
        a: "uno",
        b: "una",
        c: "une",
        d: "ono"
      },
      correctAnswer: "b"
    },

    {
        question: "What is the Spanish word for Five?",
        answers: {
          a: "cinca",
          b: "cico",
          c: "cive",
          d: "cinco"
        },
        correctAnswer: "d"
      },
    {
        question: "What is the Spanish word for Two?",
        answers: {
          a: "dose",
          b: "dus",
          c: "dos",
          d: "doss"
        },
        correctAnswer: "c"
      },

      {
        question: "What is does 2+2 make?",
        answers: {
          a: "cuat",
          b: "cuatra",
          c: "cuatros",
          d: "cuatro"
        },
        correctAnswer: "d"
      },

      {
        question: "What does 6 + 3 make?",
        answers: {
          a: "nueve",
          b: "nine",
          c: "nuve",
          d: "nuave"
        },
        correctAnswer: "a"
      },

      {
        question: "What is the Spanish word for Seven?",
        answers: {
          a: "siete",
          b: "seite",
          c: "seete",
          d: "sieti"
        },
        correctAnswer: "a"
      },

      {
        question: "What is 4 + 4?",
        answers: {
          a: "och",
          b: "ocha",
          c: "ocho",
          d: "ochot"
        },
        correctAnswer: "c"
      },

      {
        question: "What is Spanish word for 10?",
        answers: {
          a: "diez",
          b: "decima",
          c: "deize",
          d: "deiz"
        },
        correctAnswer: "a"
      }
    
    
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();