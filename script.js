const heartContainer = document.getElementById("heart-container");

for (let i = 0; i < 50; i++) {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = `${Math.floor(Math.random() * 100)}%`;
  heart.style.top = `${Math.floor(Math.random() * -100)}px`;
  heart.style.animationDelay = `${Math.random() * 10}s`;
  heartContainer.appendChild(heart);
}

const message = "Te quiero, Kaori <3";
const messageContainer = document.getElementById("message-container");
let i = 0;

const addLetter = () => {
  if (i < message.length) {
    messageContainer.innerHTML += message[i];
    i++;
    setTimeout(addLetter, 300);
  }
};

addLetter();
