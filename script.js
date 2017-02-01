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
var questionOne = QuestionsCreator('In how many days did God create the earth?', '6 days', '7 days', '8 days', '5 days', '9 days');
var questionTwo = QuestionsCreator('What is the third commandment about?', 'Not taking the Lord\'s name in vain', 'Not making a graven image', 'Keeping the Sabbath holy', 'Not coveting', 'Honoring your father and your mother');
var questionThree = QuestionsCreator('How many times did Joshua and his army march around Jericho?', '13 times', '7 times', '6 times', '5 times', '12 times');
var questionFour = QuestionsCreator('Who did Esther succeed as queen?', 'Vashti', 'Abigail', 'Rahab', 'Rebekah', 'None of the above');
var questionFive = QuestionsCreator('Which son of David, succeeded him as king?', 'Solomon', 'Adinijah', 'Absalom', 'Jeroboahm', 'Rehoboam');
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
