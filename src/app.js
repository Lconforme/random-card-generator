function randomCard() {
  let cardSuits = ["♣", "♦", "♥", "♠"];
  let cardValue = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let selectedcardSuits =
    cardSuits[Math.floor(Math.random() * cardSuits.length)];
  document.getElementById("sign").innerHTML = selectedcardSuits;

  document.getElementById("rotator").innerHTML = selectedcardSuits;
  let card = document.getElementById("card");
  if (selectedcardSuits == "♥") {
    card.classList.add("heart");
  }
  if (selectedcardSuits == "♦") {
    card.classList.add("diamond");
  }
  if (selectedcardSuits == "♣") {
    card.classList.add("clover");
  }
  if (selectedcardSuits == "♠") {
    card.classList.add("spade");
  }

  let selectedcardValue =
    cardValue[Math.floor(Math.random() * cardValue.length)];
  document.getElementById("number").innerHTML = selectedcardValue;
}
console.log(randomCard());
