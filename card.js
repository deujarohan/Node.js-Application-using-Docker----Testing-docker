let aScore = 0;
let bScore = 0;

const start = document.querySelectorAll("#play");
const teamA = document.querySelector("cardA");
const teamB = document.querySelector("cardB");

const genCards = () => {
  const obtions = ["A", "J", "Q", "K"];
  const randomCard = Math.floor(Math.random() * 4);
  return obtions[randomCard];
};

const gameDraw = () => {
  console.log("game was draw");
};

//generating random cards
const aCard = () => {
  const playerA = genCards();
  console.log("Player A =", playerA);
  cardA.innerText = playerA;

  if (playerA === "A") {
    cardA.style.backgroundImage = "url('images/ace.png')";
    cardA.style.backgroundSize = "cover";
    cardA.style.color = "transparent";
  } else if (playerA === "J") {
    cardA.style.backgroundImage = "url('images/joker.png')";
    cardA.style.backgroundSize = "cover";
    cardA.style.color = "transparent";
  } else if (playerA === "Q") {
    cardA.style.backgroundImage = "url('images/queen.png')";
    cardA.style.backgroundSize = "cover";
    cardA.style.color = "transparent";
  } else {
    cardA.style.backgroundImage = "url('images/king.png')";
    cardA.style.backgroundSize = "cover";
    cardA.style.color = "transparent";
  }
};
const bCard = () => {
  const playerB = genCards();
  console.log("Player B =", playerB);
  cardB.innerText = playerB;

  if (playerB === "A") {
    cardB.style.backgroundImage = "url('images/ace.png')";
    cardB.style.backgroundSize = "cover";
    cardB.style.color = "transparent";
  } else if (playerB === "J") {
    cardB.style.backgroundImage = "url('images/joker.png')";
    cardB.style.backgroundSize = "cover";
    cardB.style.color = "transparent";
  } else if (playerB === "Q") {
    cardB.style.backgroundImage = "url('images/queen.png')";
    cardB.style.backgroundSize = "cover";
    cardB.style.color = "transparent";
  } else {
    cardB.style.backgroundImage = "url('images/king.png')";
    cardB.style.backgroundSize = "cover";
    cardB.style.color = "transparent";
  }
};

//generating scores
const score = () => {
  let scoreA = 0;
  let scoreB = 0;

  if (aCard === bCard) {
    gameDraw();
  }
};

start.forEach((play) => {
  console.log(play);
  play.addEventListener("click", () => {
    aCard();
    bCard();
  });
});
