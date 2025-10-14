console.log('Hello World!');

// Step 3: Define Variables for User Data
let name = "Kacy Souvanna";
const hasDownloadedResume = { value: false }; // Object to allow mutation while using const

// Step 4: Display Personalized Greeting
function showGreeting(name) {
    return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

// Display greeting on page load
document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = showGreeting(name);
});

// Step 2: Show Alert When Resume is Downloaded
const downloadButton = document.querySelector('a[download]');
downloadButton.addEventListener('click', function(event) {
    if (!hasDownloadedResume.value) {
        alert("Your resume is downloaded successfully!");
        hasDownloadedResume.value = true;
    }
});

// Step 5: Use Arithmetic for Date Calculations
function daysUntilDeadline(deadlineDate) {
    const today = new Date();
    const deadline = new Date(deadlineDate);
    const diffTime = Math.abs(deadline - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Calculate and display days remaining for the ongoing project
document.addEventListener('DOMContentLoaded', function() {
    const deadline = "2025-11-30";
    const daysRemaining = daysUntilDeadline(deadline);
    const daysElement = document.getElementById('days-remaining');
    daysElement.textContent = `(Remaining: ${daysRemaining} days)`;
    console.log(`Days until AI Chatbot deadline: ${daysRemaining} days`);
});