var termsAndCondition = document.getElementById('termsAndCondition');
var hero__title = document.getElementById('hero__title');
var dashboard = document.getElementById('dashboard');

function displayTermsAndCondition() {
    termsAndCondition.style.display = "block";
    hero__title.style.display = "none";
}

function displayDashboard() {
    termsAndCondition.style.display = "none";
    dashboard.style.display = "block";
}
