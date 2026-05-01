/* Mobile menu */
function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

/* Loader (safe + smooth) */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }
});

/* Scroll animations + skill bars */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add("active");
    }
  });

  document.querySelectorAll(".progress").forEach(bar => {
    bar.style.width = bar.dataset.width;
  });
});

/* Typing effect */
const text = "Hi, I'm Raiyan";
let i = 0;

function type() {
  const el = document.getElementById("typing");
  if (el && i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 80);
  }
}
type();

/* Particles background */
if (typeof particlesJS !== "undefined") {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80 },
      size: { value: 3 },
      move: { speed: 2 },
      line_linked: { enable: true }
    }
  });
}