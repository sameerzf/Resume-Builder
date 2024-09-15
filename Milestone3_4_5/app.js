var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
// Form Fields
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var educationInput = document.getElementById('education');
var experienceInput = document.getElementById('experience');
var skillsInput = document.getElementById('skills');
// Display Fields
var displayName = document.getElementById('display-name');
var displayEmail = document.getElementById('display-email');
var displayEducation = document.getElementById('display-education');
var displayExperience = document.getElementById('display-experience');
var displaySkills = document.getElementById('display-skills');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Populate the Resume
    displayName.textContent = nameInput.value;
    displayEmail.textContent = emailInput.value;
    displayEducation.textContent = educationInput.value;
    displayExperience.textContent = experienceInput.value;
    displaySkills.textContent = skillsInput.value;
    // Show Resume
    resumeDisplay.style.display = 'block';
});
// Editable Sections
[displayName, displayEmail, displayEducation, displayExperience, displaySkills].forEach(function (element) {
    element.addEventListener('click', function (e) {
        var target = e.target;
        var newValue = prompt("Edit the text:", target.textContent);
        if (newValue !== null) {
            target.textContent = newValue;
        }
    });
});
