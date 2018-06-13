var number = 20;
var intervalId;
var questions = [];
var answers = [];
var correct = 0;
var incorrect = 0;
var usedQuestions = [];
var displayQuestion;
var intervalIDlocal;
var numberLocal;

//questions
var questionOne = "What year was Naruto first published?"; //1997
var questionTwo = "Who is the creator of the Manga 'Bleach'?"; //Tite Kubo
var questionThree = "Which Manga put Shonen Weekly on the map of most sold manga magazine?"; //Dragonball Z
var questionFour = "What is Shonen Weekly's longest running manga?"; //One Piece
var questionFive = "Shonen manga is best known as what type of genre?"; //Action Adventure
var end = "";

questions.push(questionOne, questionTwo, questionThree, questionFour, questionFive, end);

//answers
var questionOneAnswers = ["1994", "1999", "1997", "1990"]; //C: 1997
var questionTwoAnswers = ["Tite Kubo", "Yukki Sako", "Arima Kose", "Sakura Ki"]; //A: Tite Kubo
var questionThreeAnswers = ["One Piece", "Naruto", "Dragonball Z", "Bleach"]; //C: Dragonball Z
var questionFourAnswers = ["One Piece", "Bleach", "Dragonball", "Naruto"]; //A: One Piece
var questionFiveAnswers = ["Romantic Comedy", "Action Adventure", "Thriller", "Fiction"]; //B: Action Adventure

answers.push(questionOneAnswers, questionTwoAnswers, questionThreeAnswers, questionFourAnswers, questionFiveAnswers);

//HTML elements
$("#startButton").on("click", run);
//$("#stopButton").on("click", stop);
$("#resetButton").on("click", reset);

var theQuestion = $("#question")
var optionA = $("#optionOne");
var optionB = $("#optionTwo");
var optionC = $("#optionThree");
var optionD = $("#optionFour");

//functions
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    var currentQuestion;
    fourButtons();
    oneQuestion();
}

function stop() {
    clearInterval(intervalId);
    $("#correct").text("correct " + correct);
    $("#incorrect").text("incorrect " + incorrect);
    $("#thegame").hide();
    $("#correct").show();
    $("#incorrect").show();
}

function reset () {
    number = 20;
    $("#countdown").html(number);
    correct = 0;
    incorrect = 0;
    oneQuestion();
    $("#thegame").show();
    $("#correct").hide();
    $("#incorrect").hide();
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#countdown").html(number);
    if (number === 0) {
        alert("times up");
    }
}

function resetForQuestion() {
    number = 20;
    $("#countdown").html(number);
}

function oneQuestion () {
    currentQuestion = questions[0];
    theQuestion.text(questions[0]);
    optionA.text(questionOneAnswers[0]);
    optionB.text(questionOneAnswers[1]);
    optionC.text(questionOneAnswers[2]);
    optionD.text(questionOneAnswers[3]);

}

function twoQuestion () {
    currentQuestion = questions[1];
    theQuestion.text(questions[1]);
    optionA.text(questionTwoAnswers[0]);
    optionB.text(questionTwoAnswers[1]);
    optionC.text(questionTwoAnswers[2]);
    optionD.text(questionTwoAnswers[3]);

}

function threeQuestion () {
    currentQuestion = questions[2];
    theQuestion.text(questions[2]);
    optionA.text(questionThreeAnswers[0]);
    optionB.text(questionThreeAnswers[1]);
    optionC.text(questionThreeAnswers[2]);
    optionD.text(questionThreeAnswers[3]);

}

function fourQuestion () {
    currentQuestion = questions[3];
    theQuestion.text(questions[3]);
    optionA.text(questionFourAnswers[0]);
    optionB.text(questionFourAnswers[1]);
    optionC.text(questionFourAnswers[2]);
    optionD.text(questionFourAnswers[3]);

}

function fiveQuestion () {
    currentQuestion = questions[4];
    theQuestion.text(questions[4]);
    optionA.text(questionFiveAnswers[0]);
    optionB.text(questionFiveAnswers[1]);
    optionC.text(questionFiveAnswers[2]);
    optionD.text(questionFiveAnswers[3]);

}

function fourButtons () {

    optionA.on("click", function() {
        if (currentQuestion === questions[3]) {
            correct++;
            $("#status").text("correct");
            fiveQuestion();
            resetForQuestion();
        }
        else if (currentQuestion === questions[1]) {
            correct++;
            $("#status").text("correct");
            threeQuestion();
            resetForQuestion();
        }
        else {
            incorrect++;
            $("#status").text("incorrect");
            incorrectAnswer();
            resetForQuestion();
        }
    });
    optionB.on("click", function() {
        if (currentQuestion === questions[4]) {
            correct++;
            $("#status").text("correct");
            resetForQuestion();
            stop();
        }
        else {
            incorrect++;
            $("#status").text("incorrect");
            incorrectAnswer();
            resetForQuestion();
        }
    });
    optionC.on("click", function() {
        if (currentQuestion === questions[0]) {
            correct++
            $("#status").text("correct");
            twoQuestion();
            resetForQuestion();
        }
        else if (currentQuestion === questions[2])  {
            correct++
            $("#status").text("correct");
            fourQuestion();
            resetForQuestion();
        }
        else {
            incorrect++
            $("#status").text("incorrect");
            incorrectAnswer();
            resetForQuestion();
        }
    });
    optionD.on("click", function() {
        incorrect++;
        $("#status").text("incorrect");
        incorrectAnswer();
        resetForQuestion();
    });
}


function incorrectAnswer () {
    if (currentQuestion === questions[0]) {
        twoQuestion();
    }
    else if (currentQuestion === questions[1]) {
        threeQuestion();
    }
    else if (currentQuestion === questions[2]) {
        fourQuestion();
    }
    else if (currentQuestion === questions[3]) {
        fiveQuestion();
    }
    else if (currentQuestion === questions[4]) {
        stop();
    }
}