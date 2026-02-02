// Love letter reveal

const lines = document.querySelectorAll(".line");
const revealBtn = document.getElementById("revealBtn");

let index = 0;

revealBtn.addEventListener("click", () => {

  if (index < lines.length) {
    lines[index].classList.remove("hidden");
    index++;
  } 
  else {
    switchScreen("letter", "question");
  }

});


// Move "No" button

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {

  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

});


// Yes button

document.getElementById("yesBtn").addEventListener("click", () => {

  switchScreen("question", "final");

});


// Switch screens

function switchScreen(from, to) {

  document.getElementById(from).classList.remove("active");
  document.getElementById(to).classList.add("active");

}


// Floating Hearts Generator

const heartsContainer = document.querySelector(".hearts");

function createHeart() {

  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 6 + Math.random() * 4 + "s";

  heartsContainer.appendChild(heart);

  // Remove after animation
  setTimeout(() => {
    heart.remove();
  }, 10000);

}

// Spawn hearts continuously
setInterval(createHeart, 125);


// Force music autoplay (browser-safe)

const music = document.getElementById("bgMusic");

window.addEventListener("click", () => {
  music.play();
}, { once: true });
