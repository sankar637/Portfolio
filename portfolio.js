// Toggle mobile menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Email sending (redirect to your mail)
function sendMail(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  window.location.href = `mailto:${email}?subject=Message from Sankar &body=${message}%0D%0AFrom: sankarperugu@gmail.com`;
  alert("Your mail app will open to send the message!");
}




