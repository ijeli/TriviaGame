var number = 20;
var intervalId;
var questions = [];
var answers = [];
var correct = 0;
var incorrect = 0;
var usedQuestions = [];
var displayQuestion;

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
$("#stopButton").on("click", stop);
$("#resetButton").on("click", reset);

var theQuestion = $("#question")
var optionA = $("#optionOne");
var optionB = $("#optionTwo");
var optionC = $("#optionThree");
var optionD = $("#optionFour");

//functions
function run() {
    correct = 0;
    incorrect = 0;
    $("#startText").hide();
    $("#thegame").show();
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    displayQuestion = questions[0];
    theQuestion.text(displayQuestion);
    optionA.text(questionOneAnswers[0]);
    optionB.text(questionOneAnswers[1]);
    optionC.text(questionOneAnswers[2]);
    optionD.text(questionOneAnswers[3]);
    aButton ();
    bButton ();
    cButton ();
    dButton ();
    if (displayQuestion === question[5]) {
        return "";
    }
}

function stop() {
    clearInterval(intervalId);
    $("#correct").text("correct " + correct);
    $("#incorrect").text("incorrect " + incorrect);
};


function decrement() {
    number--;
    $("#countdown").html(number);
    if (number === 0) {
        alert("times up");
        if (displayQuestion === question[5]) {
            stop();
        }
        else {
            resetForQuestion();
        };
    }
}

function resetForQuestion() {
    number = 20;
    $("#countdown").html(number);
}

function reset() {
    clearInterval(intervalId);
    run();
}

function aButton () {
    optionA.on("click", function optionAButton (click) {
        var intervalId1;
        var number1 = 2;
        function decrement1() {
            number1--;
            if (number1 === 0) {
                $("#thegame").show();
                $("#status").text("");
                //if (displayQuestion === questions[4]) {
                //    $("#thegame").hide();
                //}
            }
        }
        if (displayQuestion === questions[0]) {
            $("#status").text("incorrect");
            $("#thegame").hide();
            clearInterval(intervalId1);
            intervalId1 = setInterval(decrement1, 1000);
            
            incorrect++;
            displayQuestion = questions[1];
            theQuestion.text(displayQuestion);
            optionA.text(questionTwoAnswers[0]);
            optionB.text(questionTwoAnswers[1]);
            optionC.text(questionTwoAnswers[2]);
            optionD.text(questionTwoAnswers[3]);
            resetForQuestion();
        }
        else if (displayQuestion === questions[1]) {
            $("#status").text("correct");
            $("#thegame").hide();
            clearInterval(intervalId1);
            intervalId1 = setInterval(decrement1, 1000);

            correct++;
            displayQuestion = questions[2];
            theQuestion.text(displayQuestion);
            optionA.text(questionThreeAnswers[0]);
            optionB.text(questionThreeAnswers[1]);
            optionC.text(questionThreeAnswers[2]);
            optionD.text(questionThreeAnswers[3]);
            resetForQuestion();
        }
        else if (displayQuestion === questions[2]) {
            $("#status").text("incorrect");
            $("#thegame").hide();
            clearInterval(intervalId1);
            intervalId1 = setInterval(decrement1, 1000);

            incorrect++;
            displayQuestion = questions[3];
            theQuestion.text(displayQuestion);
            optionA.text(questionFourAnswers[0]);
            optionB.text(questionFourAnswers[1]);
            optionC.text(questionFourAnswers[2]);
            optionD.text(questionFourAnswers[3]);
            resetForQuestion();
        }
        else if (displayQuestion === questions[3]) {
            $("#status").text("correct");
            $("#thegame").hide();
            clearInterval(intervalId1);
            intervalId1 = setInterval(decrement1, 1000);

            correct++;
            displayQuestion = questions[4];
            theQuestion.text(displayQuestion);
            optionA.text(questionFiveAnswers[0]);
            optionB.text(questionFiveAnswers[1]);
            optionC.text(questionFiveAnswers[2]);
            optionD.text(questionFiveAnswers[3]);
            resetForQuestion();
        }
        else if (displayQuestion === questions[4]) {
            $("#status").text("incorrect");
            $("#thegame").hide();
            clearInterval(intervalId1);
            //intervalId1 = setInterval(decrement1, 1000);
            
            incorrect++;
            displayQuestion = questions[5];
            theQuestion.text(displayQuestion);
            stop();
        };
    });
}
function bButton () {
    optionB.on("click", function optionBButton (click) {
        var intervalId1;
        var number1 = 2;
        function decrement1() {
            number1--;
            if (number1 === 0) {
                $("#thegame").show();
                $("#status").text("");
                //if (displayQuestion === questions[4]) {
                //    $("#thegame").hide();
                //}
            }
        }
    
        if (displayQuestion === questions[0]) {
            $("#status").text("incorrect");
            $("#thegame").hide();
            clearInterval(intervalId1);
            intervalId1 = setInterval(decrement1, 1000);

            incorrect++;
            displayQuestion = questions[1];
            theQuestion.text(displayQuestion);
            optionA.text(questionTwoAnswers[0]);
            optionB.text(questionTwoAnswers[1]);
            optionC.text(questionTwoAnswers[2]);
            optionD.text(questionTwoAnswers[3]);
            resetForQuestion();
        }
        else if (displayQuestion === questions[1]) {
            $("#status").text("incorrect");
            $("#thegame").hide();
            clearInterval(intervalId1);
            intervalId1 = setInterval(decrement1, 1000);

            incorrect++;
            displayQuestion = questions[2];
            theQuestion.text(displayQuestion);
            optionA.text(questionThreeAnswers[0]);
            optionB.text(questionThreeAnswers[1]);
            optionC.text(questionThreeAnswers[2]);
            optionD.text(questionThreeAnswers[3]);
            resetForQuestion();
        }
        else if (displayQuestion === questions[2]) {
            $("#status").text("incorrect");
            $("#thegame").hide();
            clearInterval(intervalId1);
            intervalId1 = setInterval(decrement1, 1000);

            incorrect++;
            displayQuestion = questions[3];
            theQuestion.text(displayQuestion);
            optionA.text(questionFourAnswers[0]);
            optionB.text(questionFourAnswers[1]);
            optionC.text(questionFourAnswers[2]);
            optionD.text(questionFourAnswers[3]);
            resetForQuestion();
        }
        else if (displayQuestion === questions[3]) {
            $("#status").text("incorrect");
            $("#thegame").hide();
            clearInterval(intervalId1);
            intervalId1 = setInterval(decrement1, 1000);

            incorrect++;
            displayQuestion = questions[4];
            theQuestion.text(displayQuestion);
            optionA.text(questionFiveAnswers[0]);
            optionB.text(questionFiveAnswers[1]);
            optionC.text(questionFiveAnswers[2]);
            optionD.text(questionFiveAnswers[3]);
            resetForQuestion();
        }
        else if (displayQuestion === questions[4]) {
            $("#status").text("correct");
            $("#thegame").hide();
            clearInterval(intervalId1);
            //intervalId1 = setInterval(decrement1, 1000);

            correct++;
            displayQuestion = questions[5];
            theQuestion.text(displayQuestion);
            stop();
            
        };
    });
}
function cButton () {
    optionC.on("click", function optionCButton (click) {
        var intervalId1;
        var number1 = 2;
        function decrement1() {
            number1--;
            if (number1 === 0) {
                $("#thegame").show();
                $("#status").text("");
                //if (displayQuestion === questions[4]) {
                //    $("#thegame").hide();
                //}
            }
        }

        if (displayQuestion === questions[0]) { //1
            $("#status").text("correct");
            $("#thegame").hide();
            clearInterval(intervalId1);
            intervalId1 = setInterval(decrement1, 1000);

            correct++;
            displayQuestion = questions[1];
            theQuestion.text(displayQuestion);
            optionA.text(questionTwoAnswers[0]);
            optionB.text(questionTwoAnswers[1]);
            optionC.text(questionTwoAnswers[2]);
            optionD.text(questionTwoAnswers[3]);
            resetForQuestion();
        }
        else if (displayQuestion === questions[1]) { //2
            $("#status").text("incorrect");
            $("#thegame").hide();
            clearInterval(intervalId1);
            intervalId1 = setInterval(decrement1, 1000);

            incorrect++;
            displayQuestion = questions[2];
            theQuestion.text(displayQuestion);
            optionA.text(questionThreeAnswers[0]);
            optionB.text(questionThreeAnswers[1]);
            optionC.text(questionThreeAnswers[2]);
            optionD.text(questionThreeAnswers[3]);
            resetForQuestion();
        }
        else if (displayQuestion === questions[2]) {//3
            $("#status").text("correct");
            $("#thegame").hide();
            clearInterval(intervalId1);
            intervalId1 = setInterval(decrement1, 1000);

            correct++;
            displayQuestion = questions[3];
            theQuestion.text(displayQuestion);
            optionA.text(questionFourAnswers[0]);
            optionB.text(questionFourAnswers[1]);
            optionC.text(questionFourAnswers[2]);
            optionD.text(questionFourAnswers[3]);
            resetForQuestion();
        }
        else if (displayQuestion === questions[3]) { //4
            $("#status").text("incorrect");
            $("#thegame").hide();
            clearInterval(intervalId1);
            intervalId1 = setInterval(decrement1, 1000);

            incorrect++;
            displayQuestion = questions[4];
            theQuestion.text(displayQuestion);
            optionA.text(questionFiveAnswers[0]);
            optionB.text(questionFiveAnswers[1]);
            optionC.text(questionFiveAnswers[2]);
            optionD.text(questionFiveAnswers[3]);
            resetForQuestion();
        }
        else if (displayQuestion === questions[4]) {
            $("#status").text("incorrect");
            $("#thegame").hide();
            clearInterval(intervalId1);
            //intervalId1 = setInterval(decrement1, 1000);

            incorrect++;
            displayQuestion = questions[5];
            theQuestion.text(displayQuestion);
            stop();

        };
    });
}
function dButton () {

    optionD.on("click", function optionDButton (click) {
        var intervalId1;
        var number1 = 2;
        function decrement1() {
            number1--;
            if (number1 === 0) {
                $("#thegame").show();
                $("#status").text("");
                //if (displayQuestion === questions[4]) {
                //    $("#thegame").hide();
                //}
            }
        }

        if (displayQuestion === questions[0]) {
            $("#status").text("incorrect");
            $("#thegame").hide();
            clearInterval(intervalId1);
            intervalId1 = setInterval(decrement1, 1000);

            incorrect++;
            displayQuestion = questions[1];
            theQuestion.text(displayQuestion);
            optionA.text(questionTwoAnswers[0]);
            optionB.text(questionTwoAnswers[1]);
            optionC.text(questionTwoAnswers[2]);
            optionD.text(questionTwoAnswers[3]);
            resetForQuestion();
        }
        else if (displayQuestion === questions[1]) {
            $("#status").text("incorrect");
            $("#thegame").hide();
            clearInterval(intervalId1);
            intervalId1 = setInterval(decrement1, 1000);

            incorrect++;
            displayQuestion = questions[2];
            theQuestion.text(displayQuestion);
            optionA.text(questionThreeAnswers[0]);
            optionB.text(questionThreeAnswers[1]);
            optionC.text(questionThreeAnswers[2]);
            optionD.text(questionThreeAnswers[3]);
            resetForQuestion();
        }
        else if (displayQuestion === questions[2]) {
            $("#status").text("incorrect");
            $("#thegame").hide();
            clearInterval(intervalId1);
            intervalId1 = setInterval(decrement1, 1000);

            incorrect++;
            displayQuestion = questions[3];
            theQuestion.text(displayQuestion);
            optionA.text(questionFourAnswers[0]);
            optionB.text(questionFourAnswers[1]);
            optionC.text(questionFourAnswers[2]);
            optionD.text(questionFourAnswers[3]);
            resetForQuestion();
        }
        else if (displayQuestion === questions[3]) {
            $("#status").text("incorrect");
            $("#thegame").hide();
            clearInterval(intervalId1);
            intervalId1 = setInterval(decrement1, 1000);

            incorrect++;;
            displayQuestion = questions[4];
            theQuestion.text(displayQuestion);
            optionA.text(questionFiveAnswers[0]);
            optionB.text(questionFiveAnswers[1]);
            optionC.text(questionFiveAnswers[2]);
            optionD.text(questionFiveAnswers[3]);
            resetForQuestion();
        }
        else if (displayQuestion === questions[4]) {
            $("#status").text("incorrect");
            $("#thegame").hide();
            clearInterval(intervalId1);
            //intervalId1 = setInterval(decrement1, 1000);

            incorrect++;
            displayQuestion = questions[5];
            theQuestion.text(displayQuestion);
            stop();

        };
    });
}
