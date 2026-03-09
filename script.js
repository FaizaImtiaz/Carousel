const cards = [
  {
    name: "Ali ",
    role: "Software Engineer",
    text: "Hello, my name is Ali. I am a student of BS Software Engineering.",
    img: "img1.jfif",
  },
  {
    name: "Ahmad",
    role: "Web Developer",
    text: "I love building websites and learning new technologies.",
    img: "img2.jfif",
  },
  {
    name: "Mustafa",
    role: "UI Designer",
    text: "Design is my passion. I create beautiful user interfaces.",
    img: "img3.jfif",
  },
];

let current = 0;

const cardImg = document.querySelector("img");
const cardName = document.querySelector("h2");
const cardRole = document.querySelector("h3");
const cardText = document.querySelector("p");
const prevBtn = document.getElementById("left");
const nextBtn = document.getElementById("right");
const surpriseBtn = document.getElementById("surprise me");

function updateCard(index) {
  cardImg.src = cards[index].img;
  cardName.textContent = cards[index].name;
  cardRole.textContent = cards[index].role;
  cardText.textContent = cards[index].text;
}

left.addEventListener("click", () => {
  current = (current - 1 + cards.length) % cards.length;
  updateCard(current);
});

right.addEventListener("click", () => {
  current = (current + 1) % cards.length;
  updateCard(current);
});

surpriseBtn.addEventListener("click", () => {
  let random;
  do {
    random = Math.floor(Math.random() * cards.length);
  } while (random === current);
  current = random;
  updateCard(current);
});
