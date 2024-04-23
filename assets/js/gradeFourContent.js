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
var gradeFourQuiz6 = document.getElementById('gradeFourQuiz6');
var quiz6Answer = document.getElementById('quiz6Answer');
var quiz6Answer__2 = document.getElementById('quiz6Answer__2');
var gradeFourQuiz7 = document.getElementById('gradeFourQuiz7');
var quiz7Answer = document.getElementById('quiz7Answer');
var quiz7Answer__2 = document.getElementById('quiz7Answer__2');
var inventory = document.getElementById('inventory');
var gradeFourlvl2 = document.getElementById('gradeFourlvl2');
var gradeFourContentlvl2 = document.getElementById('gradeFourContentlvl2')
 
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
    gradeFourContent.style.display = "none";
}

function returnToMenu() {
    dashboard.style.display = "block";
    gradeFourQuiz1.style.display = "none";
}


var incorrectAttemptsQuiz7 = 0;

document.querySelector('.quiz7Button').addEventListener('click', function() {
    var input = document.querySelector('.quiz7Input').value.trim().toLowerCase();
    incorrectAttemptsQuiz7++;

    if (input !== "printer") {
        if (incorrectAttemptsQuiz7 === 3) {
            alert("You have made 3 incorrect attempts. Returning to the menu.");
            returnToMenu();
            incorrectAttemptsQuiz7 = 0;
            document.querySelector('.quiz7Input').value = "";
        } else {
            alert("Incorrect answer. Please try again.");
            document.querySelector('.quiz7Input').value = "";
        }
    }
    else {
        document.querySelector('.quiz7Input').value = "";
        quiz7Answer.style.display = "block"
        gradeFourQuiz7.style.display = "none"
    }
});


var incorrectAttemptsQuiz6 = 0;

document.querySelector('.quiz6Button').addEventListener('click', function() {
    var input = document.querySelector('.quiz6Input').value.trim().toLowerCase();
    incorrectAttemptsQuiz6++;

    if (input !== "speaker") {
        if (incorrectAttemptsQuiz6 === 3) {
            alert("You have made 3 incorrect attempts. Returning to the menu.");
            returnToMenu();
            incorrectAttemptsQuiz6 = 0;
            document.querySelector('.quiz6Input').value = "";
        } else {
            alert("Incorrect answer. Please try again.");
            document.querySelector('.quiz6Input').value = "";
        }
    }
    else {
        document.querySelector('.quiz6Input').value = "";
        quiz6Answer.style.display = "block"
        gradeFourQuiz6.style.display = "none"
    }
});


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

function haha3() {
    gradeFourQuiz6.style.display = "block"
    quiz5Answer__2.style.display = "none"
}

function displayQuiz6Answer2() {
    quiz6Answer__2.style.display = "block"
    quiz6Answer.style.display = "none"
}

function haha4() {
    gradeFourQuiz7.style.display ="block"
    quiz6Answer__2.style.display = "none"
}

function displayQuiz7Answer2() {
    quiz7Answer__2.style.display = "block"
    quiz7Answer.style.display = "none"
}

function haha5() {
    inventory.style.display = "block"
    quiz7Answer__2.style.display = "none"
}

function displayGradeFourlvl2() {
    gradeFourlvl2.style.display = "block"
    gradeFourLevels.style.display = "none"
}

function displayGradeFourContentlvl2() {
    gradeFourContentlvl2.style.display = "block"
    gradeFourlvl2.style.display = "none"
}

function displayGradeFourLevel2Content() {
    gradeFourLevel1Content.style.display = "block"
    gradeFourContentlvl2.style.display = "none"
}

var findHardware = document.getElementById('findHardware');

function displayFindHardware() {
    findHardware.style.display = "block"
    gradeFourContentlvl2.style.display = "none"
}   

var classroom = document.getElementById('classroom');

function displayClassroom() {
    classroom.style.display = "block"
    findHardware.style.display = "none"
}

var explainMouse = document.getElementById('explainMouse')

function displayExplainMouse() {
    explainMouse.style.display = "block"
    classroom.style.display = "none"
}

var leftClick = document.getElementById('leftClick');
var rightClick = document.getElementById('rightClick');

function displayLeftAndRight(event) {
    if (event.button === 0) { // Left click
        leftClick.style.display = 'block';
        rightClick.style.display = 'none';
        explainMouse.style.display = "none"
    } else if (event.button === 2) { // Right click
        leftClick.style.display = 'none';
        rightClick.style.display = 'block';
        explainMouse.style.display = "none"
    }
}

document.getElementById("explainMouse").addEventListener("mousedown", displayLeftAndRight);
