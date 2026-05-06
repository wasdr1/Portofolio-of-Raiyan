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
    }, 1000);
  }

  // Start typing after load (so it's visible)
  startTyping();

  // Initialize particles after load and only if library is loaded
  initParticles();
});

/* Scroll animations + skill bars */
let progressInitialized = false;
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add("active");
    }
  });

  // Set progress bars only once when they become visible
  if (!progressInitialized) {
    const anyVisible = Array.from(document.querySelectorAll(".progress")).some(bar =>
      bar.getBoundingClientRect().top < window.innerHeight
    );
    if (anyVisible) {
      document.querySelectorAll(".progress").forEach(bar => {
        if (bar.dataset.width) {
          bar.style.width = bar.dataset.width;
        }
      });
      progressInitialized = true;
    }
  }
});

/* Typing effect (deferred start) */
const text = "Hi, I'm Raiyan";
let i = 0;

function startTyping() {
  // reset in case loader was shown multiple times
  i = 0;
  const el = document.getElementById("typing");
  if (el) el.innerHTML = "";
  type();
}

function type() {
  const el = document.getElementById("typing");
  if (el && i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}

/* Particles background (safe init) */
function initParticles() {
  // if the library isn't loaded yet, try a short retry
  if (typeof particlesJS === "undefined") {
    // optionally try again after a short delay (one retry)
    setTimeout(() => {
      if (typeof particlesJS !== "undefined") {
        createParticles();
      }
    }, 500);
    return;
  }
  createParticles();
}

function createParticles() {
  try {
    particlesJS("particles-js", {
      particles: {
        number: { value: 90 },
        size: { value: 3 },
        move: { speed: 1 },
        line_linked: { enable: true }
      }
    });
  } catch (e) {
    // swallow errors but log for debugging
    console.warn("particlesJS init failed:", e);
  }
}
