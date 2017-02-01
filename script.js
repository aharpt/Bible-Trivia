// Data
// Globals
var randomNumber = function (highNumber) {
  return Math.floor(Math.random() * highNumber);
};
// 1. Create QuestionCreater Object
// Question Creator for Section One
var QuestionsCreator = function (question, answer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3, incorrectAnswer4) {
  return {
    question: question,
    answer: answer,
    incorrectAnswer1: incorrectAnswer1,
    incorrectAnswer2: incorrectAnswer2,
    incorrectAnswer3: incorrectAnswer3,
    incorrectAnswer4: incorrectAnswer4
  };
};
// Calling QuestionsCreator
var questionOne = QuestionsCreator('Which of the following is a quote from Aristotle?', 'My lectures are published and not published; they will be intelligible to those who heard them, and to none beside.', 'If any one were to ask me what in my opinion was the dullest and most stupid spot on the face of the Earth, I should decidedly say Chelmsford.', 'It was a good thing to have a couple of thousand people all rigid and frozen together, in the palm of one\'s hand.', 'Resisting the slow touch of a frozen finger tracing out my spine.', 'The dignity of his office is never impaired by the absence of efforts on his part to maintain it.');
var questionTwo = QuestionsCreator('Which of the following is a quote from Charles Dickins?', 'I used to sit, think, think, thinking, till I felt as lonesome as a kitten in a wash–house copper with the lid on.', 'Knowledge of the fact differs from knowledge of the reason for the fact.', 'That body is heavier than another which, in an equal bulk, moves downward quicker.', 'In all things of nature there is something of the marvelous.', 'We should venture on the study of every kind of animal without distaste; for each and all will reveal to us something natural and something beautiful.');
var questionThree = QuestionsCreator('Which of the following is a quote from Albert Einstein?', 'Unthinking respect for authority is the greatest enemy of truth.', 'The dignity of his office is never impaired by the absence of efforts on his part to maintain it.', 'I used to sit, think, think, thinking, till I felt as lonesome as a kitten in a wash–house copper with the lid on.', 'The civility which money will purchase, is rarely extended to those who have none.', 'Grief never mended no broken bones, and as good people’s wery scarce, what I says is, make the most on \’em.');
var questionFour = QuestionsCreator('Which of the following is a quote from Ralph Waldo Emerson?', 'The man who renounces himself, comes to himself.', 'We shall therefore assume the complete physical equivalence of a gravitational field and a corresponding acceleration of the reference system.', 'In so far as theories of mathematics speak about reality, they are not certain, and in so far as they are certain, they do not speak about reality.', 'Whether you can observe a thing or not depends on the theory which you use. It is the theory which decides what can be observed.', 'If A is success in life, then A = x + y + z. Work is x, play is y and z is keeping your mouth shut.');
var questionFive = QuestionsCreator('WWhich of the following is a quote from Helen Keller?', 'One can never consent to creep when one feels an impulse to soar.', 'The sublime is excited in me by the great stoical doctrine, Obey thyself.', 'The imitator dooms himself to hopeless mediocrity.', 'There is always a certain meanness in the argument of conservatism, joined with a certain superiority in its fact.', 'The thing done avails, and not what is said about it. An original sentence, a step forward, is worth more than all the censures.');
// Creating array for each section
var sectionOneArray = [];
sectionOneArray.push(questionOne);
sectionOneArray.push(questionTwo);
sectionOneArray.push(questionThree);
sectionOneArray.push(questionFour);
sectionOneArray.push(questionFive);
var randomNumber1 = randomNumber(sectionOneArray.length);
console.log('randomNumber 1 is: ' + randomNumber1);
// UI
// 3. Add random Question(s)
// jQuery
// correct and incorrect answer variables
var correctAnswers = 0;
var incorrectAnswers = 0;
// var numOfClicks = 0;
var numOfClicks = 0;
// grabbing radio buttons
var randomOption = randomNumber(3) + 1;
var $correctAnswer1 = $('#optionsRadios' + randomOption);
var randomOption2 = randomNumber(3) + 1;
var $correctAnswer2 = $('#optionsRadios' + randomOption2);
var randomOption3 = randomNumber(3) + 1;
var $correctAnswer3 = $('#optionsRadios' + randomOption3);
var randomOption4 = randomNumber(3) + 1;
var $correctAnswer4 = $('#optionsRadios' + randomOption4);
var randomOption5 = randomNumber(3) + 1;
var $correctAnswer5 = $('#optionsRadios' + randomOption5);
// Choosing element for first question
// Adding correct text to jumbotron and correct answer span
$('.jumbotron h3').html(sectionOneArray[randomNumber1].question);
// make three other options incorrect answers
// use same random number and grab incorrectAnswer(n)
$('.first-question-span').html(sectionOneArray[randomNumber1].incorrectAnswer1);
$('.second-question-span').html(sectionOneArray[randomNumber1].incorrectAnswer2);
$('.third-question-span').html(sectionOneArray[randomNumber1].incorrectAnswer3);
$('.fourth-question-span').html(sectionOneArray[randomNumber1].incorrectAnswer4);
$correctAnswer1.parent('label').children('span').html(sectionOneArray[randomNumber1].answer);
// 1. Add click event
$('.submit-button').click(function () {
  $('.alert').remove();
  // Checking if guess is correct
  // Checking if radio box is checked http://stackoverflow.com/questions/5665915/how-to-check-a-radio-button-with-jquery Stack Overflow MIT License
  if ($correctAnswer1.prop('checked') && numOfClicks === 0 || $correctAnswer2.prop('checked') && numOfClicks === 1 || $correctAnswer3.prop('checked') && numOfClicks === 2 || $correctAnswer4.prop('checked') && numOfClicks === 3 || $correctAnswer5.prop('checked') && numOfClicks === 4) {
    // hiding an element after a certain period of time http://stackoverflow.com/questions/2426304/how-to-hide-a-div-after-some-time-period Stack Overflow MIT License
    $('body').prepend('<div class="alert alert-success" role="alert">That is the correct answer</div>');
    $('.alert').delay(2500).fadeOut();
    correctAnswers += 1;
  } else {
    $('body').prepend('<div class="alert alert-danger" role="alert">That is incorrect<span class="answer"></span></div>');
    $('.alert').delay(2500).fadeOut();
    incorrectAnswers += 1;
  }
  $('.correct-answers-span').text(correctAnswers);
  $('.incorrect-answers-span').text(incorrectAnswers);
});
var indiciesUsed = [];
indiciesUsed.push(randomNumber1);
var createQuestion = function (numberOfClicks, rNum, array, correctAnswer) {
  if (numOfClicks === numberOfClicks) {
    console.log('Button for random Number ' + rNum + ' was clicked');
    var randomNum = randomNumber(array.length);
    console.log(randomNum);
    for (var i = 0; i < 1; i++) {
      console.log('randomNumber ' + rNum + ' before while loop is: ' + randomNum);
    }
    // after correct or incorrect banner is shown, move to a new page after a set amount of time or when the banner is dismissed
    while (indiciesUsed.includes(randomNum) === true) {
      randomNum = randomNumber(array.length);
      console.log('randomNumber ' + rNum + ' after while loop is: ' + randomNum);
    }
    indiciesUsed.push(randomNum);
    // Using setTimeout with .html http://stackoverflow.com/questions/3675935/jquery-using-delay-with-html-or-text-setting-doesnt-work Stack Overflow MIT License
    window.setTimeout(function () {
      $('.jumbotron h3').html(array[randomNum].question);
      // make three other options incorrect answers
      // use same random number and grab incorrectAnswer(n)
      $('.first-question-span').html(array[randomNum].incorrectAnswer1);
      $('.second-question-span').html(array[randomNum].incorrectAnswer2);
      $('.third-question-span').html(array[randomNum].incorrectAnswer3);
      $('.fourth-question-span').html(array[randomNum].incorrectAnswer4);
      correctAnswer.parent('label').children('span').html(array[randomNum].answer);
      // in first click handler (for randomNumber 2) numOfClicks += 1;
      numOfClicks += 1;
    }, 2500);
  }
};
$('.submit-button').click(function () {
  createQuestion(0, 2, sectionOneArray, $correctAnswer2);
  createQuestion(1, 3, sectionOneArray, $correctAnswer3);
  createQuestion(2, 4, sectionOneArray, $correctAnswer4);
  createQuestion(3, 5, sectionOneArray, $correctAnswer5);
});
// Dropdown plugin
$('.dropdown-toggle').dropdown();
// To Do
// 1. When Question is answered incorrectly, show correct answer
// 2. Before test starts, show the topic and/or what will be covered using a modal
/* 3. At the end of each test, show percentage?/other of amount correct (correctAnswer)
also show if you passed, can take the test again, or failed (only on full length tests or all tests?) */
// 4. After test, give detailed description of each question and show whether it was answered correctly or incorrectly
// 5. When all questions have been asked, disable button
// 2. Before test starts, show the topic and/or what will be covered using a modal
// 2. Before test starts, show the topic and/or what will be covered using a modal
$('#myModal').modal('show');
