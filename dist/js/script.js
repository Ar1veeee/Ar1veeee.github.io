const element = document.getElementById("animated-text");
const roles = ["Fullstack Developer", "Cloud Engineer", "IoT Engineer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentRole = roles[roleIndex];
  const displayText = isDeleting
    ? currentRole.substring(0, charIndex--)
    : currentRole.substring(0, charIndex++);

  element.textContent = displayText;

  const typeSpeed = isDeleting ? 50 : 100;
  if (!isDeleting && charIndex === currentRole.length) {
    setTimeout(() => (isDeleting = true), 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }
  setTimeout(typeEffect, typeSpeed);
};

typeEffect();

const checkbox = document.querySelector("#toggle");
const html = document.querySelector("html");

checkbox.addEventListener("click", function () {
  if (checkbox.checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
});
