// Get form input elements
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;
const educationInput = document.getElementById("education") as HTMLTextAreaElement;
const skillsInput = document.getElementById("skills") as HTMLTextAreaElement;
const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;
const profilePictureInput = document.getElementById("profile-picture") as HTMLInputElement;

// Get preview elements
const previewName = document.getElementById("preview-name")!;
const previewEmail = document.getElementById("preview-email")!;
const previewPhone = document.getElementById("preview-phone")!;
const previewEducation = document.getElementById("preview-education")!;
const previewSkills = document.getElementById("preview-skills")!;
const previewExperience = document.getElementById("preview-experience")!;
const previewPicture = document.getElementById("preview-picture") as HTMLImageElement;

// Update preview dynamically as user types
nameInput.addEventListener("input", () => {
    previewName.textContent = nameInput.value || "Full Name";
});

emailInput.addEventListener("input", () => {
    previewEmail.textContent = emailInput.value || "Email";
});

phoneInput.addEventListener("input", () => {
    previewPhone.textContent = phoneInput.value || "Phone";
});

educationInput.addEventListener("input", () => {
    previewEducation.textContent = educationInput.value || "Education details";
});

skillsInput.addEventListener("input", () => {
    previewSkills.textContent = skillsInput.value || "Skills details";
});

experienceInput.addEventListener("input", () => {
    previewExperience.textContent = experienceInput.value || "Experience details";
});

// Handle profile picture input and preview
profilePictureInput.addEventListener("change", (event) => {
    const input = event.target as HTMLInputElement | null;
    if (input && input.files && input.files.length > 0) {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
            if (e.target) {
                previewPicture.src = e.target.result as string;
                previewPicture.style.display = "block";
            }
        };
        reader.readAsDataURL(file);
    }
});

// Get 'Generate Resume' button and output container
const generateResumeBtn = document.getElementById("generate-resume-btn") as HTMLButtonElement;
const resumeOutput = document.getElementById("resume-output")!;
const outputContent = document.getElementById("output-content")!;

// Handle 'Generate Resume' button click
generateResumeBtn.addEventListener("click", () => {
    // Generate the resume content
    const generatedResume = `
        
         ${previewPicture.src ? `<img src="${previewPicture.src}" alt="Profile Picture" style="max-width: 100px; display: block; margin-top: 10px;" />` : ""}
        <h3>${nameInput.value || "Full Name"}</h3>
        <p><strong>Email:</strong> ${emailInput.value || "Email"}</p>
        <p><strong>Phone:</strong> ${phoneInput.value || "Phone"}</p>
        <p><strong>Education:</strong> ${educationInput.value || "Education details"}</p>
        <p><strong>Skills:</strong> ${skillsInput.value || "Skills details"}</p>
        <p><strong>Experience:</strong> ${experienceInput.value || "Experience details"}</p>
       
    `;

    // Populate the output section
    outputContent.innerHTML = generatedResume;

    // Show the resume output section
    resumeOutput.style.display = "block";
});
