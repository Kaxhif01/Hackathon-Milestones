// Get form input elements
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var educationInput = document.getElementById("education");
var skillsInput = document.getElementById("skills");
var experienceInput = document.getElementById("experience");
var profilePictureInput = document.getElementById("profile-picture");
// Get preview elements
var previewName = document.getElementById("preview-name");
var previewEmail = document.getElementById("preview-email");
var previewPhone = document.getElementById("preview-phone");
var previewEducation = document.getElementById("preview-education");
var previewSkills = document.getElementById("preview-skills");
var previewExperience = document.getElementById("preview-experience");
var previewPicture = document.getElementById("preview-picture");
// Update preview dynamically as user types
nameInput.addEventListener("input", function () {
    previewName.textContent = nameInput.value || "Full Name";
});
emailInput.addEventListener("input", function () {
    previewEmail.textContent = emailInput.value || "Email";
});
phoneInput.addEventListener("input", function () {
    previewPhone.textContent = phoneInput.value || "Phone";
});
educationInput.addEventListener("input", function () {
    previewEducation.textContent = educationInput.value || "Education details";
});
skillsInput.addEventListener("input", function () {
    previewSkills.textContent = skillsInput.value || "Skills details";
});
experienceInput.addEventListener("input", function () {
    previewExperience.textContent = experienceInput.value || "Experience details";
});
// Handle profile picture input and preview
profilePictureInput.addEventListener("change", function (event) {
    var input = event.target;
    if (input && input.files && input.files.length > 0) {
        var file = input.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            if (e.target) {
                previewPicture.src = e.target.result;
                previewPicture.style.display = "block";
            }
        };
        reader.readAsDataURL(file);
    }
});
// Get 'Generate Resume' button and output container
var generateResumeBtn = document.getElementById("generate-resume-btn");
var resumeOutput = document.getElementById("resume-output");
var outputContent = document.getElementById("output-content");
// Handle 'Generate Resume' button click
generateResumeBtn.addEventListener("click", function () {
    // Generate the resume content
    var generatedResume = "\n        \n         ".concat(previewPicture.src ? "<img src=\"".concat(previewPicture.src, "\" alt=\"Profile Picture\" style=\"max-width: 100px; display: block; margin-top: 10px;\" />") : "", "\n        <h3>").concat(nameInput.value || "Full Name", "</h3>\n        <p><strong>Email:</strong> ").concat(emailInput.value || "Email", "</p>\n        <p><strong>Phone:</strong> ").concat(phoneInput.value || "Phone", "</p>\n        <p><strong>Education:</strong> ").concat(educationInput.value || "Education details", "</p>\n        <p><strong>Skills:</strong> ").concat(skillsInput.value || "Skills details", "</p>\n        <p><strong>Experience:</strong> ").concat(experienceInput.value || "Experience details", "</p>\n       \n    ");
    // Populate the output section
    outputContent.innerHTML = generatedResume;
    // Show the resume output section
    resumeOutput.style.display = "block";
});
