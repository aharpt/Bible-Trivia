// var sectionOneArray = [1, 2, 3];
//
//
// var number1 = 2;
//
// var numbersUsed = [];
//
// numbersUsed.push(number1);
//
// var randomNumber = Math.floor(Math.random() * sectionOneArray.length) + 1;
//
// console.log(randomNumber)
//
// while (numbersUsed.includes(randomNumber) || randomNumber === 1) {
//   randomNumber = Math.floor(Math.random() * sectionOneArray.length) + 1;
//   console.log(randomNumber);
// }




var sectionOneArray = [1, 2, 3];

var randomNumber = function(highNumber) {
  return Math.round(Math.random() * highNumber);
};

var randomNumber1 = randomNumber(sectionOneArray.length - 1);


$("button").hover(function() {
  // after correct or incorrect banner is shown, move to a new page after a set amount of time or when the banner is dismissed

  // create array and push randomnumber

  var randomNumber2 = randomNumber(sectionOneArray.length - 1);

  var indiciesUsed = [];

  console.log(indiciesUsed);

  indiciesUsed.push(randomNumber1);



  while(indiciesUsed.includes(randomNumber2)) {
    randomNumber2 = randomNumber(sectionOneArray.length - 1);
    // window.setTimeout(break, 1000);
  }
  indiciesUsed.push(randomNumber2);






// Third Question


// after correct or incorrect banner is shown, move to a new page after a set amount of time or when the banner is dismissed

// create array and push randomnumber .includes


var randomNumber3 = randomNumber(sectionOneArray.length - 1);

console.log(randomNumber3)

while (indiciesUsed.includes(randomNumber1) || indiciesUsed.includes(randomNumber2)) {
  randomNumber3 = randomNumber(sectionOneArray.length - 1);
}

console.log("past while loop")

indiciesUsed.push(randomNumber3);

console.log(indiciesUsed);



});
