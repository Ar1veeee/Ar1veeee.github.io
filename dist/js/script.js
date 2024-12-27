const element = document.getElementById("animated-text");
const roles = ["Fullstack Developer", "Cloud Engineer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentRole = roles[roleIndex];
  const displayText = isDeleting
    ? currentRole.substring(0, charIndex--)
    : currentRole.substring(0, charIndex++);

  element.textContent = displayText;

  // Kecepatan mengetik/hapus
  const typeSpeed = isDeleting ? 50 : 100;

  // Beralih antara ketik dan hapus
  if (!isDeleting && charIndex === currentRole.length) {
    setTimeout(() => (isDeleting = true), 1000); // Tunggu sebelum menghapus
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length; // Ganti ke kata berikutnya
  }

  setTimeout(typeEffect, typeSpeed);
};

// Mulai animasi
typeEffect();
