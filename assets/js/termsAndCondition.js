var termsAndCondition = document.getElementById('termsAndCondition');
var hero__title = document.getElementById('hero__title');
var dashboard = document.getElementById('dashboard');
var grade__selection = document.getElementById('grade__selection');

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