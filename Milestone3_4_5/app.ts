const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLElement;

const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const educationInput = document.getElementById('education') as HTMLInputElement;
const experienceInput = document.getElementById('experience') as HTMLInputElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;


const displayName = document.getElementById('display-name') as HTMLElement;
const displayEmail = document.getElementById('display-email') as HTMLElement;
const displayEducation = document.getElementById('display-education') as HTMLElement;
const displayExperience = document.getElementById('display-experience') as HTMLElement;
const displaySkills = document.getElementById('display-skills') as HTMLElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();


    displayName.textContent = nameInput.value;
    displayEmail.textContent = emailInput.value;
    displayEducation.textContent = educationInput.value;
    displayExperience.textContent = experienceInput.value;
    displaySkills.textContent = skillsInput.value;


    resumeDisplay.style.display = 'block';
});

// Editable Sections
[displayName, displayEmail, displayEducation, displayExperience, displaySkills].forEach(element => {
    element.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLElement;
        const newValue = prompt("Edit the text:", target.textContent);
        if (newValue !== null) {
            target.textContent = newValue;
        }
    });
});
