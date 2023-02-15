const heartContainer = document.getElementById("heart-container");
const messageContainer = document.getElementById("message-container");
const playButton = document.getElementById("play-button");

const startAnimation = () => {
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${Math.floor(Math.random() * 100)}%`;
    heart.style.top = `${Math.floor(Math.random() * -100)}px`;
    heart.style.animationDelay = `${Math.random() * 10}s`;
    heartContainer.appendChild(heart);
    const audio = new Audio("song.mp3");
    audio.autoplay = true;
    audio.loop = true;
    audio.volume = 0.1;
  }
  
  let i = 0;
  const message = "Te quiero, Marylin <3 (no sabes cuanto)";
  
  const addLetter = () => {
    if (i < message.length) {
      messageContainer.innerHTML += message[i];
      i++;
      setTimeout(addLetter, 300);
    }
  };
  
  addLetter();
  
  const audio = new Audio("song.flac");
  audio.autoplay = true;
  audio.loop = true;
  audio.volume = 0.5;

  playButton.style.display = "none";
};

playButton.addEventListener("click", startAnimation);
