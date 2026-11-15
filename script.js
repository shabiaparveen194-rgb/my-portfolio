const textElement = document.querySelector(".typing");
const words = ["Web Designer", "Frontend Developer","VS Code Coder"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100; 

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 1500; 
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; 
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// Wedsite loading Animation //
document.addEventListener("DOMContentLoaded", typeEffect);