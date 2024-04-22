var termsAndCondition = document.getElementById('termsAndCondition');
var hero__title = document.getElementById('hero__title');
var dashboard = document.getElementById('dashboard');
var grade__selection = document.getElementById('grade__selection');
var gradeFour = document.getElementById('gradeFour');
var gradeFive = document.getElementById('gradeFive');
var gradeSix = document.getElementById('gradeSix');
var gradeFourContent = document.getElementById('gradeFourContent');

function displayTermsAndCondition() {
    termsAndCondition.style.display = "block";
    hero__title.style.display = "none";
}

function displayDashboard() {
    termsAndCondition.style.display = "none";
    dashboard.style.display = "block";
}

function displayGrade() {
    dashboard.style.display = "none";
    grade__selection.style.display = "block";
}

function displayFour() {
    grade__selection.style.display = "none";
    gradeFour.style.display ="block";
}

function displayFourContent() {
    gradeFour.style.display ="none";
    gradeFourContent.style.display = "block";
}

function displayFive() {
    grade__selection.style.display = "none";
    gradeFive.style.display ="block";
}

function displaySix() {
    grade__selection.style.display = "none";
    gradeSix.style.display ="block";
}