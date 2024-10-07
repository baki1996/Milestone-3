"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const form = document.getElementById('resume-form');
const resumeDisplay = document.getElementById('resume-display');
const resumeContent = document.getElementById('resume-content');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission from refreshing the page
    // Gather form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        education: document.getElementById('education').value,
        workExperience: document.getElementById('workExperience').value,
        skills: document.getElementById('skills').value
    };
    // Display the resume
    displayResume(formData);
});
function displayResume(data) {
    resumeContent.innerHTML = `
        <h3>${data.name}</h3>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Education:</strong> ${data.education}</p>
        <p><strong>Work Experience:</strong> ${data.workExperience}</p>
        <p><strong>Skills:</strong> ${data.skills}</p>
    `;
}
