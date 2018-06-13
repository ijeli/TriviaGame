var number = 20;
var intervalId;
var questions = [];
var answers = [];
var correct = 0;
var incorrect = 0;
var holder = [];

var q1 = "Naruto was first publish in what year?"; // 1997
questions.push(q1);
var q1Answer = ["1997", "1994", "1980", "1999"];
answers.push(q1Answer);

var q2 = "Bleach was written and drawn by who?"; // Tite Kubo
questions.push(q2);
var q2Answer = ["Tite Kubo", "Yukki Yu", "Sasuke Wen", "Niki"];
answers.push(q2Answer);

var q3 = "Which is the longest running Shounen manga?" // One Piece
questions.push(q3);
var q3Answer = ["Naruto", "One Piece", "Bleach", "Dragonball Z"];
answers.push(q3Answer);

var q4 = "Shounen manga and anime are known for what?" //High action stories
questions.push(q4);
var q4Answer = ["High Action Stories", "Romantic Comedy", "Slice of Life", "Gore"]
answers.push(q4Answer);

var q5 = "Which anime put Shounen on the map for best content of all time?"; //Dragonball Z
questions.push(q5);
var q5Answer = ["Naruto", "One Piece", "Bleach", "Dragonball Z"];
answers.push(q5Answer);


for (var i = 0; i < questions.length; i++) {
    console.log(questions[i]);
}


$("#startButton").on("click", run);
$("#stopButton").on("click", stop);
$("#resetButton").on("click", reset);
var theQuestion = $("#question")
var optionA = $("#optionOne");
var optionB = $("#optionTwo");
var optionC = $("#optionThree");
var optionD = $("#optionFour");
var newQuestion = questions[Math.floor(Math.random() * questions.length)];

console.log(questions.indexOf(newQuestion));

function hold() {
    for (var i = 0; i < holder.length; i++){}; 
};


function noRepeat () {
    if (newQuestion === hold() ) {
        nextQuestion();
    };
    console.log("yes ma'am")

};

function fourButtons () {
    optionA.on("click", function optionAButton (click) {
        if (newQuestion === questions[0]) {
            alert("correct");
            correct++

        }
        else if (newQuestion === questions[1]) {
            alert("correct");
            correct++

        }
        else if (newQuestion === questions[2]) {
            alert("incorrect");
            incorrect++

        };
        if (newQuestion === questions[3]) {
            alert("correct");
            correct++

        }
        else if (newQuestion === questions[4]) {
            alert("incorrect");
            incorrect++

        };
        holder.push(newQuestion);
        nextQuestion();
    });
    optionB.on("click", function optionBBution (click) {
        if (newQuestion === questions[0]) {
            alert("incorrect");
            incorrect++

        }
        else if (newQuestion === questions[1]) {
            alert("incorrect");
            incorrect++

        }
        else if (newQuestion === questions[2]) {
            alert("correct");
            correct++

        }
        else if (newQuestion === questions[3]) {
            alert("incorrect");
            incorrect++
            

        }
        else if (newQuestion === questions[4]) {
            alert("incorrect");
            incorrect++

        };
        holder.push(newQuestion);
        nextQuestion();
    });
    optionC.on("click", function optionCButton (click) {
        if (newQuestion === questions[0]) {
            alert("incorrect");
            incorrect++

        }
        else if (newQuestion === questions[1]) {
            alert("incorrect");
            incorrect++

        }
        else if (newQuestion === questions[2]) {
            alert("incorrect");
            incorrect++

        }
        else if (newQuestion === questions[3]) {
            alert("incorrect")
            incorrect++

        }
        else if (newQuestion === questions[4]) {
            alert("incorrect");
            incorrect++

        };
        holder.push(newQuestion);
        nextQuestion();
    });
    optionD.on("click", function optionDButton (click) {
        if (newQuestion === questions[0]) {
            alert("incorrect");
            incorrect++

        }
        else if (newQuestion === questions[1]) {
            alert("incorrect");
            incorrect++

        }
        else if (newQuestion === questions[2]) {
            alert("incorrect");
            incorrect++

        }
        else if (newQuestion === questions[3]) {
            alert("correct")
            correct++

        }
        else if (newQuestion === questions[4]) {
            alert("correct");
            correct++

        };
        holder.push(newQuestion);
        nextQuestion();
    });
}


function nextQuestion () {
    newQuestion = questions[Math.floor(Math.random() * questions.length)];
    theQuestion.text(newQuestion)
    if (newQuestion === questions[0]) {
        optionA.text(q1Answer[0]);
        optionB.text(q1Answer[1]);
        optionC.text(q1Answer[2]);
        optionD.text(q1Answer[3]);
        questions.splice(newQuestion,1);
        answers.splice(0,1)
    }
    else if (newQuestion === questions[1]) {
        optionA.text(q2Answer[0]);
        optionB.text(q2Answer[1]);
        optionC.text(q2Answer[2]);
        optionD.text(q2Answer[3]);
        questions.splice(newQuestion,1);
        answers.splice(1,1)
    }
    else if (newQuestion === questions[2]) {
        optionA.text(q3Answer[0]);
        optionB.text(q3Answer[1]);
        optionC.text(q3Answer[2]);
        optionD.text(q3Answer[3]);
        questions.splice(newQuestion,1);
        answers.splice(2,1)
    }
    else if (newQuestion === questions[3]) {
        optionA.text(q4Answer[0]);
        optionB.text(q4Answer[1]);
        optionC.text(q4Answer[2]);
        optionD.text(q4Answer[3]);
        questions.splice(newQuestion,1);
        answers.splice(3,1)
    }
    else if (newQuestion === questions[4]) {
        optionA.text(q5Answer[0]);
        optionB.text(q5Answer[1]);
        optionC.text(q5Answer[2]);
        optionD.text(q5Answer[3]);
        questions.splice(newQuestion,1);
        answers.splice(4,1)
    };
    
    //noRepeat();
    //removeQuestion();
}

function removeQuestion () {
    if (newQuestion === questions[0]) {
        questions.splice(0);
    }
    else if (newQuestion === question [1]) {
        question.splice(1);
    }
    else if (newQuestion === question [2]) {
        question.splice(2);
    }
    else if (newQuestion === question [3]) {
        question.splice(3);
    }
    else if (newQuestion === question [4]) {
        question.splice(4);
    }
    console.log("working");
    console.log(questions.length)
}

function run() {
    $("#startText").hide();
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    theQuestion.text(newQuestion)
    if (newQuestion === questions[0]) {
        optionA.text(q1Answer[0]);
        optionB.text(q1Answer[1]);
        optionC.text(q1Answer[2]);
        optionD.text(q1Answer[3]);
    }
    else if (newQuestion === questions[1]) {
        optionA.text(q2Answer[0]);
        optionB.text(q2Answer[1]);
        optionC.text(q2Answer[2]);
        optionD.text(q2Answer[3]);
    }
    else if (newQuestion === questions[2]) {
        optionA.text(q3Answer[0]);
        optionB.text(q3Answer[1]);
        optionC.text(q3Answer[2]);
        optionD.text(q3Answer[3]);
    }
    else if (newQuestion === questions[3]) {
        optionA.text(q4Answer[0]);
        optionB.text(q4Answer[1]);
        optionC.text(q4Answer[2]);
        optionD.text(q4Answer[3]);
    }
    else if (newQuestion === questions[4]) {
        optionA.text(q5Answer[0]);
        optionB.text(q5Answer[1]);
        optionC.text(q5Answer[2]);
        optionD.text(q5Answer[3]);
    };
    fourButtons();
    if (questions === []) {
        stop();
    };
};



function stop() {
    clearInterval(intervalId);
};


function decrement() {
    number--;
    $("#countdown").html(number);
    if (number === 0) {
        alert("times up");
        stop();
        $("#correct").text("correct " + correct);
        $("#incorrect").text("incorrect " + incorrect);
        $("#thegame").hide();
    }
};

function reset() {
    number = 10;
    $("#countdown").html(number);
    $("#thegame").show();
    correct = 0;
    incorrect = 0;
    $("#correct").text("correct " + correct);
    $("#incorrect").text("incorrect " + incorrect);
    run();

};

