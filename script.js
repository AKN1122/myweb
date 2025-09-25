window.addEventListener("scroll", () => {
  let scrollTop = this.window.scrollY
  let docHeight = document.body.scrollHeight - window.innerHeight
  let percent = (scrollTop / docHeight) * 100
  document.getElementById("progress-bar").style.width = percent + "%"
}
)


const words = ["Developer", "UI Designer", "Freelancer"];
const el = document.querySelector(".typewriter");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
function type() {
  const currentWord = words[wordIndex];
  const text = isDeleting
    ? currentWord.substring(0, charIndex--)
    : currentWord.substring(0, charIndex++);

  el.textContent = text;

  if (!isDeleting && charIndex === currentWord.length) {
    setTimeout(() => isDeleting = true, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  const speed = isDeleting ? 100 : 100;
  setTimeout(type, speed);
}

type();

//

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

//