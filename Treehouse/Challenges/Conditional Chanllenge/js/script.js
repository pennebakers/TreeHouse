//used to store number of correct answers
let correct = 0;

//used to store the rank of the player after completing the quiz
let rank;

//select the main header to be able to display the results to the main.
const main = document.querySelector('main');

//ask the questions
const answer1 = prompt("What is another programming language like a gem?");
if(answer1.toUpperCase() === 'RUBY'){
    correct += 1;
}

const answer2 = prompt("Name a programming language that is like a snake?");
if(answer2.toUpperCase() === 'PYTHON'){
    correct =+ 1;
}

const answer3 = prompt("What language do you use to style pages?");
if(answer3.toUpperCase() === 'CSS'){
    correct += 1;
}

const answer4 = prompt("What language do you use to build the structure of web pages?");
if(answer4.toUpperCase() === 'HTML'){
    correct += 1;
}

const answer5 = prompt("What language do you use to add interactivity to a web page?");
if(answer5.toUpperCase() === 'JAVASCRIPT'){
    correct += 1;
}

if(correct === 5){
    rank = 'GOLD';
}else if( correct === 3 || 4){
    rank = 'Silver';
}else if( correct === 1 || 2){
    rank = 'Bronze';
}else{
    rank = 'No Crown';
}

main.innerHTML = `
    <h2>You got ${correct} out of 5 questions correct.</h2>
    <p> Crown earned: <strong>${rank}</strong></p>`