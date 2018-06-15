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
$("#stopButton").hide();
$("#resetButton").hide();

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
$("#home").on("click", resetBig);

var theQuestion = $("#question")
var optionA = $("#optionOne");
var optionB = $("#optionTwo");
var optionC = $("#optionThree");
var optionD = $("#optionFour");

//functions
function resetBig () {
    stop();
    $("#startButton").show();
    $(".startText").show();
    $("#thegame").hide();
    $("#correct").hide();
    $("#incorrect").hide();
    $("#status").text("");
    $("#resetButton").hide();
    $("#countdown").html("");
    questionOne();
}

function run() {
    $("#thegame").show();
    $("#countdown").html(number);
    $(".startText").hide();
    $("#startButton").hide();
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    var currentQuestion;
    fourButtons();
    oneQuestion();
}

function stop() {
    $("#resetButton").show();
    clearInterval(intervalId);
    $("#correct").text("correct " + correct);
    $("#incorrect").text("incorrect " + incorrect);
    $("#thegame").hide();
    $("#correct").show();
    $("#incorrect").show();
    $("#status").show();
    if (correct >= 3) {
        $("#status").html("<img src = 'assets/images/success.gif' class = 'responsive-image'/><br><h1>TRUE SHONEN MASTER</h1>")
    }
    else {
        $("#status").append("<img src = 'assets/images/fail.gif' class = 'responsive-image'/><br><h2>Try elsewhere filthy casual</h2>")
    }
}

function reset () {
    $("#resetButton").hide();
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
    $("#status").text("");
}

function decrement() {
    number--;
    $("#countdown").html(number);
    if (number === 0) {
        timesUp();
        number = 24;
    }
}

function resetForQuestion() {
    number = 24;
    $("#countdown").html(number);
    if (currentQuestion === questions[5]) {
        number = 10;
    }
}

function resetForEnd() {
    number = 4;
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

function endQuestion() {
    currentQuestion = questions[5];
    theQuestion.text("");
    optionA.text("");
    optionB.text("")
    optionC.text("")
    optionD.text("")
    resetForQuestion()
}

function fourButtons () {
    var intervalIdLocal;
    var numberLocal = 4;
    function decrementLocal() {
        numberLocal--;
        if (numberLocal === 0) {
            clearInterval(intervalIdLocal);
            $("#thegame").show();
            $("#status").text("");
            numberLocal = 4;
            if (currentQuestion === questions[5]) {
                numberLocal = 4;
            }
        }
    }

    optionA.on("click", function() {
        if (currentQuestion === questions[3]) {
            correct++;
            $("#status").text("Correct! One Piece is Shonen's longest running Manga!");
            $("#status").append("<br><img src = 'assets/images/onepieceSuccess.gif' class = 'responsive-image'/>")
            $("#thegame").hide();
            clearInterval(intervalIdLocal);
            intervalIdLocal = setInterval(decrementLocal, 1000);
            fiveQuestion();
            resetForQuestion();
        }
        else if (currentQuestion === questions[1]) {
            correct++;
            $("#status").text("Correct! Tite Kubo is the creator of Bleach!");
            $("#status").append("<br><img src = 'assets/images/bleachSuccess.gif' class = 'responsive-image'/>")
            $("#thegame").hide();
            clearInterval(intervalIdLocal);
            intervalIdLocal = setInterval(decrementLocal, 1000);
            threeQuestion();
            resetForQuestion();
        }
        else {
            incorrect++;
            $("#status").text("");
            $("#thegame").hide();
            clearInterval(intervalIdLocal);
            intervalIdLocal = setInterval(decrementLocal, 1000);
            incorrectAnswer();
            resetForQuestion();
        }
    });
    optionB.on("click", function() {
        if (currentQuestion === questions[4]) {
            correct++;
            $("#status").text("Correct! Shonen is an Action Adventure genre!");
            $("#status").append("<br><img src = 'assets/images/shonenwin.gif' class = 'responsive-image'/>")
            $("#thegame").hide();
            clearInterval(intervalIdLocal);
            intervalIdLocal = setInterval(decrementLocal, 1000);
            resetForQuestion();
            endQuestion();
        }
        else {
            incorrect++;
            $("#status").text("");
            $("#thegame").hide();
            clearInterval(intervalIdLocal);
            intervalIdLocal = setInterval(decrementLocal, 1000);
            incorrectAnswer();
            resetForQuestion();
        }
    });
    optionC.on("click", function() {
        if (currentQuestion === questions[0]) {
            correct++
            $("#status").text("Correct! Naruto started in 1997!");
            $("#status").append("<br><img src = 'assets/images/nartuoSuccess.gif' class = 'responsive-image'/>")
            $("#thegame").hide();
            clearInterval(intervalIdLocal);
            intervalIdLocal = setInterval(decrementLocal, 1000);
            twoQuestion();
            resetForQuestion();
        }
        else if (currentQuestion === questions[2])  {
            correct++
            $("#status").text("Correct! DragonBall Z put Shonen Weekly on the map!");
            $("#status").append("<br><img src = 'assets/images/dbzSuccess.gif' class = 'responsive-image'/>")
            $("#thegame").hide();
            clearInterval(intervalIdLocal);
            intervalIdLocal = setInterval(decrementLocal, 1000);
            fourQuestion();
            resetForQuestion();
        }
        else {
            incorrect++
            $("#status").text("");
            $("#thegame").hide();
            clearInterval(intervalIdLocal);
            intervalIdLocal = setInterval(decrementLocal, 1000);
            incorrectAnswer();
            resetForQuestion();
        }
    });
    optionD.on("click", function() {
        incorrect++;
        $("#status").text("");
        $("#thegame").hide();
        clearInterval(intervalIdLocal);
        intervalIdLocal = setInterval(decrementLocal, 1000);
        incorrectAnswer();
        resetForQuestion();
    });
}


function incorrectAnswer () {
    

    if (currentQuestion === questions[0]) {
        $("#status").append("INCORRECT! The correct answer was 1997");
        $("#status").append("<br><img src = 'assets/images/narutoFail.gif' class = 'responsive-image'/>")
        twoQuestion();
    }
    else if (currentQuestion === questions[1]) {
        $("#status").append("INCORRECT! The correct answer was Tite Kubo");
        $("#status").append("<br><img src = 'assets/images/bleachFail.gif' class = 'responsive-image'/>")
        threeQuestion();
    }
    else if (currentQuestion === questions[2]) {
        $("#status").append("INCORRECT! The correct answer was DragonBall Z");
        $("#status").append("<br><img src = 'assets/images/dbzFail.gif' class = 'responsive-image'/>")
        fourQuestion();
    }
    else if (currentQuestion === questions[3]) {
        $("#status").append("INCORRECT! The correct answer was One Piece");
        $("#status").append("<br><img src = 'assets/images/onepieceFail.gif' class = 'responsive-image'/>")
        fiveQuestion();
    }
    else if (currentQuestion === questions[4]) {
        $("#status").append("INCORRECT! The correct answer was Action Adventure");
        $("#status").append("<br><img src = 'assets/images/shonenlose.gif' class = 'responsive-image'/>")
        endQuestion();
    }
    else if (currentQuestion === questions[5]) {
        stop()
    }
}

function timesUp() {
    var intervalIdLocal;
    var numberLocal = 4;
    function decrementLocal() {
        numberLocal--;
        if (numberLocal === 0) {
            clearInterval(intervalIdLocal);
            $("#thegame").show();
            $("#status").text("");
            numberLocal = 4;
            if (currentQuestion === questions[5]) {
                numberLocal = 4;
            }
        }
    }

    if (currentQuestion === questions[0]) {
        $("#status").text("");
        $("#status").text("TIMES UP! The correct answer was 1997");
        $("#status").append("<br><img src = 'assets/images/narutoFail.gif' class = 'responsive-image'/>")
        twoQuestion();
    }
    else if (currentQuestion === questions[1]) {
        $("#status").text("");
        $("#status").text("TIMES UP! The correct answer was Tite Kubo");
        $("#status").append("<br><img src = 'assets/images/bleachFail.gif' class = 'responsive-image'/>")
        threeQuestion();
    }
    else if (currentQuestion === questions[2]) {
        $("#status").text("");
        $("#status").text("TIMES UP! The correct answer was DragonBall Z");
        $("#status").append("<br><img src = 'assets/images/dbzFail.gif' class = 'responsive-image'/>")
        fourQuestion();
    }
    else if (currentQuestion === questions[3]) {
        $("#status").text("");
        $("#status").text("TIMES UP! The correct answer was One Piece");
        $("#status").append("<br><img src = 'assets/images/onepieceFail.gif' class = 'responsive-image'/>")
        fiveQuestion();
    }
    else if (currentQuestion === questions[4]) {
        $("#status").text("");
        $("#status").text("TIMES UP! The correct answer was Action Adventure");
        $("#status").append("<br><img src = 'assets/images/shonenlose.gif' class = 'responsive-image'/>")
        endQuestion();
    }
    else if (currentQuestion === questions[5]) {
        $("#status").text("");
        stop()
    }

}
