var gradeFourLevels = document.getElementById('gradeFourLevels');
var gradeFour = document.getElementById('gradeFour');
var gradeFourContent = document.getElementById('gradeFourContent');
var gradeFourLevel1Content = document.getElementById('gradeFourLevel1Content');
var gradeFourQuiz1 = document.getElementById('gradeFourQuiz1');
var quiz1Answer = document.getElementById('quiz1Answer');
var quiz1Mouse = document.getElementById('quiz1Mouse');
var quiz1Answer__2 = document.getElementById('quiz1Answer__2');
var gradeFourQuiz2 =document.getElementById('gradeFourQuiz2');
var quiz2Answer__2 = document.getElementById('quiz2Answer__2');
var displayGradeFourQuiz3 = document.getElementById('displayGradeFourQuiz3');
var quiz2Answer = document.getElementById('quiz2Answer');
var gradeFourQuiz3 = document.getElementById('gradeFourQuiz3');
var quiz3Answer = document.getElementById('quiz3Answer');
var quiz3Answer__2 =document.getElementById('quiz3Answer__2');
var gradeFourQuiz4 = document.getElementById('gradeFourQuiz4');
var quiz4Answer = document.getElementById('quiz4Answer');
var quiz4Answer__2 = document.getElementById('quiz4Answer__2');
var gradeFourQuiz5 = document.getElementById('gradeFourQuiz5');
var quiz5Answer = document.getElementById('quiz5Answer');
var quiz5Answer__2 = document.getElementById('quiz5Answer__2');
 
function displayGradeFourLevels() {
    gradeFourLevels.style.display = "block";
    grade__selection.style.display = "none";
}

function displayGradeFourLevel1() {
    gradeFourContent.style.display = "block";
    gradeFourLevels.style.display = "none";
}

function displayGradeFour() {
    gradeFour.style.display = "block";
    gradeFourLevels.style.display = "none";
}

function displayGradeFourContent() {
    gradeFourContent.style.display = "block";
    gradeFour.style.display = "none";
}

function displayGradeFourLevel1Content() {
    gradeFourLevel1Content.style.display = "block";
    gradeFourContent.style.display = "none";
}

function displayGradeFourQuiz1() {
    gradeFourQuiz1.style.display = "block";
    gradeFourLevel1Content.style.display = "none";
}

function returnToMenu() {
    dashboard.style.display = "block";
    gradeFourQuiz1.style.display = "none";
}


var incorrectAttemptsQuiz5 = 0;

document.querySelector('.quiz5Button').addEventListener('click', function() {
    var input = document.querySelector('.quiz5Input').value.trim().toLowerCase();
    incorrectAttemptsQuiz5++;

    if (input !== "headset") {
        if (incorrectAttemptsQuiz5 === 3) {
            alert("You have made 3 incorrect attempts. Returning to the menu.");
            returnToMenu();
            incorrectAttemptsQuiz5 = 0;
            document.querySelector('.quiz5Input').value = "";
        } else {
            alert("Incorrect answer. Please try again.");
            document.querySelector('.quiz5Input').value = "";
        }
    }
    else {
        alert('Correct!')
        document.querySelector('.quiz5Input').value = "";
        quiz5Answer.style.display = "block"
        gradeFourQuiz5.style.display = "none"
    }
});


var incorrectAttemptsQuiz4 = 0;

document.querySelector('.quiz4Button').addEventListener('click', function() {
    var input = document.querySelector('.quiz4Input').value.trim().toLowerCase();
    incorrectAttemptsQuiz4++;

    if (input !== "pcu") {
        if (incorrectAttemptsQuiz4 === 3) {
            alert("You have made 3 incorrect attempts. Returning to the menu.");
            returnToMenu();
            incorrectAttemptsQuiz4 = 0;
            document.querySelector('.quiz4Input').value = "";
        } else {
            alert("Incorrect answer. Please try again.");
            document.querySelector('.quiz4Input').value = "";
        }
    }
    else {
        document.querySelector('.quiz4Input').value = "";
        quiz4Answer.style.display = "block"
        gradeFourQuiz4.style.display = "none"
    }
});


var incorrectAttemptsQuiz3 = 0;

document.querySelector('.quiz3Button').addEventListener('click', function() {
    var input = document.querySelector('.quiz3Input').value.trim().toLowerCase();
    incorrectAttemptsQuiz3++;

    if (input !== "monitor") {
        if (incorrectAttemptsQuiz3 === 3) {
            alert("You have made 3 incorrect attempts. Returning to the menu.");
            returnToMenu();
            incorrectAttemptsQuiz3 = 0;
            document.querySelector('.quiz3Input').value = "";
        } else {
            alert("Incorrect answer. Please try again.");
            document.querySelector('.quiz3Input').value = "";
        }
    }
    else {
        document.querySelector('.quiz3Input').value = "";
        quiz3Answer.style.display = "block"
        gradeFourQuiz3.style.display = "none"
    }
});

var incorrectAttemptsQuiz3 = 0;

document.querySelector('.quiz2Button').addEventListener('click', function() {
    var input = document.querySelector('.quiz2Input').value.trim().toLowerCase();
    incorrectAttemptsQuiz3++;

    if (input !== "keyboard") {
        if (incorrectAttemptsQuiz3 === 3) {
            alert("You have made 3 incorrect attempts. Returning to the menu.");
            returnToMenu();
            incorrectAttemptsQuiz3 = 0;
            document.querySelector('.quiz2Input').value = "";
        } else {
            alert("Incorrect answer. Please try again.");
            document.querySelector('.quiz2Input').value = "";
        }
    }
    else {
        document.querySelector('.quiz2Input').value = "";
        quiz2Answer.style.display = "block"
        gradeFourQuiz2.style.display = "none"
    }
});


var incorrectAttempts = 0;

document.querySelector('.quiz1Button').addEventListener('click', function() {
    var input = document.querySelector('.quiz1Input').value.trim().toLowerCase();
    incorrectAttempts++;

    if (input !== "mouse") {
        if (incorrectAttempts === 3) {
            alert("You have made 3 incorrect attempts. Returning to the menu.");
            returnToMenu();
            incorrectAttempts = 0;
            document.querySelector('.quiz1Input').value = "";
        } else {
            alert("Incorrect answer. Please try again.");
            document.querySelector('.quiz1Input').value = "";
        }
    }
    else {
        document.querySelector('.quiz1Input').value = "";
        quiz1Answer.style.display = "block";
        gradeFourQuiz1.style.display = "none";
    }
});



function displayQuiz2Answer2() {
    quiz2Answer__2.style.display = "block"
    quiz2Answer.style.display = "none";
}

function displayQuiz1Answer2() {
    quiz1Answer__2.style.display = "block"
    quiz1Answer.style.display = "none"
}

function displayGradeFourQuiz2() {
    gradeFourQuiz2.style.display = "block"
    quiz1Answer__2.style.display = "none"
}

function haha() {
    gradeFourQuiz3.style.display= "block"
    quiz2Answer__2.style.display = "none";
}

function displayQuiz3Answer2() {
    quiz3Answer__2.style.display = "block"
    quiz3Answer.style.display = "none";
}

function haha1() {
    gradeFourQuiz4.style.display = "block"
    quiz3Answer__2.style.display = "none"
}

function displayQuiz4Answer2() {
    quiz4Answer__2.style.display = "block"
    quiz4Answer.style.display = "none"
}

function haha2() {
    gradeFourQuiz5.style.display = "block"
    quiz4Answer__2.style.display = "none"
}

function displayQuiz5Answer2() {
    quiz5Answer__2.style.display = "block"
    quiz5Answer.style.display = "none"
}